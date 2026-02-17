"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-8 md:px-12 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10">
                <div className="lg:col-span-4 space-y-8">
                    <div className="space-y-4">
                        <div className="text-3xl font-serif font-bold italic tracking-tight">
                            NTRL<span className="text-primary italic">FIT</span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed font-medium max-w-sm">
                            The elite organic alternative to the synthetic fitness industry.
                            Optimizing human biological performance through nature and science.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all group">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all group">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors"><path d="M22 4s-1 1-2 1c1 2 1 2-1 2-2 0-3 1-3 3 0 6-5 11-11 11-2 0-4-0.5-6-1.5 2 0.5 4 0 6-1-2 0-4-1-5-3 0.5 0 1 0 1.5-0.5-2.5-0.5-4.5-2.5-4.5-5.5 0.5 0.5 1 0.5 1.5 0.5-2.5-1.5-3.5-5-1.5-7.5 3 3.5 7 5.5 11.5 6-0.5-2 0-4 1.5-5.5 1.5-1.5 4-1.5 5.5 0 1-0.5 2-1 2-1-0.5 1-1 2-2 2.5 1-0.5 2-1 2-1-0.5 1-1.5 2-2.5 2.5z"></path></svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all group">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">Navigation</h4>
                    <ul className="space-y-4">
                        <li><Link href="/" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Home</Link></li>
                        <li><Link href="/programs" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Programs</Link></li>
                        <li><Link href="/about" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Our Philosophy</Link></li>
                        <li><Link href="/#contact" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">Programs</h4>
                    <ul className="space-y-4">
                        <li><Link href="/programs#strength" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Strength Training</Link></li>
                        <li><Link href="/programs#fat-loss" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Metabolic Reset</Link></li>
                        <li><Link href="/programs#healthy" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Elite Wellness</Link></li>
                        <li><Link href="/programs" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">All Methods</Link></li>
                    </ul>
                </div>

                <div className="lg:col-span-4 space-y-6">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">Newsletter</h4>
                    <div className="space-y-4">
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                            Subscribe to receive exclusive insights on natural biological optimization.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="athlete@domain.com"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm flex-grow focus:outline-none focus:border-primary transition-colors text-white"
                            />
                            <button className="bg-primary text-white px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                    &copy; 2026 NTRLFIT PERFORMANCE SCIENCE.
                </div>
                <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                    <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
