import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
import "../index.css";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*theme toggle*/}
      

      {/* bg effects*/}
      <StarBackground />

      {/* navbar*/}
      <Navbar />
      {/* main content hero*/}
      <main>
        <HeroSection />
        <AboutSection />
         <SkillsSection />
         <ProjectsSection/>
         <ContactSection/>
        
      </main>

      {/* footer*/}
      <Footer/>
    </div>
  );
};
