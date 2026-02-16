"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { allVideoProjects } from "@/db/projects";

// Get projects that have client feedback
const testimonialsData = allVideoProjects
  .filter((p) => p.client_feedback && p.client_feedback.trim().length > 0)
  .map((p) => ({
    name: p.client_name,
    image: p.client_image,
    feedback: p.client_feedback,
    project: p.video_title,
  }));

export default function Testimonials() {
  if (testimonialsData.length === 0) return null;

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            <span className="bg-gradient-to-r from-white via-amber-100 to-gray-400 bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Real feedback from clients I&apos;ve had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassmorphismCard className="p-6 h-full flex flex-col hover:border-amber-500/30 transition-colors duration-300">
                <div className="flex-1">
                  <Quote className="text-amber-500/40 mb-4" size={28} />
                  <p className="text-gray-300 italic text-sm leading-relaxed mb-6">
                    &ldquo;{testimonial.feedback}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.project}</p>
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
