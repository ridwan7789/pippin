import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MultiverseSection from "@/components/MultiverseSection";
import EcosystemSection from "@/components/EcosystemSection";
import GenerateSection from "@/components/GenerateSection";
import CommunitySection from "@/components/CommunitySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
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
