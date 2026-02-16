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
  allVideoProjects,
  getGroupedProjects,
} from "@/db/projects";
import type { VideoProject } from "@/types/videos";

import VideoModal from "@/components/video-modal";
import ClientSection from "@/components/client-section";

// Extract unique categories from projects
function getUniqueCategories(projects: VideoProject[]): string[] {
  const cats = new Set<string>();
  projects.forEach((p) => p.category.forEach((c) => cats.add(c)));
  return Array.from(cats);
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<VideoProject | null>(null);

  const groupedProjects = getGroupedProjects();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Hero />

      {/* Client Carousel */}
      <ClientCarousel />

      {/* Client Projects Sections */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                Selected <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                A curated collection of projects organized by partner.
            </p>
        </div>

        {groupedProjects.map((group, index) => (
          <ClientSection
            key={group.client.id}
            client={group.client}
            projects={group.projects}
            index={index}
            onPlay={setSelectedProject}
          />
        ))}
      </div>

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
