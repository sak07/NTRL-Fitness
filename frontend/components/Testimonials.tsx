"use client";

const testimonials = [
    {
        name: "Alex Johnson",
        role: "Athlete",
        content: "NTRLFIT changed my life. The personalized coaching and support are unmatched.",
        image: "AJ"
    },
    {
        name: "Sarah Miller",
        role: "Yoga Instructor",
        content: "Building strength was easy with their science-based programs. Highly recommended!",
        image: "SM"
    },
    {
        name: "Mike Ross",
        role: "Marathon Runner",
        content: "The trainers here really know their stuff. My performance has skyrocketed.",
        image: "MR"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Success Stories</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">WHAT OUR MEMBERS SAY</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="glass p-10 rounded-[40px] relative overflow-hidden group hover:scale-[1.02] transition-transform">
                        <div className="text-6xl text-primary/10 absolute -top-2 -left-2 font-serif">"</div>
                        <p className="text-zinc-500 font-medium italic mb-8 relative z-10 leading-relaxed text-lg">
                            {t.content}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                                {t.image}
                            </div>
                            <div>
                                <h4 className="font-bold tracking-tight">{t.name}</h4>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
