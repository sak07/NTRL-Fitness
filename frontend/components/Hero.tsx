export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 overflow-hidden">
            {/* Background Image Placeholder with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
            </div>

            <div className="max-w-5xl px-8 text-center space-y-8 relative z-20 text-white">
                <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] tracking-tight">
                    Build Strength. <br /> Naturally.
                </h1>

                <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
                    Achieve real fitness with a natural approach to health. Pure techniques, organic nutrition, sustainable results.
                </p>

                <div className="pt-8">
                    <button className="bg-primary text-white px-12 py-5 rounded-md font-bold text-lg uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center gap-3 mx-auto shadow-2xl">
                        Start Training
                        <span className="text-xl">›</span>
                    </button>
                </div>
            </div>

            {/* Decorative Blur Bottom */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
        </section>
    );
}
