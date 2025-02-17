
import HomeSection from "./components/HomeSection";
import MissionSection from "@/app/components/MissionSection";
import AboutSection from "@/app/components/AboutSection";
import ExploreSection from "@/app/components/ExploreSection";
import ThinkVisLearn from "./components/ThinkVisLearn";
import ProvideSection from "./components/ProvideSection";

export default function Home() {
  return (    
    <div className="space-y-16 p-4 md:p-8 lg:p-14">
      <HomeSection />
      <ThinkVisLearn />
      <ExploreSection />
      <ProvideSection />
      <MissionSection />
      <AboutSection />
    </div>
  );
}
