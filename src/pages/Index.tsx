import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MultiverseSection from "@/components/MultiverseSection";
import EcosystemSection from "@/components/EcosystemSection";
import GenerateSection from "@/components/GenerateSection";
import CommunitySection from "@/components/CommunitySection";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PippinCharacter from "@/components/PippinCharacter";

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PippinCharacter />
      <HeroSection />
      <AboutSection />
      <MultiverseSection />
      <EcosystemSection />
      <GenerateSection />
      <CommunitySection />
      <FooterSection />
    </div>
  );
};

export default Index;
