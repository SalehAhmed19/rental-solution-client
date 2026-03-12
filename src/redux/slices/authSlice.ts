// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
// import type { User, AuthState, LoginCredentials } from "../../types/user";

// const API_URL = "http://localhost:5000/api/v1/auth";

// // ১. লগইন থাঙ্ক
// export const loginUser = createAsyncThunk<
//   { user: User },
//   LoginCredentials,
//   { rejectValue: string }
// >("auth/login", async (userData, { rejectWithValue }) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, userData, {
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (error: any) {
//     return rejectWithValue(
//       error.response?.data?.message || "লগইন করতে সমস্যা হয়েছে!",
//     );
//   }
// });

// // ২. চেক অথ থাঙ্ক (পেজ রিফ্রেশ করলে সেশন ধরে রাখার জন্য)
// export const checkAuth = createAsyncThunk<
//   { user: User },
//   void,
//   { rejectValue: string }
// >("auth/checkAuth", async (_, { rejectWithValue }) => {
//   try {
//     const response = await axios.get(`${API_URL}/me`, {
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (error: any) {
//     return rejectWithValue("সেশন শেষ হয়ে গেছে।");
//   }
// });

// // ৩. লগআউট থাঙ্ক
// export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
//   "auth/logout",
//   async (_, { rejectWithValue }) => {
//     try {
//       await axios.get(`${API_URL}/logout`, {
//         withCredentials: true,
//       });
//     } catch (error: any) {
//       return rejectWithValue("লগআউট করতে সমস্যা হয়েছে।");
//     }
//   },
// );

// const initialState: AuthState = {
//   user: null,
//   isAuthenticated: false,
//   loading: true, // শুরুতে true যাতে checkAuth চলাকালীন ফ্লিকারিং না হয়
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<User>) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//       state.loading = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Login
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = true;
//         state.user = action.payload.user;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })
//       // Check Auth
//       .addCase(checkAuth.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(checkAuth.fulfilled, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = true;
//         state.user = action.payload.user;
//       })
//       .addCase(checkAuth.rejected, (state) => {
//         state.loading = false;
//         state.isAuthenticated = false;
//         state.user = null;
//       })
//       // Logout
//       .addCase(logoutUser.fulfilled, (state) => {
//         state.user = null;
//         state.isAuthenticated = false;
//         state.loading = false;
//       });
//   },
// });

// export const { setUser } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { User, AuthState, LoginCredentials } from "../../types/user";

const API_URL = "http://localhost:5000/api/v1/auth";

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
    return rejectWithValue(
      error.response?.data?.message || "লগইন করতে সমস্যা হয়েছে!",
    );
  }
});

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

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get(`${API_URL}/logout`, { withCredentials: true });
    } catch (error: any) {
      return rejectWithValue("লগআউট করতে সমস্যা হয়েছে।");
    }
  },
);

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
    // 🔥 এই রিডিউসারটি রিলোড ছাড়া UI আপডেট নিশ্চিত করবে
    updateSavedProperties: (state, action: PayloadAction<string[]>) => {
      if (state.user) {
        state.user.savedProperties = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
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
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
      });
  },
});

export const { setUser, updateSavedProperties } = authSlice.actions;
export default authSlice.reducer;
