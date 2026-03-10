"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { VideoProject } from "@/types/videos";
import { getVideoEmbedUrl, getVideoThumbnailUrl, isGoogleDriveLink, isInstagramLink } from "@/lib/helper";

interface ProjectCardProps {
    project: VideoProject;
    onPlay: (project: VideoProject) => void;
}

export default function ProjectCard({ project, onPlay }: ProjectCardProps) {
    const [imageError, setImageError] = useState(false);

    const handlePlayClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onPlay(project);
    };

    const isReel = project.category.includes("Reels") || project.category.includes("Instagram Reels") || isInstagramLink(project.video_link);

    return (
        <div className="h-full">
            <GlassmorphismCard className="h-full group hover:shadow-2xl hover:shadow-amber-900/10 transition-shadow duration-500 flex flex-col p-3">
                <div className="flex flex-col h-full">
                    {/* Media Area */}
                    <div className={`relative overflow-hidden rounded-xl mb-3 shadow-lg bg-black isolate ${isReel ? "aspect-[9/16]" : "aspect-video"}`}>
                            <div
                                className="relative w-full h-full cursor-pointer group/thumb"
                                onClick={handlePlayClick}
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="w-full h-full bg-gray-900 flex items-center justify-center"
                                >
                                    {!imageError ? (
                                        <Image
                                            src={getVideoThumbnailUrl(project.cover_image, project.video_link)}
                                            alt={project.video_title}
                                            fill
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            unoptimized={getVideoThumbnailUrl(project.cover_image, project.video_link).includes("instagram.com")}
                                            onError={() => setImageError(true)}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 group-hover:from-zinc-800 group-hover:via-zinc-700 group-hover:to-zinc-800 transition-all duration-500">
                                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-3 border border-white/10">
                                                <Play className="ml-0.5 text-amber-400/60" size={24} />
                                            </div>
                                            <span className="text-white/15 font-semibold text-xs uppercase tracking-[0.3em]">
                                                {project.category.includes("Reels") 
                                                  || project.category.includes("Instagram Reels")
                                                  || isInstagramLink(project.video_link) 
                                                  ? "Reel" : "Video"}
                                            </span>
                                        </div>
                                    )}
                                </motion.div>

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-black/40 transition-colors duration-300 flex items-center justify-center backdrop-blur-[0px] group-hover/thumb:backdrop-blur-[2px]">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white transform scale-90 group-hover/thumb:scale-110 transition-all duration-300 shadow-xl shadow-black/20">
                                        <Play className="ml-1 fill-white" size={28} />
                                    </div>
                                </div>

                                {/* Duration Badge */}
                                {project.duration && (
                                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                                        {project.duration}
                                    </div>
                                )}
                            </div>
                    </div>

                    {/* Content Area - Minimalist Logo & Brand Name ONLY */}
                    <div className="flex items-center gap-3 px-1 pb-1">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-white/5 p-1 shrink-0">
                            <Image
                                src={project.client_image || "/placeholder.svg"}
                                alt={project.client_name}
                                width={32}
                                height={32}
                                className="w-full h-full object-contain rounded-full"
                            />
                        </div>
                        <span className="text-sm font-semibold text-white/90 line-clamp-1 truncate">{project.client_name}</span>
                    </div>
                </div>
            </GlassmorphismCard>
        </div>
    );
}
