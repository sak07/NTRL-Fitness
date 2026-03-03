"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
    const [activeScreen, setActiveScreen] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveScreen((prev) => (prev + 1) % 3);
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    const cards = useMemo(
        () => [
            {
                icon: "⚖️",
                title: "Lose Weight Naturally",
                subtitle: "Burn fat the healthy way"
            },
            {
                icon: "🏋️",
                title: "Build Muscle Naturally",
                subtitle: "Gain strength & lean muscle"
            },
            {
                icon: "❤️",
                title: "Live Healthy",
                subtitle: "Boost your wellness"
            }
        ],
        []
    );

    return (
        <section className="relative overflow-hidden bg-white">
            {/* Soft, leafy glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#76B15B]/15 blur-3xl" />
                <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#76B15B]/10 blur-3xl" />
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-white via-white/70 to-white" />
            </div>

            {/* Hero */}
            <div className="relative z-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-6 md:grid-cols-2 md:px-10 md:pb-20 md:pt-8">
                    {/* Left copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-6"
                    >
                        <div className="space-y-3">
                            <h1 className="text-[44px] font-extrabold leading-[1.06] tracking-tight text-zinc-900 md:text-[64px]">
                                Transform Your Health,
                                <br />
                                <span className="text-[#76B15B]">Naturally</span>
                            </h1>
                            <p className="max-w-lg text-[15px] font-medium leading-relaxed text-zinc-600 md:text-[18px]">
                                Reach your fitness goals with
                                <br className="hidden md:block" />
                                personalized plans &amp; natural guidance.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <button className="rounded-full bg-gradient-to-b from-[#76B15B] to-[#458237] px-7 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#76B15B]/25 transition hover:brightness-[1.02] active:scale-[0.98]">
                                Get Started
                            </button>
                            <Link href="/about">
                                <button className="rounded-full border border-zinc-200 bg-white px-7 py-3 text-sm font-extrabold text-zinc-700 shadow-sm transition hover:bg-zinc-50 active:scale-[0.98]">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative h-[500px] md:h-full min-h-[500px] w-full"
                    >
                        {/* Background image - Expanded to fill the area */}
                        <div className="absolute inset-0 overflow-hidden rounded-[40px] shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2400&auto=format&fit=crop"
                                alt="Healthy lifestyle"
                                className="h-full w-full object-cover scale-110"
                            />
                            {/* Refined overlays for depth */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[40px]" />
                        </div>

                        {/* Phone overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute left-8 top-1/2 w-[240px] -translate-y-1/2 md:left-12 md:w-[270px]"
                        >
                            <div className="rounded-[44px] bg-zinc-900 p-[10px] shadow-[0_55px_120px_-30px_rgba(0,0,0,0.55)]">
                                <div className="relative h-[480px] overflow-hidden rounded-[34px] bg-white md:h-[540px]">
                                    <AnimatePresence mode="wait">
                                        {activeScreen === 0 && (
                                            <motion.div
                                                key="dashboard"
                                                initial={{ x: 50, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -50, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                className="h-full p-4"
                                            >
                                                <div className="mb-4 flex items-center justify-between">
                                                    <div className="text-[10px] font-extrabold text-zinc-700 uppercase tracking-wider">Goals Board</div>
                                                    <div className="h-6 w-6 rounded-full bg-zinc-100 flex items-center justify-center text-[10px]">🔥</div>
                                                </div>

                                                <div className="mb-4 rounded-2xl bg-[#76B15B]/10 p-4">
                                                    <div className="flex items-end justify-between">
                                                        <div className="text-3xl font-extrabold text-[#458237]">852</div>
                                                        <div className="pb-1 text-[10px] font-bold text-[#458237]">kcal</div>
                                                    </div>
                                                    <div className="mt-3 h-2 w-full rounded-full bg-[#458237]/15 overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: "66%" }}
                                                            transition={{ delay: 0.5, duration: 1 }}
                                                            className="h-full bg-[#458237]"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <div className="text-[10px] font-extrabold text-zinc-700 uppercase tracking-tighter">Activity</div>
                                                    <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3">
                                                        <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-sm text-lg">🚶‍♂️</div>
                                                        <div className="flex-1">
                                                            <div className="text-[11px] font-extrabold text-zinc-800">8,432 steps</div>
                                                            <div className="text-[9px] font-bold text-zinc-400">Goal: 10,000</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3">
                                                        <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-sm text-lg">💧</div>
                                                        <div className="flex-1">
                                                            <div className="text-[11px] font-extrabold text-zinc-800">1.8L Water</div>
                                                            <div className="text-[9px] font-bold text-zinc-400">Goal: 2.5L</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeScreen === 1 && (
                                            <motion.div
                                                key="nutrition"
                                                initial={{ x: 50, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -50, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                className="h-full p-4"
                                            >
                                                <div className="mb-4 flex items-center justify-between">
                                                    <div className="text-[10px] font-extrabold text-zinc-700 uppercase tracking-wider">Nutrition Plan</div>
                                                    <div className="h-6 w-6 rounded-full bg-zinc-100 flex items-center justify-center text-[10px]">🥗</div>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="rounded-2xl border border-zinc-100 overflow-hidden shadow-sm">
                                                        <div className="h-28 bg-zinc-100 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center" />
                                                        <div className="p-3">
                                                            <div className="text-[11px] font-extrabold text-zinc-800">Quinoa Energy Bowl</div>
                                                            <div className="flex gap-2 mt-1">
                                                                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-500">420 kcal</span>
                                                                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-green-50 text-[#458237]">High Protein</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-3">
                                                        <div className="rounded-2xl bg-[#76B15B]/5 p-3 text-center border border-[#76B15B]/10">
                                                            <div className="text-[14px] font-extrabold text-[#458237]">45g</div>
                                                            <div className="text-[8px] font-bold text-zinc-400 uppercase">Protein</div>
                                                        </div>
                                                        <div className="rounded-2xl bg-orange-50 p-3 text-center border border-orange-100">
                                                            <div className="text-[14px] font-extrabold text-orange-600">12g</div>
                                                            <div className="text-[8px] font-bold text-zinc-400 uppercase">Fats</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeScreen === 2 && (
                                            <motion.div
                                                key="workout"
                                                initial={{ x: 50, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -50, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                className="h-full p-4"
                                            >
                                                <div className="mb-4 flex items-center justify-between">
                                                    <div className="text-[10px] font-extrabold text-zinc-700 uppercase tracking-wider">Today's Workout</div>
                                                    <div className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-[10px]">▶</div>
                                                </div>

                                                <div className="mb-4 text-[20px] font-extrabold text-zinc-900 leading-tight">Full Body<br />Sculpt</div>

                                                <div className="space-y-3">
                                                    {[
                                                        { name: "Goblet Squats", reps: "3 x 12", active: true },
                                                        { name: "Push Ups", reps: "3 x 15", active: false },
                                                        { name: "Plank Hold", reps: "45 sec", active: false }
                                                    ].map((ex, i) => (
                                                        <div key={i} className={`flex items-center gap-3 rounded-2xl p-3 border ${ex.active ? "border-[#76B15B] bg-[#76B15B]/5" : "border-zinc-100 bg-white"}`}>
                                                            <div className={`h-8 w-8 rounded-full flex items-center justify-center text-[12px] ${ex.active ? "bg-[#76B15B] text-white" : "bg-zinc-100 text-zinc-400"}`}>
                                                                {i + 1}
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="text-[11px] font-extrabold text-zinc-800">{ex.name}</div>
                                                                <div className="text-[9px] font-bold text-zinc-400">{ex.reps}</div>
                                                            </div>
                                                            {ex.active && <div className="text-[10px] text-[#458237] font-bold">LIVE</div>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Bottom Nav Mockup */}
                                    <div className="absolute bottom-0 left-0 right-0 h-14 bg-white/80 backdrop-blur-md border-t border-zinc-50 px-6 flex items-center justify-between">
                                        <div className={`text-[12px] ${activeScreen === 0 ? "text-[#458237]" : "text-zinc-300"}`}>🏠</div>
                                        <div className={`text-[12px] ${activeScreen === 1 ? "text-[#458237]" : "text-zinc-300"}`}>🍎</div>
                                        <div className={`text-[12px] ${activeScreen === 2 ? "text-[#458237]" : "text-zinc-300"}`}>💪</div>
                                        <div className="text-[12px] text-zinc-300">👤</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Curved white separator */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10">
                    <svg
                        viewBox="0 0 1440 120"
                        className="h-[70px] w-full md:h-[90px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,64 C240,120 480,120 720,90 C960,60 1200,30 1440,54 L1440,120 L0,120 Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>

            {/* Info Cards Row (single bar with dividers like the reference) */}
            <div className="relative z-20 -mt-6 pb-10 md:-mt-8">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-zinc-200/60">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {cards.map((card, i) => (
                                <div
                                    key={card.title}
                                    className={`flex items-center gap-4 px-6 py-5 ${i !== cards.length - 1
                                        ? "md:border-r md:border-zinc-200"
                                        : ""
                                        } ${i !== 0 ? "border-t border-zinc-200 md:border-t-0" : ""}`}
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 text-2xl shadow-inner">
                                        {card.icon}
                                    </div>
                                    <div className="leading-tight">
                                        <div className="text-[14px] font-extrabold text-zinc-900">
                                            {card.title}
                                        </div>
                                        <div className="text-[12px] font-semibold text-zinc-500">
                                            {card.subtitle}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
