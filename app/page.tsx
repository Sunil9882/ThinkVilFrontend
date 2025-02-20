
import HomeSection from "./components/HomeSection";
import VisionSection from "@/app/components/VisionSection";
import AboutSection from "@/app/components/AboutSection";
import ExploreSection from "@/app/components/ExploreSection";
import ProvideSection from "./components/ProvideSection";

export default function Home() {
  return (    
    <div className="space-y-16 p-4 md:p-8 lg:p-14">
    <div className="space-y-16 p-4 md:p-8 lg:p-14">
      <HomeSection />
      {/* <ThinkVisLearn /> */}
      <ExploreSection />
      <ProvideSection />
      <VisionSection />
      <AboutSection />
    </div>
    </div>
  );
}
