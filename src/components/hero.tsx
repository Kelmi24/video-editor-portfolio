"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play, Download } from "lucide-react";
import MagneticButton from "./magnetic-button";

import { useLenis } from "lenis/react";

export default function Hero() {
  const lenis = useLenis();

  const scrollToProjects = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (lenis) {
      lenis.scrollTo("#projects", {
        duration: 2,
        offset: -100, // Account for fixed navbar
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out for premium feel
      });
    }
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Ambience - Warm Gold Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-900/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-900/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-900/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 max-w-7xl mx-auto w-full gap-12 lg:gap-16">
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 backdrop-blur-md text-xs font-medium text-amber-300 tracking-widest uppercase shadow-[0_0_20px_rgba(212,168,67,0.1)]">
              Available for Hire
            </div>
          </motion.div>

          {/* Main Title - Split for animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, y: 50, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="block bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent"
            >
              CINEMATIC
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600 pb-4"
            >
              EDITOR
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl font-light leading-relaxed mb-12"
          >
            4+ years crafting compelling content for Instagram, YouTube,
            Facebook & TikTok — with style, precision, and a touch of{" "}
            <span className="text-amber-300 font-medium">cinematic magic</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
          >
            <MagneticButton>
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,168,67,0.4)] cursor-pointer"
              >
                <span className="relative z-10 flex items-center">
                  View Work
                </span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-white/5 border border-amber-500/20 rounded-full backdrop-blur-md transition-all duration-300 hover:bg-amber-500/10 hover:border-amber-500/30"
              >
                Contact Me
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-amber-400 bg-white/5 border border-amber-500/20 rounded-full backdrop-blur-md transition-all duration-300 hover:bg-amber-500/10 hover:border-amber-500/30"
              >
                <Download className="mr-2" size={20} />
                Resume
              </a>
            </MagneticButton>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex items-center justify-center lg:justify-start gap-8 mt-10"
          >
            {[
              { value: "4+", label: "Years" },
              { value: "125K+", label: "Views" },
              { value: "8+", label: "Clients" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Video Showreel Preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex-1 max-w-lg w-full hidden lg:block"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-amber-500/15 shadow-[0_0_60px_rgba(212,168,67,0.08)]">
            <iframe
              src="https://www.youtube.com/embed/LBJ2YllJeRQ?autoplay=1&mute=1&loop=1&playlist=LBJ2YllJeRQ&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="Showreel Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
            {/* Golden border glow effect */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-amber-500/10" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center text-xs text-amber-500/50 mt-3 tracking-widest uppercase"
          >
            Latest Work Preview
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-amber-400 transition-colors duration-300"
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <ArrowDown className="animate-bounce" size={20} />
        </button>
      </motion.div>
    </section>
  );
}
