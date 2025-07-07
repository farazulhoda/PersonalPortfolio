import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeInLeft} className="space-y-4">
              <h2 className="text-4xl font-bold text-primary">About Me</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a passionate creative professional with over 5 years of experience in digital design and development.
                My journey began with a fascination for how technology can enhance human experiences.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Design Philosophy</h3>
                <p className="text-slate-600 text-sm">
                  I believe great design should be invisible - it should solve problems so elegantly that users don't even think about it.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Technical Approach</h3>
                <p className="text-slate-600 text-sm">
                  I combine modern development practices with user-centered design principles to create scalable, maintainable solutions.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 text-slate-600">
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>alex@example.com</span>
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
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
