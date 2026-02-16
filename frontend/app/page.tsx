import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoBar from '@/components/LogoBar';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CalendarBooking from '@/components/CalendarBooking';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Texture & Light */}
      <div className="glow-orb top-[100vh] -right-60 opacity-10"></div>
      <div className="glow-orb top-[250vh] -left-60 opacity-5"></div>
      <div className="glow-orb top-[400vh] right-0 opacity-10"></div>

      <Navbar />

      <div className="relative z-10 flex flex-col gap-32 pb-32 overflow-x-hidden">
        <Hero />

        <LogoBar />

        <section id="training">
          <Stats />
          <Services />
        </section>

        <section id="pricing" className="relative">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 -z-10 h-[110%]"></div>
          <Pricing />
        </section>

        <section id="reviews">
          <Testimonials />
        </section>

        <section id="booking" className="glass py-12 rounded-[100px] border-x-0 max-w-7xl mx-auto w-full">
          <CalendarBooking />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <div className="px-8 max-w-7xl mx-auto">
          <div className="glass p-12 md:p-24 rounded-[80px] bg-primary text-black text-center space-y-8 overflow-hidden relative group">
            <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
              <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,black_20px,black_40px)]"></div>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] relative z-10">
              READY TO START <br /> YOUR EVOLUTION?
            </h2>
            <p className="text-xl font-bold uppercase tracking-widest opacity-80 relative z-10">Limited Slots Available for February Intake</p>
            <button className="bg-black text-white px-16 py-6 rounded-3xl font-black text-2xl uppercase tracking-tighter hover:scale-105 transition-all relative z-10 shadow-2xl">
              Apply for Coaching
            </button>
          </div>
        </div>
      </div>

      <Chatbot />

      <footer className="py-24 border-t border-accent bg-secondary/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-4xl font-black italic tracking-tighter mb-6">
              NTRL<span className="text-primary">FIT</span>
            </div>
            <p className="text-zinc-500 font-bold text-sm uppercase max-w-sm leading-relaxed tracking-tighter">
              The premier destination for elite fitness coaching and performance science. Join our community of high achievers.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="font-black uppercase tracking-widest text-xs">Navigation</h5>
            <ul className="space-y-2 text-sm font-bold text-zinc-500 uppercase tracking-tighter">
              <li className="hover:text-primary cursor-pointer transition-colors">Programs</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Coaching</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-black uppercase tracking-widest text-xs">Contact</h5>
            <ul className="space-y-2 text-sm font-bold text-zinc-500 uppercase tracking-tighter">
              <li>Join@ntrlfit.com</li>
              <li>Dubai, UAE - District X</li>
              <li>+971 00 000 0000</li>
            </ul>
          </div>
        </div>
        <div className="mt-24 text-center text-zinc-600 text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">
          &copy; 2026 NTRLFIT PERFORMANCE. ALL RIGHTS RESERVED. DESIGNED BY ANTIGRAVITY.
        </div>
      </footer>
    </main>
  );
}
