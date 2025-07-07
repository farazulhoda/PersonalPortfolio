import { motion } from "framer-motion";
import { Award, Star, GitBranch, Users } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: "Arctic Code Vault Contributor",
      description: "Code archived in GitHub's Arctic Code Vault for preservation",
      value: "2020",
      color: "blue",
    },
    {
      icon: GitBranch,
      title: "Pull Shark",
      description: "Recognized for exceptional pull request contributions",
      value: "GitHub",
      color: "emerald",
    },
    {
      icon: Star,
      title: "Quickdraw",
      description: "Fast and efficient issue resolution and project delivery",
      value: "Achievement",
      color: "purple",
    },
    {
      icon: Users,
      title: "GitHub Developer Program",
      description: "Member of GitHub's exclusive developer program",
      value: "Pro",
      color: "orange",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-primary dark:text-white mb-4">
            GitHub Achievements
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Recognition for contributions to the open-source community and software development excellence
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-${achievement.color}-100 dark:bg-${achievement.color}-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon
                  size={32}
                  className={
                    achievement.color === "blue"
                      ? "text-blue-600"
                      : achievement.color === "emerald"
                      ? "text-emerald-600"
                      : achievement.color === "purple"
                      ? "text-purple-600"
                      : "text-orange-600"
                  }
                />
              </div>
              <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                {achievement.description}
              </p>
              <div className="text-accent font-medium text-sm">
                {achievement.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">91</div>
              <div className="text-slate-600 dark:text-slate-300">GitHub Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">274</div>
              <div className="text-slate-600 dark:text-slate-300">Following</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">20+</div>
              <div className="text-slate-600 dark:text-slate-300">Public Repositories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}