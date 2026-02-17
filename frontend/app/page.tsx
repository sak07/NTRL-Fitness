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
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative z-10 pb-1">

        {/* About */}
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
              <Link href="/programs" className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2 group">
                Learn More <span className="group-hover:translate-x-2 transition-transform">›</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="bg-primary/5 py-12">
          <Stats />
        </div>

        {/* Programs */}
        <Services />

        {/* Pricing */}
        <div id="pricing" className="border-y border-accent/20">
          <Pricing />
        </div>

        <Testimonials />

        {/* Metabolic Strategy Consultation */}
        <section id="contact" className="py-32 px-8 bg-accent/5 scroll-mt-24">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Final Step</h2>
              <h3 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">Evolve Your Biology.</h3>
              <p className="text-lg text-zinc-500 font-medium">
                Reserve your metabolic strategy session with our senior coaching team.
                Limited availability for new natural athletes.
              </p>
            </div>

            <CalendarBooking />
          </div>
        </section>

        <Blog />

        {/* FAQ */}
        <FAQ />

        <Footer />
      </div>

      <Chatbot />
    </main>
  );
}
