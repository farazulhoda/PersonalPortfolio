import { motion } from "framer-motion";
import { Download, Linkedin, Github, Dribbble } from "lucide-react";
import { SiBehance } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // In a real app, this would trigger a download
    console.log("Download CV clicked");
  };

  return (
    <section id="home" className="pt-20 pb-12 hero-gradient">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInLeft} className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Creative
                <span className="text-accent"> Designer</span>
                <br />& Developer
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                I craft digital experiences that blend creativity with functionality.
                Specializing in modern web design and user-centered development.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToProjects}
                className="bg-accent hover:bg-blue-600 text-white px-8 py-3 font-medium transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadCV}
                className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-3 font-medium transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex space-x-6">
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
                  className="text-slate-400 hover:text-accent transition-colors duration-300"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional workspace"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
