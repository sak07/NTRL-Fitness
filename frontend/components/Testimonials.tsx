"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const stories = [
    {
        name: "Mike R.",
        quote: "I've never felt better and stronger. Natural training changed how I view my potential.",
        img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1780&auto=format&fit=crop"
    },
    {
        name: "Sarah L.",
        quote: "Natural fitness changed my life! The organic approach is sustainable and empowering.",
        img: "https://images.unsplash.com/photo-1583454110551-21f2fa202111?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "David K.",
        quote: "The emphasis on longevity and science-backed organic methods is what sets NTRL apart.",
        img: "https://images.unsplash.com/photo-1548690312-e3b507d17a47?q=80&w=1887&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    const [page, setPage] = useState(0);

    const next = () => setPage((prev) => (prev + 1) % stories.length);
    const prev = () => setPage((prev) => (prev - 1 + stories.length) % stories.length);

    return (
        <section className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
            <div className="mb-16 flex justify-between items-end">
                <div>
                    <h2 className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Success Stories</h2>
                    <div className="w-20 h-1 bg-primary"></div>
                </div>
                <div className="flex gap-4">
                    <button onClick={prev} className="w-12 h-12 rounded-full border border-accent flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        ‹
                    </button>
                    <button onClick={next} className="w-12 h-12 rounded-full border border-accent flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        ›
                    </button>
                </div>
            </div>

            <div className="relative h-[500px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "anticipate" }}
                        className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    >
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={stories[page].img}
                                alt={stories[page].name}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>

                        <div className="space-y-8">
                            <div className="text-6xl font-serif italic text-primary/20">"</div>
                            <p className="text-3xl md:text-4xl font-serif font-medium leading-tight text-foreground">
                                {stories[page].quote}
                            </p>
                            <div className="pt-8 border-t border-accent flex items-center gap-4">
                                <div className="font-bold uppercase tracking-widest text-sm">
                                    {stories[page].name}
                                </div>
                                <div className="w-12 h-[1px] bg-primary/30"></div>
                                <div className="text-xs text-zinc-400 font-bold uppercase tracking-widest">
                                    Verified Member
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-8">
                {stories.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i)}
                        className={`w-2 h-2 rounded-full transition-all ${page === i ? "bg-primary w-8" : "bg-accent"}`}
                    />
                ))}
            </div>
        </section>
    );
}
