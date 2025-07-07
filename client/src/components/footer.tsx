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
    <footer className="bg-primary dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div>
            <div className="text-2xl font-bold mb-4">Farazul Hoda</div>
            <p className="text-slate-300 dark:text-slate-400 mb-4">
              Cybersecurity professional protecting digital assets and staying ahead of cyber threats.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/farazul-hoda" },
                { icon: Github, href: "https://github.com/farazulhoda" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors duration-300"
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
                { name: "Achievements", id: "achievements" },
                { name: "Skills", id: "skills" },
                { name: "Projects", id: "projects" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 dark:text-slate-400 hover:text-white transition-colors duration-300"
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
              {["Cybersecurity", "Vulnerability Management", "Penetration Testing", "Cloud Security"].map((service) => (
                <li key={service}>
                  <span className="text-slate-300 dark:text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <div className="border-t border-slate-600 dark:border-slate-700 mt-8 pt-8 text-center text-slate-300 dark:text-slate-400">
          <p>&copy; 2025 Farazul Hoda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
