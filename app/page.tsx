import { AboutSection } from "./components/aboutSection";
import { ContactSection } from "./components/contactSection";
import { ExperienceSection } from "./components/experienceSection";
import { Header } from "./components/herader";
import { HeroSection } from "./components/heroSection";
import { InternalCasesSection } from "./components/internalCasesSection";
import { SkillsSection } from "./components/skillsSection";


export default function Home() {
  return (
    <main className="min-h-screen  bg-slate-950/50 text-slate-900">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <InternalCasesSection/>
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
