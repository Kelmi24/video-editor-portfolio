"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoProject } from "@/types/videos";
import { getVideoEmbedUrl, isInstagramLink, isGoogleDriveLink } from "@/lib/helper";
import Link from "next/link";

interface VideoModalProps {
  project: VideoProject | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  if (!project) return null;

  const embedUrl = getVideoEmbedUrl(project.video_link);
  
  const isVertical =
    project.category.some((c) =>
      ["Reels", "Instagram Reels", "YouTube Shorts"].includes(c)
    ) ||
    isInstagramLink(project.video_link) ||
    project.video_link.includes("shorts/");

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`relative w-full bg-black/50 rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${
              isVertical ? "max-w-sm aspect-[9/16] max-h-[85vh]" : "max-w-5xl aspect-video"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {embedUrl ? (
              <iframe
                src={(isGoogleDriveLink(project.video_link) || isInstagramLink(project.video_link)) 
                  ? embedUrl 
                  : `${embedUrl}?autoplay=1&modestbranding=1&rel=0`}
                title={project.video_title}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            ) : (
                <div className="flex items-center justify-center h-full text-white">
                    Video not available
                </div>
            )}
            
            {/* Footer with Details Link */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end pointer-events-none">
                <div className="pointer-events-auto">
                     <h3 className="text-white font-bold text-lg line-clamp-1">{project.video_title}</h3>
                </div>
                <Link href={`/project/${project.id}`} className="pointer-events-auto">
                    <Button size="sm" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md">
                        <ExternalLink size={14} className="mr-2" />
                        Details
                    </Button>
                </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
