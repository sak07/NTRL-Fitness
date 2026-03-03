"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Custom Meal Plans",
        desc: "Tailored nutrition for you",
        icon: "🥗"
    },
    {
        title: "Workout Routines",
        desc: "Effective training programs",
        icon: "🏋️"
    },
    {
        title: "Progress Tracking",
        desc: "Track your results easily",
        icon: "⏲️"
    },
    {
        title: "Holistic Guidance",
        desc: "Natural health tips & advice",
        icon: "🍃"
    }
];

export default function KeyFeatures() {
    return (
        <section id="features" className="py-24 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-[1px] flex-grow bg-zinc-200"></div>
                    <h2 className="text-3xl font-sans font-bold text-zinc-800">Key Features</h2>
                    <div className="h-[1px] flex-grow bg-zinc-200"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl border border-zinc-100 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-zinc-50 rounded-xl flex items-center justify-center text-3xl mb-4">
                                {f.icon}
                            </div>
                            <h3 className="text-lg font-bold text-zinc-800 mb-2">{f.title}</h3>
                            <p className="text-zinc-500 text-sm">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
