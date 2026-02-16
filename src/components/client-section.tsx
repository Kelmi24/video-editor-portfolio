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

  // Determine primary project type
  const isMainlyReels = projects.every(p => 
    p.category.includes("Reels") || 
    p.category.includes("Instagram Reels") || 
    p.video_link.includes("instagram.com")
  );

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="py-20 border-b border-white/5 last:border-0 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Client Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
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
                    <p className="text-gray-400 text-sm md:text-base font-light">
                        {projects.length} Project{projects.length !== 1 ? "s" : ""} Delivered · {isMainlyReels ? "Social Media" : "Video Production"}
                    </p>
                </div>
            </div>
            
            <div className="hidden md:block">
                 <div className="flex -space-x-2">
                    {projects.slice(0, 4).map((p, i) => (
                        <div key={p.id} className="w-10 h-10 rounded-full border-2 border-[#020817] overflow-hidden relative bg-gray-800">
                             <Image src={p.cover_image} alt="" fill className="object-cover" />
                        </div>
                    ))}
                    {projects.length > 4 && (
                        <div className="w-10 h-10 rounded-full border-2 border-[#020817] bg-gray-700 flex items-center justify-center text-xs font-bold text-white">
                            +{projects.length - 4}
                        </div>
                    )}
                 </div>
            </div>
        </div>

        {/* Projects Scroll Container */}
        <div className="relative group">
            <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 scrollbar-hide snap-x snap-mandatory">
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className={`snap-center flex-shrink-0 ${isMainlyReels ? "w-[280px]" : "w-[350px] md:w-[450px]"}`}
                    >
                        <ProjectCard project={project} onPlay={onPlay} />
                    </div>
                ))}
            </div>
            
            {/* Fade Indicators */}
            <div className="absolute top-0 right-0 bottom-8 w-20 bg-gradient-to-l from-[#020817] to-transparent pointer-events-none md:hidden" />
        </div>
      </div>
    </motion.section>
  );
}
