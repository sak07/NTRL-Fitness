"use client";

const faqs = [
    { q: "How do I book a trial session?", a: "You can use the calendar above to pick any available 30-min trial slot. It's completely free!" },
    { q: "Do you offer personalized diet plans?", a: "Yes, our Performance and Elite tiers include custom macronutrient profiling tailored to your metabolic rate." },
    { q: "Can I cancel my membership anytime?", a: "Of course. We believe in results, not contracts. Cancel via the app with one click." },
    { q: "What should I bring to my first call?", a: "Just your enthusiasm and any specific fitness goals or medical history you want to discuss." }
];

export default function FAQ() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Common Questions</h2>
                <h3 className="text-5xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">STILL HAVE <br /> QUESTIONS?</h3>
                <p className="text-zinc-500 font-medium text-lg leading-relaxed max-w-md">
                    We've answered the most frequent inquiries here. If you need more details, just ask our AI assistant or book a call.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((f, i) => (
                    <div key={i} className="glass p-8 rounded-3xl group cursor-pointer hover:border-primary/40 transition-all">
                        <h4 className="text-lg font-bold tracking-tight mb-2 flex justify-between items-center group-hover:text-primary">
                            {f.q}
                            <span className="text-primary">+</span>
                        </h4>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                            {f.a}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
