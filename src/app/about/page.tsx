"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";
import CTASection from "@/components/CTASection";
import {
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Clock,
  Award,
  Video,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { clientsData } from "@/db/clients";
import { journey } from "@/db/journey";
import { videoEditingSkills } from "@/db/skills";
import GlassmorphismCard from "@/components/glassmorphism-card";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-12 md:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* HERO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,168,67,0.1)]">
            <span className="text-xs md:text-sm font-semibold text-amber-300 tracking-widest uppercase">
              The Man Behind the Magic
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Visual Storyteller.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
              Motion Designer.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            I don't just edit footage — I craft narratives that drive engagement, emotion, and results.
          </p>
        </motion.div>

        {/* PROFILE & STATS SPLIT */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
               <Image
                src="/profile.png"
                alt="Gede Rickelme"
                fill
                className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 right-8 text-left pointer-events-none">
                <h2 className="text-3xl font-bold text-white mb-1">GEDE RICKELME</h2>
                <p className="text-amber-400 font-medium tracking-wide uppercase text-sm">Indonesia based</p>
              </div>
            </div>
            {/* Background blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

          {/* Right: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Obsessed with the <span className="text-amber-400">Perfect Cut</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              With over 4 years of experience in the creative industry, I've honed the art of turning raw footage into cinematic masterpieces. My approach combines technical precision with creative flair, ensuring every frame earns its place.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Based in Tangerang, Indonesia, I work with clients globally to elevate their brand presence through high-impact video content.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold text-amber-400 mb-1">4+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years Exp.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold text-amber-400 mb-1">125k+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Top Views</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold text-amber-400 mb-1">8+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Happy Clients</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold text-amber-400 mb-1">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Dedication</div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-4">
               <a href="https://linkedin.com/in/rickelme" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white text-gray-400 transition-all duration-300 border border-white/10 hover:border-transparent"><Linkedin size={20} /></a>
               <a href="https://instagram.com/gede.rickelme" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-pink-600 hover:text-white text-gray-400 transition-all duration-300 border border-white/10 hover:border-transparent"><Instagram size={20} /></a>
               <a href="https://youtube.com/@rickelme" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-red-600 hover:text-white text-gray-400 transition-all duration-300 border border-white/10 hover:border-transparent"><Youtube size={20} /></a>
            </div>
          </motion.div>
        </div>

        {/* TIMELINE SECTION */}
        <section className="mb-32 max-w-4xl mx-auto">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
           >
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Journey</h2>
             <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
           </motion.div>

           <div className="space-y-12">
             {journey.map((item, index) => {
               const Icon = item.icon;
               return (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 md:pl-0"
                 >
                   {/* Timeline Line (Desktop only) */}
                   <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
                   
                   <div className={`md:flex items-center justify-between gap-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      {/* Date (Desktop) */}
                      <div className={`hidden md:block w-1/2 text-${index % 2 === 0 ? 'left' : 'right'}`}>
                        <span className="text-amber-500 font-mono tracking-widest text-lg">{item.year}</span>
                      </div>

                      {/* Icon Center */}
                      <div className="absolute left-0 md:left-[50%] top-0 md:-translate-x-1/2 w-10 h-10 rounded-full bg-black border border-amber-500/50 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(212,168,67,0.3)]">
                        <Icon size={18} className="text-amber-400" />
                      </div>

                      {/* Content Card */}
                      <div className="w-full md:w-1/2">
                          <GlassmorphismCard className="p-6 md:p-8 hover:border-amber-500/30 transition-colors duration-300">
                             <div className="md:hidden text-amber-500 font-mono tracking-widest text-sm mb-2">{item.year}</div>
                             <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                             <p className="text-gray-400 text-sm mb-4 font-medium">{item.company}</p>
                             <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                          </GlassmorphismCard>
                      </div>
                   </div>
                 </motion.div>
               );
             })}
           </div>
        </section>

        {/* TOOLS I USE */}
        <section className="mb-32">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
           >
             <h2 className="text-3xl font-bold text-white mb-4">Tools of the Trade</h2>
             <p className="text-gray-400">The arsenal behind every frame.</p>
           </motion.div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {videoEditingSkills.map((tool, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative"
                >
                  <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-4 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300 cursor-default">
                    <div className="w-12 h-12 relative mb-4 flex items-center justify-center transition-all duration-300">
                       {tool.image_link ? (
                         <div className="relative w-full h-full grayscale-0 transition-all duration-300">
                           <Image src={tool.image_link} alt={tool.name} fill className="object-contain" />
                         </div>
                       ) : (
                         <tool.icon 
                           size={32} 
                           className={`${tool.color?.replace('text-', 'text-') || 'text-white'} transition-colors duration-300`} 
                         />
                       )}
                    </div>
                    <span className="text-gray-400 group-hover:text-white font-medium text-sm text-center">{tool.name}</span>
                  </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* CLIENTS MARQUEE (Reuse existing structure but clean up) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Trusted By</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div
            className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-10"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            <Marquee className="[--duration:20s]">
              {clientsData.map((client) => (
                <div key={client.id} className="mx-8 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white/5 p-4 flex items-center justify-center shadow-sm hover:shadow-md hover:bg-white/10 transition-all border border-transparent hover:border-amber-500/20">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>

        <CTASection
          title="Ready to Start Your Journey?"
          description="Let's collaborate on your next big project."
          buttonText="Get a Quote"
          href="/contact"
        />
      </div>
    </div>
  );
}
