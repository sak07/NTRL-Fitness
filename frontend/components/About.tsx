"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function About() {
    const sections = useMemo(() => [
        {
            title: "Why NTRL is Different",
            icon: "🌱",
            content: [
                "We build plans based on your unique fitness level, dietary preferences, and daily routine.",
                "NTRL is not just about calories. We combine smart nutrition planning, structured workout routines, and wellness guidance for long-term health."
            ]
        },
        {
            title: "Built for Sustainability",
            icon: "♻️",
            content: [
                "Our system helps you build habits gradually and stay consistent through realistic changes.",
                "Maintain your results long-term because real transformation should last a lifetime."
            ]
        },
        {
            title: "Who NTRL is For",
            icon: "👥",
            content: [
                "From beginners starting their journey to busy professionals needing structure — NTRL is built for you.",
                "If you want a smarter, natural way to improve your health without extreme diets, you're in the right place."
            ]
        },
        {
            title: "Our Foundations",
            icon: "🏛️",
            content: [
                "Rooted in evidence-based nutrition, progressive training principles, and behavioral habit science.",
                "Your body deserves a method that works. No shortcuts, just real, natural progress."
            ]
        }
    ], []);

    return (
        <section className="relative overflow-hidden bg-white py-24">
            {/* Organic Glows - matching Hero aesthetic */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-[#76B15B]/10 blur-[120px]" />
                <div className="absolute -right-24 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#76B15B]/5 blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
                <div className="mx-auto max-w-3xl text-center space-y-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#76B15B]/10 text-[#458237] text-xs font-bold uppercase tracking-widest mb-4">
                            Our Mission
                        </span>
                        <h2 className="text-[40px] md:text-[56px] font-extrabold leading-[1.1] tracking-tight text-zinc-900 mb-6">
                            Simplifying your <span className="text-[#76B15B]">health journey</span>.
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-medium">
                            Transform the natural way. We believe health should feel simple, personal, and sustainable — designed around your life, not a fad.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative"
                        >
                            <div className="h-full rounded-3xl border border-zinc-100 bg-white/50 p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-[#76B15B]/5 hover:-translate-y-1">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#76B15B]/10 text-2xl transition-transform group-hover:scale-110">
                                    {section.icon}
                                </div>
                                <h3 className="text-2xl font-extrabold tracking-tight text-zinc-900 mb-4">
                                    {section.title}
                                </h3>
                                <div className="space-y-4">
                                    {section.content.map((p, i) => (
                                        <p key={i} className="text-[15px] font-medium leading-relaxed text-zinc-600">
                                            {p}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final CTA Card - Premium look */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[40px] bg-[#243E19] p-8 md:p-16 text-center text-white"
                >
                    {/* Decorative leaf/organic shape in bg */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-64 w-64 rounded-full bg-[#76B15B]/20 blur-3xl" />
                    <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-64 w-64 rounded-full bg-[#76B15B]/10 blur-3xl" />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-10">
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                Ready to build habits that last?
                            </h3>
                            <p className="text-white/70 text-lg font-medium">
                                No unrealistic promises. Just steady, measurable, and natural progress towards your health goals.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="w-full sm:w-auto rounded-full bg-white px-10 py-4 text-sm font-extrabold text-[#243E19] shadow-lg transition active:scale-[0.98] hover:bg-zinc-100">
                                Get Started
                            </button>
                            <button className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-10 py-4 text-sm font-extrabold text-white backdrop-blur-sm transition active:scale-[0.98] hover:bg-white/10">
                                Join Now
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-6 text-[13px] font-bold uppercase tracking-widest text-white/40">
                            <span>Simple</span>
                            <span className="h-1 w-1 rounded-full bg-white/20 my-auto" />
                            <span>Personal</span>
                            <span className="h-1 w-1 rounded-full bg-white/20 my-auto" />
                            <span>Sustainable</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
