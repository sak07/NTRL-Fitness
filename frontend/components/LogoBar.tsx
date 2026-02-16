"use client";

export default function LogoBar() {
    const partners = ["FORBES", "VOGUE", "MEN'S HEALTH", "EQUINOX", "BIO-TECH"];

    return (
        <div className="w-full py-16 border-b border-accent/20 flex flex-col items-center gap-12 bg-white/50 backdrop-blur-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">Featured in Elite Publications</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                {partners.map((p, i) => (
                    <span key={i} className="text-2xl font-serif font-bold italic tracking-tighter shrink-0 cursor-default select-none hover:text-primary hover:opacity-100 transition-all">
                        {p}
                    </span>
                ))}
            </div>
        </div>
    );
}
