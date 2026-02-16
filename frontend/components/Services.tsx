const services = [
    {
        title: "Strength & Gaining",
        desc: "Build muscle mass with our scientifically backed hypertrophy programs.",
        tags: ["Bulking", "Hypertrophy"]
    },
    {
        title: "Weight Loss",
        desc: "Target fat loss while maintaining lean muscle with high-intensity training.",
        tags: ["Cutting", "Cardio"]
    },
    {
        title: "Online Coaching",
        desc: "Get personalized diet and workout plans from anywhere in the world.",
        tags: ["Remote", "Weekly Check-ins"]
    }
];

export default function Services() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">What we offer</h2>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter">ELITE PROGRAMS</h3>
                </div>
                <button className="text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest hidden md:block">
                    Explore All &rarr;
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((s, i) => (
                    <div key={i} className="glass p-8 rounded-[32px] hover:border-primary/50 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                            ★
                        </div>
                        <h4 className="text-2xl font-black mb-4 tracking-tight">{s.title}</h4>
                        <p className="text-zinc-500 font-medium mb-8 leading-relaxed">
                            {s.desc}
                        </p>
                        <div className="flex gap-2">
                            {s.tags.map(t => (
                                <span key={t} className="text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
