"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: 1,
        title: "Join & Set Goals",
        desc: "Sign up and set your targets"
    },
    {
        number: 2,
        title: "Get Your Plan",
        desc: "Receive your custom plan"
    },
    {
        number: 3,
        title: "Follow & Track",
        desc: "Exercise, eat, and track progress"
    },
    {
        number: 4,
        title: "Achieve Results",
        desc: "See your transformation"
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-[1px] flex-grow bg-zinc-200"></div>
                    <h2 className="text-3xl font-sans font-bold text-zinc-800">How It Works</h2>
                    <div className="h-[1px] flex-grow bg-zinc-200"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="rounded-2xl overflow-hidden shadow-sm border border-zinc-100 bg-white group hover:shadow-md transition-shadow"
                        >
                            {/* Header with Background Image and Gradient */}
                            <div className="relative h-20 bg-[#458237] flex items-center px-4 overflow-hidden">
                                {/* Background Leaf Deco (using a simple emoji/css as asset is missing) */}
                                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=728&auto=format&fit=crop')] bg-cover bg-center"></div>
                                <div className="relative z-10 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#458237] font-bold">
                                        {step.number}
                                    </div>
                                    <span className="text-white font-bold text-[15px]">{step.title}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-zinc-500 text-sm">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Wave/Mask at bottom to transition to Success Stories */}
            <div className="mt-20 relative h-32 w-full overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-full bg-[#fcfcfc] rounded-t-[100%] scale-x-150 border-t border-zinc-100"></div>
            </div>
        </section>
    );
}
