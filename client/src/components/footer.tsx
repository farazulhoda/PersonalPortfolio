import { motion } from "framer-motion";
import { Linkedin, Github, Dribbble } from "lucide-react";
import { SiBehance } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div>
            <div className="text-2xl font-bold mb-4">Alex Johnson</div>
            <p className="text-slate-300 mb-4">
              Creative designer and developer crafting digital experiences that matter.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Dribbble, href: "#" },
                { icon: SiBehance, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Projects", id: "projects" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Design", "Frontend Development", "UI/UX Design", "Design Systems"].map((service) => (
                <li key={service}>
                  <span className="text-slate-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <div className="border-t border-slate-600 mt-8 pt-8 text-center text-slate-300">
          <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
