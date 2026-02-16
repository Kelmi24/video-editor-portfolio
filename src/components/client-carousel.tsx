"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clientsData } from "@/db/clients";

export default function ClientCarousel() {
    // Double the clients array for seamless infinite scroll
    const doubledClients = [...clientsData, ...clientsData];

    return (
        <section className="py-16 px-4 relative overflow-hidden">
            {/* Top fade line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <span className="text-xs font-semibold text-amber-500/60 tracking-[0.25em] uppercase">
                        Trusted By
                    </span>
                </motion.div>

                {/* Marquee Container */}
                <div
                    className="relative w-full overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    }}
                >
                    <div className="flex animate-marquee w-max gap-12">
                        {doubledClients.map((client, index) => (
                            <div
                                key={`${client.id}-${index}`}
                                className="flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer"
                            >
                                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white/5 p-3 flex items-center justify-center border border-white/5 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:border-amber-500/20 transition-all duration-500">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                <p className="mt-2 text-[10px] font-medium text-gray-600 group-hover:text-amber-400/70 transition-colors whitespace-nowrap">
                                    {client.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom fade line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
        </section>
    );
}
