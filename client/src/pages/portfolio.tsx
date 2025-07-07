import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import AchievementsSection from "@/components/achievements-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Farazul Hoda - Cybersecurity Professional & Network Administrator";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Cybersecurity professional specializing in vulnerability management, penetration testing, cloud security, and threat intelligence. Certified in CCNA, CompTIA Network+, AWS.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Cybersecurity professional specializing in vulnerability management, penetration testing, cloud security, and threat intelligence. Certified in CCNA, CompTIA Network+, AWS.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
