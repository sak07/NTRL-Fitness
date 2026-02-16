"use client";

const faqs = [
    { q: "What does 'Organic Evolution' mean?", a: "It's our philosophy of building strength through biological optimization—no synthetic supplements, just high-density nutrition and natural stress-load training." },
    { q: "Is this suitable for beginners?", a: "Absolutely. Nature doesn't discriminate. We tailor the 'Training' pillar to your current musculoskeletal readiness." },
    { q: "Can I upgrade my plan later?", a: "Yes, many of our members start with 'Performance' and transition to 'Elite' once they reach their first metabolic milestone." },
    { q: "What should I bring to my first consult?", a: "Just an open mind and a record of your typical daily nutrition. We build the roadmap from there." }
];

export default function FAQ() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-accent/20">
            <div>
                <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Common Questions</h2>
                <h3 className="text-5xl md:text-6xl font-serif font-bold tracking-tight uppercase leading-tight mb-8">NTRL <br /> Clarified</h3>
                <p className="text-zinc-500 font-medium text-lg leading-relaxed max-w-md">
                    Building a sustainable life-force takes clarity. We've answered the basics here.
                </p>
                <div className="mt-12 w-32 h-1 bg-primary/20"></div>
            </div>

            <div className="space-y-6">
                {faqs.map((f, i) => (
                    <div key={i} className="border-b border-accent pb-8 group cursor-pointer">
                        <h4 className="text-xl font-serif font-bold tracking-tight mb-4 flex justify-between items-center group-hover:text-primary transition-colors">
                            {f.q}
                            <span className="text-2xl group-hover:rotate-45 transition-transform">+</span>
                        </h4>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {f.a}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
