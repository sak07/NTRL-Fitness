"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const programs = [
    {
        id: "strength-training",
        title: "Strength Training",
        desc: "Build functional strength naturally through compound movements.",
        icon: "🏋️",
        pillar: "Training"
    },
    {
        id: "fat-loss",
        title: "Fat Loss",
        desc: "Burn fat with balanced, effective workouts and metabolic conditioning.",
        icon: "🏔️",
        pillar: "Metabolism"
    },
    {
        id: "healthy-living",
        title: "Healthy Living",
        desc: "Learn sustainable habits for life, from sleep to organic nutrition.",
        icon: "🍃",
        pillar: "Longevity"
    }
];

export default function Services() {
    return (
        <section id="programs" className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h2 className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Programs</h2>
                <div className="w-20 h-1 bg-primary mb-12"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs.map((p, i) => (
                    <Link key={i} href={`/programs#${p.id}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            className="bg-white p-12 rounded-lg border border-accent flex flex-col items-center text-center group cursor-pointer transition-colors hover:border-primary/20 h-full"
                        >
                            <div className="text-5xl mb-8 group-hover:scale-110 transition-transform grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100">
                                {p.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">{p.title}</h3>
                            <p className="text-zinc-500 leading-relaxed mb-8">
                                {p.desc}
                            </p>
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/50 group-hover:text-primary transition-colors mt-auto">
                                Pillar: {p.pillar}
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
