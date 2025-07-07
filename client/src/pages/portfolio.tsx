import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Alex Johnson - Creative Designer & Developer";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Creative designer and developer specializing in modern web design and user-centered development. View my portfolio and get in touch.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Creative designer and developer specializing in modern web design and user-centered development. View my portfolio and get in touch.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
