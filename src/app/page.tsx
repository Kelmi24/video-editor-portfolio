"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/glassmorphism-card";
import Hero from "@/components/hero";
import ClientCarousel from "@/components/client-carousel";
import ProjectCard from "@/components/project-card";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/testimonials";
import {
  getLandscapeProjects,
  getVerticalProjects,
} from "@/lib/helper";
import type { VideoProject } from "@/types/videos";

import VideoModal from "@/components/video-modal";

// Extract unique categories from projects
function getUniqueCategories(projects: VideoProject[]): string[] {
  const cats = new Set<string>();
  projects.forEach((p) => p.category.forEach((c) => cats.add(c)));
  return Array.from(cats);
}

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<VideoProject | null>(null);
  const [landscapeFilter, setLandscapeFilter] = useState("All");
  const [verticalFilter, setVerticalFilter] = useState("All");

  const allLandscape = getLandscapeProjects();
  const allVertical = getVerticalProjects();

  const landscapeCategories = useMemo(() => getUniqueCategories(allLandscape), [allLandscape]);
  const verticalCategories = useMemo(() => getUniqueCategories(allVertical), [allVertical]);

  const landscapeProjects = useMemo(
    () => landscapeFilter === "All" ? allLandscape : allLandscape.filter((p) => p.category.includes(landscapeFilter)),
    [landscapeFilter, allLandscape]
  );
  const verticalProjects = useMemo(
    () => verticalFilter === "All" ? allVertical : allVertical.filter((p) => p.category.includes(verticalFilter)),
    [verticalFilter, allVertical]
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Hero />

      {/* Client Carousel */}
      <ClientCarousel />

      {/* Featured Projects Section (Landscape) */}
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 relative"
          >
            {/* Spotlight Effect behind title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/20 blur-[100px] rounded-full pointer-events-none" />

            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight relative z-10">
              <span className="bg-gradient-to-r from-white via-amber-100 to-gray-400 bg-clip-text text-transparent">
                Featured Video Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-2">
              Cinematic storytelling, precise editing, and compelling narratives.
            </p>
            <p className="text-sm text-amber-400/60 font-medium">
              {landscapeProjects.length} project{landscapeProjects.length !== 1 ? "s" : ""}
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["All", ...landscapeCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setLandscapeFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${
                  landscapeFilter === cat
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(212,168,67,0.15)]"
                    : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Landscape Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {landscapeProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} onPlay={setSelectedProject} />
              </motion.div>
            ))}
          </div>

          {landscapeProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Vertical Projects Section (Reels/Shorts) */}
      <section id="shorts" className="py-20 px-4 sm:px-6 relative">
         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
              Short-Form <span className="text-amber-400">Content</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-2">
              High-impact vertical videos designed for social media engagement.
            </p>
            <p className="text-sm text-amber-400/60 font-medium">
              {verticalProjects.length} video{verticalProjects.length !== 1 ? "s" : ""}
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["All", ...verticalCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setVerticalFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${
                  verticalFilter === cat
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(212,168,67,0.15)]"
                    : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Vertical Projects Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {verticalProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mx-auto w-full max-w-[320px]" 
              >
                <ProjectCard project={project} onPlay={setSelectedProject} />
              </motion.div>
            ))}
          </div>

          {verticalProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No videos found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* What I Can Do Section */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What I Can Do <span className="text-amber-400">for You</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              If you're looking for someone who blends creativity with technical
              skill, communicates clearly, and truly cares about results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "YouTube Editing",
                description: "Engaging edits optimized for retention with perfect pacing.",
                icon: "🎬",
              },
              {
                title: "Course Content",
                description: "Clear, educational content with professional polish.",
                icon: "📚",
              },
              {
                title: "Motion Graphics",
                description: "Eye-catching animations that enhance your storytelling.",
                icon: "✨",
              },
              {
                title: "Color Grading",
                description: "Cinematic looks that give your videos a premium feel.",
                icon: "🎨",
              },
              {
                title: "Logo Animation",
                description: "Professional branding elements that stand out.",
                icon: "🏷️",
              },
              {
                title: "Audio Engineering",
                description: "Crystal clear audio mix with noise reduction.",
                icon: "🎵",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                className="h-full"
              >
                <GlassmorphismCard className="p-8 h-full flex flex-col items-center text-center group hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(212,168,67,0.15)] transition-all duration-300">
                  <div className="text-5xl mb-6 bg-white/5 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </GlassmorphismCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <Testimonials />

      {/* Call to Action Section */}
      <CTASection
        title="Ready to create magic?"
        description="Let's bring your vision to life with professional video editing, motion graphics, and cinematic storytelling."
        buttonText="Get in Touch"
        href="/contact"
      />

      {/* Video Modal */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
