"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const stories = [
    {
        name: "Sarah M.",
        quote: "I lost 30 lbs with NTRL and feel better than ever!",
        img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1887&auto=format&fit=crop"
    },
    {
        name: "Jason L.",
        quote: "Built muscle naturally and transformed my body.",
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        showLogos: true
    }
];

export default function Testimonials() {
    return (
        <section id="stories" className="py-24 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-20">
                    <div className="h-[1px] flex-grow bg-zinc-200"></div>
                    <h2 className="text-3xl font-sans font-bold text-zinc-800 text-center">Success Stories</h2>
                    <div className="h-[1px] flex-grow bg-zinc-200"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stories.map((story, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-zinc-50 rounded-3xl overflow-hidden shadow-sm border border-zinc-100 flex flex-col sm:flex-row h-full"
                        >
                            <div className="w-full sm:w-1/2 h-[300px] sm:h-auto">
                                <img
                                    src={story.img}
                                    alt={story.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 sm:w-1/2 flex flex-col justify-center space-y-4">
                                <p className="text-xl font-medium text-zinc-800 leading-tight">
                                    "{story.quote}"
                                </p>
                                <p className="text-zinc-500 font-bold">— {story.name}</p>

                                {story.showLogos && (
                                    <div className="pt-6 flex flex-wrap gap-4 items-center border-t border-zinc-200 mt-4">
                                        <div className="flex items-center gap-1">
                                            <div className="w-5 h-5 bg-[#458237] rounded-full scale-75"></div>
                                            <span className="text-[10px] font-bold text-zinc-400">FitLife</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="w-5 h-5 bg-[#76B15B] rounded-full scale-75"></div>
                                            <span className="text-[10px] font-bold text-zinc-400">WellnessHub</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="w-5 h-5 bg-[#333] rounded-sm scale-75"></div>
                                            <span className="text-[10px] font-bold text-zinc-400">GreenLiving</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
