
import HomeSection from "./components/HomeSection";
import SubjectLinks from "@/app/components/SubjectLinks";
import QuotesSection from "@/app/components/QuotesSection";
import MissionSection from "@/app/components/MissionSection";
import OfferSection from "@/app/components/OfferSection";
import CommunitySection from "@/app/components/CommunitySection";
import AboutSection from "@/app/components/AboutSection";
import PuzzleSection from "@/app/components/PuzzleSection";
import ExploreSection from "@/app/components/ExploreSection";
import ThinkVisLearn from "./components/ThinkVisLearn";

export default function Home() {
  return (    
    <div className="space-y-16 p-4 md:p-8 lg:p-14">
      <HomeSection />
      <ThinkVisLearn />
      <ExploreSection />
      <SubjectLinks />
      <QuotesSection />
      <PuzzleSection />
      <MissionSection />
      <OfferSection />
      <CommunitySection />
      <AboutSection />
    </div>
  );
}
