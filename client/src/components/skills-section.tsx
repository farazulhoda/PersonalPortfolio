import { motion } from "framer-motion";
import { Palette, Code, Wrench } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Security",
      description: "Cybersecurity and threat management",
      icon: Code,
      color: "blue",
      skills: [
        { name: "Vulnerability Management", level: 5 },
        { name: "Penetration Testing", level: 4 },
        { name: "Threat Intelligence", level: 5 },
        { name: "Network Security", level: 4 },
      ],
    },
    {
      title: "Cloud Platforms",
      description: "Cloud security and infrastructure",
      icon: Palette,
      color: "emerald",
      skills: [
        { name: "AWS", level: 4 },
        { name: "Azure", level: 4 },
        { name: "GCP", level: 3 },
        { name: "Microsoft Intune", level: 5 },
      ],
    },
    {
      title: "Security Tools",
      description: "Security monitoring and analysis",
      icon: Wrench,
      color: "purple",
      skills: [
        { name: "Splunk", level: 4 },
        { name: "CrowdStrike", level: 4 },
        { name: "Microsoft Sentinel", level: 4 },
        { name: "Wireshark", level: 4 },
      ],
    },
  ];

  const SkillIndicator = ({ level, color }: { level: number; color: string }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`skill-indicator ${
            i < level
              ? color === "blue"
                ? "bg-accent"
                : color === "emerald"
                ? "bg-emerald-500"
                : "bg-purple-500"
              : "bg-slate-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-primary dark:text-white mb-4">
            Skills & Expertise
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit for cybersecurity and network protection
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon
                    size={32}
                    className={
                      category.color === "blue"
                        ? "text-accent"
                        : category.color === "emerald"
                        ? "text-emerald-500"
                        : "text-purple-500"
                    }
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">{category.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{category.description}</p>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <SkillIndicator level={skill.level} color={category.color} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
