"use client";

const stats = [
    { label: "Active Members", value: "10K+", detail: "Natural Transformations" },
    { label: "Expert Trainers", value: "50+", detail: "NTRL Certified Coaches" },
    { label: "Success Stories", value: "98%", detail: "Long-term Results" },
    { label: "Years Experience", value: "12", detail: "Organic Science" }
];

export default function Stats() {
    return (
        <section className="py-12 px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                {stats.map((s, i) => (
                    <div key={i} className="text-center group">
                        <div className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-primary mb-2 transition-transform group-hover:scale-110 duration-500">
                            {s.value}
                        </div>
                        <div className="text-sm font-bold uppercase tracking-[0.2em] text-foreground mb-1">
                            {s.label}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold border-t border-accent pt-2 max-w-[120px] mx-auto">
                            {s.detail}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
