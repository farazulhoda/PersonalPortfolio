import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Network Traffic Analysis",
      description: "Python-based network traffic analyzer for capturing and analyzing network traffic, focusing on DNS traffic monitoring and network forensics.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Python", "Network Forensics", "Packet Analysis"],
      category: "Security",
      year: "2024",
      github: "https://github.com/farazulhoda/network-traffic-analysis",
      demo: "https://github.com/farazulhoda/network-traffic-analysis",
    },
    {
      id: 2,
      title: "Linux Server Administration with Bash",
      description: "Comprehensive Linux server setup project involving Apache, MySQL, PHP configuration, user account management, and security settings automation.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Bash", "Linux", "Apache", "MySQL"],
      category: "Infrastructure",
      year: "2024",
      github: "https://github.com/farazulhoda/Linux-Server-Administration-Project-Using-Bash",
      demo: "https://github.com/farazulhoda/Linux-Server-Administration-Project-Using-Bash",
    },
    {
      id: 3,
      title: "Endcrypt - AES File Encryption",
      description: "Java application implementing AES-256 encryption for secure file encryption and decryption, designed as a capstone cybersecurity project.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Java", "AES Encryption", "Cryptography"],
      category: "Security",
      year: "2024",
      github: "https://github.com/farazulhoda/Endcrypt-Capstone-Project",
      demo: "https://github.com/farazulhoda/Endcrypt-Capstone-Project",
    },
    {
      id: 4,
      title: "Windows Security Essentials",
      description: "Comprehensive guide and configuration for Windows Defender and Firewall, focusing on virus protection and network security management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Windows Defender", "Firewall", "Security"],
      category: "Security",
      year: "2024",
      github: "https://github.com/farazulhoda/Microsoft_Windows_Defender_and_Firewall",
      demo: "https://github.com/farazulhoda/Microsoft_Windows_Defender_and_Firewall",
    },
    {
      id: 5,
      title: "CeaseMe - iOS Encryption App",
      description: "iOS application implementing Caesar Cipher encryption using UIKit, featuring an intuitive GUI for text encryption and decryption.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Swift", "iOS", "UIKit", "Encryption"],
      category: "Mobile",
      year: "2024",
      github: "https://github.com/farazulhoda/CeaseMe",
      demo: "https://github.com/farazulhoda/CeaseMe",
    },
    {
      id: 6,
      title: "Bash Automation Scripts",
      description: "Collection of bash scripts for system administration automation, including vim setup with pre-configured packages and various utility scripts.",
      image: "https://images.unsplash.com/photo-1629654297299-3965bc62cd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Bash", "Shell Scripts", "Automation"],
      category: "Infrastructure",
      year: "2024",
      github: "https://github.com/farazulhoda/bash-scripts",
      demo: "https://github.com/farazulhoda/bash-scripts",
    },
  ];

  const filters = ["All", "Security", "Infrastructure", "Mobile"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-primary dark:text-white mb-4">
            Featured Projects
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            A selection of my recent cybersecurity work showcasing technical expertise and problem-solving skills
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-accent text-white hover:bg-blue-600"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                }`}
              >
                {filter}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="project-card bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      className="text-accent hover:text-blue-600 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="text-accent hover:text-blue-600 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{project.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="bg-slate-200 text-slate-700 hover:bg-slate-300 px-8 py-3 font-medium transition-colors duration-300"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
