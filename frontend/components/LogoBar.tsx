"use client";

export default function LogoBar() {
    const logos = ["TITAN", "APEX", "CORE", "ZENITH", "VITAL", "BOLT"];

    return (
        <div className="w-full py-12 border-y border-accent flex flex-col items-center gap-8 overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">TRUSTED BY ELITE PARTNERS</p>
            <div className="flex gap-20 animate-infinite-scroll opacity-30 grayscale hover:grayscale-0 transition-all">
                {[...logos, ...logos].map((logo, i) => (
                    <span key={i} className="text-3xl font-black italic tracking-tighter shrink-0">{logo}</span>
                ))}
            </div>
        </div>
    );
}
