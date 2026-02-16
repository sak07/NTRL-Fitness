"use client";

const stats = [
    { label: "Active Members", value: "10K+", detail: "Across the globe" },
    { label: "Expert Trainers", value: "50+", detail: "Certified professionals" },
    { label: "Success Stories", value: "98%", detail: "Positive results" },
    { label: "Years Experience", value: "12", detail: "Elite coaching" }
];

export default function Stats() {
    return (
        <section className="py-12 px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {stats.map((s, i) => (
                    <div key={i} className="glass p-8 rounded-[40px] text-center group hover:border-primary/50 transition-all">
                        <div className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-2">
                            {s.value}
                        </div>
                        <div className="text-sm font-bold uppercase tracking-widest text-foreground">
                            {s.label}
                        </div>
                        <div className="text-[10px] uppercase tracking-tighter text-zinc-500 font-bold mt-2">
                            {s.detail}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
