"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Client, VideoProject } from "@/types/videos";
import ProjectCard from "@/components/project-card";
import GlassmorphismCard from "@/components/glassmorphism-card";

interface ClientSectionProps {
  client: Client;
  projects: VideoProject[];
  index: number;
  onPlay: (project: VideoProject) => void;
}

export default function ClientSection({
  client,
  projects,
  index,
  onPlay,
}: ClientSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Separate projects by type
  const isReel = (p: VideoProject) =>
    p.category.includes("Reels") ||
    p.category.includes("Instagram Reels") ||
    p.video_link.includes("instagram.com");

  const portraitProjects = projects.filter(isReel);
  const landscapeProjects = projects.filter((p) => !isReel(p));

  // Determine if there's a case study available (check for challenge/outcome)
  const caseStudyProject = projects.find(
    (p) => p.challenge && p.outcome && p.approach
  );

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="py-16 border-b border-white/5 last:border-0 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Client Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-2 shadow-lg backdrop-blur-sm">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                fill
                className="object-contain p-2"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                {client.name}
              </h2>
              <div className="flex flex-wrap gap-2 text-gray-400 text-sm md:text-base font-light items-center">
                <span>{projects.length} Project{projects.length !== 1 ? "s" : ""} Delivered</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span>
                  {landscapeProjects.length > 0 && portraitProjects.length > 0
                    ? "Full-Service Production"
                    : landscapeProjects.length > 0
                    ? "Video Production"
                    : "Social Media Strategy"}
                </span>
              </div>
            </div>
          </div>

          {caseStudyProject && (
            <Link href={`/project/${caseStudyProject.id}`}>
              <div className="hidden md:flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium group cursor-pointer px-4 py-2 rounded-full bg-amber-900/10 border border-amber-500/20 hover:bg-amber-900/20">
                View Case Study
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          )}
        </div>

        {/* Landscape Projects Row */}
        {landscapeProjects.length > 0 && (
          <div className="relative group mb-8 last:mb-0">
             {portraitProjects.length > 0 && (
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-1">
                  Featured Videos
                </h3>
             )}
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 scrollbar-hide snap-x snap-mandatory">
              {landscapeProjects.map((project) => (
                <div
                  key={project.id}
                  className="snap-center flex-shrink-0 w-[85vw] sm:w-[450px]"
                >
                  <ProjectCard project={project} onPlay={onPlay} />
                </div>
              ))}
            </div>
            {/* Fade Indicator */}
            <div className="absolute top-0 right-0 bottom-6 w-16 bg-gradient-to-l from-[#020817] to-transparent pointer-events-none md:hidden" />
          </div>
        )}

        {/* Portrait Projects Row */}
        {portraitProjects.length > 0 && (
          <div className="relative group">
             {landscapeProjects.length > 0 && (
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-1">
                  Short-Form Content
                </h3>
             )}
            <div className="flex overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 scrollbar-hide snap-x snap-mandatory">
              {portraitProjects.map((project) => (
                <div
                  key={project.id}
                  className="snap-center flex-shrink-0 w-[260px] sm:w-[240px]"
                >
                  <ProjectCard project={project} onPlay={onPlay} />
                </div>
              ))}
            </div>
             {/* Fade Indicator */}
             <div className="absolute top-0 right-0 bottom-4 w-16 bg-gradient-to-l from-[#020817] to-transparent pointer-events-none md:hidden" />
          </div>
        )}
      </div>
    </motion.section>
  );
}
