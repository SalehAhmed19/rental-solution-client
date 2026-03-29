import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { User, AuthState, LoginCredentials } from "../../types/user";

const API_URL = "http://localhost:5000/api/v1/auth";

// --- হেল্পার: এরর মেসেজ এক্সট্রাক্ট করা ---
const getErrorMessage = (error: any, defaultMsg: string) => {
  return error.response?.data?.message || error.message || defaultMsg;
};

// --- ১. লগইন থাঙ্ক ---
export const loginUser = createAsyncThunk<
  { user: User },
  LoginCredentials,
  { rejectValue: string }
>("auth/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(getErrorMessage(error, "লগইন করতে সমস্যা হয়েছে!"));
  }
});

// --- ২. সেশন চেক ---
export const checkAuth = createAsyncThunk<
  { user: User },
  void,
  { rejectValue: string }
>("auth/checkAuth", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    return rejectWithValue("সেশন শেষ হয়ে গেছে।");
  }
});

// --- ৩. লগআউট ---
export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get(`${API_URL}/logout`, { withCredentials: true });
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error, "লগআউট ব্যর্থ হয়েছে"));
    }
  },
);

// --- ৪. প্রোফাইল আপডেট ---
export const updateProfile = createAsyncThunk<
  { user: User },
  { name: string; phone: string },
  { rejectValue: string }
>("auth/updateProfile", async (updatedData, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`${API_URL}/update-me`, updatedData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(getErrorMessage(error, "আপডেট ব্যর্থ হয়েছে"));
  }
});

// --- ৫. এভাটার আপডেট ---
export const updateAvatar = createAsyncThunk<
  { user: User },
  FormData,
  { rejectValue: string }
>("auth/updateAvatar", async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`${API_URL}/update-avatar`, formData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(getErrorMessage(error, "ছবি আপলোড ব্যর্থ হয়েছে"));
  }
});

// --- ৬. পাসওয়ার্ড পরিবর্তন ---
export const updatePassword = createAsyncThunk<
  { message: string },
  { currentPassword: string; newPassword: string },
  { rejectValue: string }
>("auth/updatePassword", async (passwords, { rejectWithValue }) => {
  try {
    const response = await axios.patch(
      `${API_URL}/update-password`,
      passwords,
      { withCredentials: true },
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      getErrorMessage(error, "পাসওয়ার্ড পরিবর্তনে সমস্যা হয়েছে"),
    );
  }
});

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    updateSavedProperties: (state, action: PayloadAction<string[]>) => {
      if (state.user) state.user.savedProperties = action.payload;
    },
    // 🔥 এরর ক্লিয়ার করার জন্য নতুন রিডিউসার
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // লগইন
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // চেক অথ
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      // লগআউট
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
      })
      // প্রোফাইল আপডেট
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        if (state.user) {
          state.user.name = action.payload.user.name;
          state.user.phone = action.payload.user.phone;
        }
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // এভাটার আপডেট
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.loading = false;
        if (state.user) state.user.avatar = action.payload.user.avatar;
        state.error = null;
      })
      // পাসওয়ার্ড আপডেট
      .addCase(updatePassword.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // প্যান্ডিং স্টেটগুলোর জন্য কমন হ্যান্ডলার (কোড ছোট করার জন্য)
    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state) => {
        state.loading = true;
        state.error = null;
      },
    );
  },
});

export const { setUser, updateSavedProperties, clearError } = authSlice.actions;
export default authSlice.reducer;
