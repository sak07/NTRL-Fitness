import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoBar from '@/components/LogoBar';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import CalendarBooking from '@/components/CalendarBooking';
import Chatbot from '@/components/Chatbot';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      <div className="relative z-10 pb-32">

        {/* Logo Bar - Organic Style */}
        {/* <LogoBar /> */}

        {/* About Section - Reference Alignment */}
        <section id="about" className="py-32 px-12 max-w-5xl mx-auto border-t border-accent/30">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-zinc-500 font-bold border-b border-primary/20 inline-block pb-2 uppercase tracking-[0.3em] text-xs mb-8">Our Philosophy</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-foreground leading-tight">
              We believe in training naturally — no shortcuts, no gimmicks.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <p className="text-xl font-medium text-foreground/80 leading-relaxed max-w-3xl border-l-4 border-primary/20 pl-8">
              NTRL stands for Nutrition, Training, Resilience, and Longevity. Our mission is to provide an elite, science-backed organic alternative to the synthetic fitness industry.
            </p>
            <div className="space-y-6">
              <p className="text-zinc-500 leading-relaxed font-medium">
                Every program we design is rooted in biological reality. We optimize your body's natural systems rather than bypassing them with artificial aids.
              </p>
              <button className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2 group">
                Learn More <span className="group-hover:translate-x-2 transition-transform">›</span>
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section - Restored with Organic Styling */}
        <div className="bg-primary/5 py-12">
          <Stats />
        </div>

        {/* Programs / Services */}
        <Services />

        {/* Pricing Restored */}
        <div id="pricing" className="border-y border-accent/20">
          <Pricing />
        </div>

        <Testimonials />

        {/* Engagement Break */}
        <div className="max-w-7xl mx-auto py-12 px-8 mb-12">
          <div className="glass p-12 md:p-24 rounded-[40px] border border-primary/10 flex flex-col items-center text-center gap-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight uppercase italic">Ready to Evolve?</h2>
            <p className="text-zinc-500 font-medium max-w-xl text-lg">
              Join our organic coaching program today. Pick a date for your initial metabolic consult.
            </p>
            <div className="w-full">
              <CalendarBooking />
            </div>
          </div>
        </div>

        <Blog />

        {/* FAQ Restored */}
        <FAQ />

        {/* Final CTA */}
        <div className="px-8 max-w-7xl mx-auto mt-24">
          <div className="bg-primary p-16 md:p-32 rounded-3xl text-white text-center space-y-8 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter leading-none relative z-10">START YOUR <br /> NATURAL JOURNEY.</h2>
            <button className="bg-white text-primary px-16 py-6 rounded-md font-bold text-2xl uppercase tracking-widest hover:scale-105 transition-all relative z-10 shadow-lg">
              Join NSRL Fit
            </button>
          </div>
        </div>

        {/* Footer Refinement */}
        <footer className="mt-32 pt-24 pb-12 px-12 border-t border-accent bg-background">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="space-y-6">
              <div className="text-3xl font-serif font-bold italic tracking-tight">
                NTRL<span className="text-primary italic">FIT</span>
              </div>
              <p className="text-zinc-400 text-xs font-medium uppercase tracking-[0.2em]">
                Pure Organic Evolution
              </p>
              <div className="flex justify-center md:justify-start gap-6 pt-2">
                <a href="#" className="w-10 h-10 rounded-full border border-accent flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all p-2.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-accent flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all p-2.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M22 4s-1 1-2 1c1 2 1 2-1 2-2 0-3 1-3 3 0 6-5 11-11 11-2 0-4-0.5-6-1.5 2 0.5 4 0 6-1-2 0-4-1-5-3 0.5 0 1 0 1.5-0.5-2.5-0.5-4.5-2.5-4.5-5.5 0.5 0.5 1 0.5 1.5 0.5-2.5-1.5-3.5-5-1.5-7.5 3 3.5 7 5.5 11.5 6-0.5-2 0-4 1.5-5.5 1.5-1.5 4-1.5 5.5 0 1-0.5 2-1 2-1-0.5 1-1 2-2 2.5 1-0.5 2-1 2-1-0.5 1-1.5 2-2.5 2.5z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-accent flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all p-2.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>

            <div className="flex gap-16 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div className="mt-24 text-center text-zinc-400 text-[10px] font-bold uppercase tracking-[0.4em] opacity-50">
            &copy; 2026 NTRLFIT PERFORMANCE SCIENCE.
          </div>
        </footer>
      </div>

      <Chatbot />
    </main>
  );
}
