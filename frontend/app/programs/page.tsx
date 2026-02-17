"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect } from "react";

const products = [
    {
        id: "strength-training",
        title: "Strength Training",
        subtitle: "The Foundation of Natural Power",
        desc: "Build functional, dense muscle through organic movement patterns. No synthetic shortcuts, just raw biological adaptation.",
        features: ["Compound Movements", "Progressive Overload", "Form Mastery", "Recovery Science"],
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        accent: "bg-primary/10"
    },
    {
        id: "fat-loss",
        title: "Metabolic Fat Loss",
        subtitle: "Burn Fat, Not Your Health",
        desc: "Optimize your metabolism through natural hormonal balance. We focus on sustainable shedding while maintaining lean muscle mass.",
        features: ["Metabolic Conditioning", "Hormonal Optimization", "Organic Nutrition", "Active Recovery"],
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        accent: "bg-blue-500/5"
    },
    {
        id: "healthy-living",
        title: "Healthy Living",
        subtitle: "Longevity Through Nature",
        desc: "Complete biological optimization. From circadian rhythm alignment to deep cellular recovery through organic nutrition and sleep science.",
        features: ["Sleep Optimization", "Stress Management", "Organic Supplementation", "Daily Rituals"],
        img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
        accent: "bg-amber-500/5"
    }
];

export default function ProgramsPage() {
    useEffect(() => {
        // Handle deep-linking scrolling
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Header */}
            <section className="pt-40 pb-20 px-8 text-center bg-accent/30">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <h2 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Explore Our Science</h2>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">Expert Programs.</h1>
                    <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                        Every NTRL program is a masterpiece of biological engineering. We don't just train; we evolve.
                    </p>
                </motion.div>
            </section>

            {/* Detailed Sections */}
            <div className="space-y-32 py-32">
                {products.map((p, i) => (
                    <section
                        key={p.id}
                        id={p.id}
                        className={`scroll-mt-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`${i % 2 === 1 ? 'lg:order-2' : ''} space-y-10`}
                        >
                            <div className="space-y-4">
                                <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary ${p.accent}`}>
                                    {p.title}
                                </span>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-tight">
                                    {p.subtitle}
                                </h2>
                            </div>

                            <p className="text-lg text-zinc-500 font-medium leading-relaxed border-l-4 border-primary/20 pl-8 italic">
                                "{p.desc}"
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {p.features.map((f, fi) => (
                                    <div key={fi} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-sm font-bold uppercase tracking-widest text-foreground/80">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-10">
                                <Link href="/#pricing" className="bg-primary text-white px-12 py-5 rounded-md font-bold text-lg uppercase tracking-widest hover:bg-primary/90 transition-all inline-block shadow-2xl active:scale-95">
                                    Apply for Program
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className={`${i % 2 === 1 ? 'lg:order-1' : ''} relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl`}
                        >
                            <img
                                src={p.img}
                                alt={p.title}
                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </motion.div>
                    </section>
                ))}
            </div>

            {/* Footer Placeholder for visual continuity */}
            <footer className="py-20 bg-accent/10 border-t border-accent text-center">
                <Link href="/" className="text-primary font-bold uppercase tracking-widest text-sm hover:underline">
                    Back to Home
                </Link>
            </footer>
        </main>
    );
}
