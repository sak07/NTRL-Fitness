const programs = [
    {
        title: "Strength Training",
        desc: "Build functional strength naturally through compound movements.",
        icon: "🏋️",
        pillar: "Training"
    },
    {
        title: "Fat Loss",
        desc: "Burn fat with balanced, effective workouts and metabolic conditioning.",
        icon: "🏔️",
        pillar: "Metabolism"
    },
    {
        title: "Healthy Living",
        desc: "Learn sustainable habits for life, from sleep to organic nutrition.",
        icon: "🍃",
        pillar: "Longevity"
    }
];

export default function Services() {
    return (
        <section id="programs" className="py-24 px-8 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Programs</h2>
                <div className="w-20 h-1 bg-primary mb-12"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs.map((p, i) => (
                    <div key={i} className="bg-white p-12 rounded-lg border border-accent flex flex-col items-center text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                        <div className="text-5xl mb-8 group-hover:scale-110 transition-transform grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100">
                            {p.icon}
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4">{p.title}</h3>
                        <p className="text-zinc-500 leading-relaxed mb-8">
                            {p.desc}
                        </p>
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/50 group-hover:text-primary transition-colors">
                            Pillar: {p.pillar}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
