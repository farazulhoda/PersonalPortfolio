import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeInLeft} className="space-y-4">
              <h2 className="text-4xl font-bold text-primary dark:text-white">About Me</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm MR. BiNARY - a passionate cybersecurity professional and Arctic Code Vault Contributor with 91 GitHub followers. 
                Master's in Computer Science from Illinois Institute of Technology with specialization in Information Security. 
                My expertise spans vulnerability management, DevSecOps, and system administration with a strong preference on tabs over spaces!
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="font-semibold text-primary dark:text-white mb-2">Security Philosophy</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  I believe in proactive defense - identifying and mitigating threats before they impact operations. 
                  Security should be seamless and enable business growth, not hinder it.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="font-semibold text-primary dark:text-white mb-2">Technical Approach</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  I combine cutting-edge security tools with proven methodologies to create robust, 
                  scalable defense systems that protect critical assets and data.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-300">
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>United States</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>imfaraz730@outlook.com</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern office setup"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 glass-light dark:glass-dark p-6 rounded-lg shadow-lg"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">91</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">GitHub Followers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
