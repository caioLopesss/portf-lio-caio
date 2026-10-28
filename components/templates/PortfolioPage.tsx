import ProfessionalContributions from "../organisms/ProfessionalContributions";
import HeroSequence from "../organisms/HeroSequence";
import PortfolioFooter from "../organisms/PortfolioFooter";
import ProjectsSection from "../organisms/ProjectsSection";
import StorySection from "../organisms/StorySection";
import TechStackSection from "../organisms/TechStackSection";

export default function PortfolioPage() {
  return (
    <main>
      <HeroSequence />
      <StorySection />
      <TechStackSection />
      <ProjectsSection />
      <ProfessionalContributions />
      <PortfolioFooter />
    </main>
  );
}
