import { motion } from "framer-motion";
import { Palette, Code, Wrench } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Design",
      description: "Visual design and user experience",
      icon: Palette,
      color: "blue",
      skills: [
        { name: "UI/UX Design", level: 5 },
        { name: "Adobe Creative Suite", level: 4 },
        { name: "Figma", level: 5 },
      ],
    },
    {
      title: "Development",
      description: "Frontend and backend technologies",
      icon: Code,
      color: "emerald",
      skills: [
        { name: "React/Next.js", level: 5 },
        { name: "TypeScript", level: 4 },
        { name: "Node.js", level: 4 },
      ],
    },
    {
      title: "Tools",
      description: "Workflow and productivity tools",
      icon: Wrench,
      color: "purple",
      skills: [
        { name: "Git/GitHub", level: 5 },
        { name: "Docker", level: 3 },
        { name: "AWS", level: 4 },
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
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-primary mb-4">
            Skills & Expertise
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
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
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
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
                <h3 className="text-xl font-semibold text-primary mb-2">{category.title}</h3>
                <p className="text-slate-600">{category.description}</p>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-slate-700">{skill.name}</span>
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
