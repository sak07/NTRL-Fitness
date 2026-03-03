import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import KeyFeatures from '@/components/KeyFeatures';
import HowItWorks from '@/components/HowItWorks';
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
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <div className="relative z-10">
        <KeyFeatures />

        <HowItWorks />

        <Testimonials />

        {/* CTA Section */}
        <section className="py-24 px-8 bg-white text-center space-y-8">
          <h3 className="text-3xl md:text-5xl font-sans font-bold text-zinc-800">
            Ready to start your journey?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#458237] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg">
              Join Now <span>›</span>
            </button>
            <button className="bg-white text-zinc-700 border border-zinc-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-50 transition-all shadow-sm">
              Contact Us
            </button>
          </div>
        </section>

        {/* Metabolic Strategy Consultation */}
        <section id="contact" className="py-32 px-8 bg-zinc-50 scroll-mt-24">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Final Step</h2>
              <h3 className="text-4xl md:text-6xl font-sans font-bold tracking-tight">Evolve Your Biology.</h3>
              <p className="text-lg text-zinc-500 font-medium">
                Reserve your metabolic strategy session with our senior coaching team.
              </p>
            </div>

            <CalendarBooking />
          </div>
        </section>

        <Blog />
        <FAQ />
      </div>

      <Footer />
      <Chatbot />
    </main>
  );
}
