"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const [videoError, setVideoError] = useState(false);

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section ref={ref} className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 overflow-hidden">
            {/* Background Video with Parallax & Fallback */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 bg-neutral-900"
            >
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {!videoError && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        onError={() => setVideoError(true)}
                        className="w-full h-full object-cover"
                        poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                    >
                        <source
                            src="/hero_video.mp4"
                        />
                    </video>
                )}

                {videoError && (
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                )}
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ opacity }}
                className="max-w-5xl px-8 text-center space-y-8 relative z-20 text-white"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] tracking-tight"
                >
                    Build Strength. <br /> Naturally.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90"
                >
                    Achieve real fitness with a natural approach to health. Pure techniques, organic nutrition, sustainable results.
                </motion.p>

                <motion.div variants={itemVariants} className="pt-8">
                    <button className="bg-primary text-white px-12 py-5 rounded-md font-bold text-lg uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center gap-3 mx-auto shadow-2xl active:scale-95">
                        Start Training
                        <span className="text-xl">›</span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Decorative Blur Bottom */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
        </section>
    );
}
