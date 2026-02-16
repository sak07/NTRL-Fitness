"use client";

const stories = [
    {
        name: "Mike R.",
        quote: "I've never felt better and stronger. Natural training changed how I view my potential.",
        img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1780&auto=format&fit=crop"
    },
    {
        name: "Sarah L.",
        quote: "Natural fitness changed my life! The organic approach is sustainable and empowering.",
        img: "https://images.unsplash.com/photo-1583454110551-21f2fa202111?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Success Stories</h2>
                <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {stories.map((s, i) => (
                    <div key={i} className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
                        <img src={s.img} alt={s.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                        <div className="absolute inset-x-0 bottom-0 p-12 z-20 text-white">
                            <div className="mb-6 opacity-30 text-6xl font-serif italic">"</div>
                            <p className="text-2xl font-serif font-medium leading-relaxed mb-8">
                                {s.quote}
                            </p>
                            <div className="font-bold uppercase tracking-widest text-sm border-t border-white/20 pt-6">
                                {s.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
