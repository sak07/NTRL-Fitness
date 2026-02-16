export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="glow-orb -top-20 -left-20"></div>
            <div className="glow-orb top-1/2 right-0 translate-y-[-50%] opacity-10"></div>

            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10 bg-[radial-gradient(var(--primary)_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="max-w-4xl px-8 text-center space-y-8 relative z-10">
                <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest animate-pulse">
                    NTRL: The Organic Evolution
                </div>

                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-gradient pb-4 uppercase">
                    Nutrition. Training. <br /> Resilience. Longevity.
                </h1>

                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                    Pure organic training. No supplements, no shortcuts. Just raw science-backed techniques designed for the modern elite athlete.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <button className="bg-primary text-black px-10 py-4 rounded-full font-black text-lg uppercase tracking-tighter hover:bg-white transition-colors cursor-pointer">
                        Book Your Consult
                    </button>
                    <button className="bg-transparent border border-white/20 hover:bg-white/10 px-10 py-4 rounded-full font-black text-lg uppercase tracking-tighter transition-all cursor-pointer">
                        Our Methods
                    </button>
                </div>
            </div>
        </section>
    );
}
