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
      title: "Security Infrastructure Modernization",
      description: "Led the deployment of Microsoft Sentinel and Defender platforms, enhancing organization's security posture and threat detection capabilities.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Microsoft Sentinel", "Microsoft Defender"],
      category: "Security",
      year: "2024",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Endpoint Management System",
      description: "Implemented Microsoft Intune and Autopilot for endpoint detection and response, improving security practices and device management.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Microsoft Intune", "Autopilot"],
      category: "Infrastructure",
      year: "2023",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "SIEM Implementation",
      description: "Deployed and managed Splunk for log management and security event monitoring, developing alerts and dashboards for enhanced threat detection.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Splunk", "EDR"],
      category: "Security",
      year: "2022",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Network Security Analysis",
      description: "Conducted comprehensive network traffic analysis using Wireshark, identifying network anomalies and resolving security incidents.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Wireshark", "Network Analysis"],
      category: "Analysis",
      year: "2022",
      github: "#",
      demo: "#",
    },
  ];

  const filters = ["All", "Security", "Infrastructure", "Analysis"];

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
