import AboutSection from "../../module/home/components/about/AboutSection";
import Banner from "../../module/home/components/banner/Banner";
import BespokeSection from "../../module/home/components/bespoke/BespokeSection";
import FeatureSection from "../../module/home/components/feature/FeatureSection";
import LocationSection from "../../module/home/components/location/LocationSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <FeatureSection />
      <LocationSection />
      <BespokeSection />
    </div>
  );
}
