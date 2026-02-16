"use client";

const plans = [
    {
        name: "Starter",
        price: "49",
        features: ["Initial Metabolic Consult", "Access to Organic Guides", "Basic Training App", "Community Support"],
        cta: "Join Now",
        popular: false
    },
    {
        name: "Performance",
        price: "99",
        features: ["All Performance Modules", "Unlimited Organic Coaching", "Custom Resilience Protocols", "Precision Meal Planning", "Weekly Progress Review"],
        cta: "Best Value",
        popular: true
    },
    {
        name: "Elite",
        price: "199",
        features: ["1-on-1 Elite Support", "Monthly Bloodwork Review", "Custom Recovery Stack", "Longevity Lab Access", "Global Mastermind"],
        cta: "Explore Elite",
        popular: false
    }
];

export default function Pricing() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Pricing Plans</h2>
                <h3 className="text-5xl md:text-7xl font-serif font-bold tracking-tight uppercase italic pb-4">Invest in your <br /> Longevity</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {plans.map((p, i) => (
                    <div key={i} className={`bg-white p-12 rounded-xl flex flex-col items-start gap-8 transition-all duration-500 border border-accent hover:shadow-2xl hover:-translate-y-2 ${p.popular ? 'border-primary/40 ring-4 ring-primary/5' : ''}`}>
                        {p.popular && <span className="text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1 bg-primary text-white rounded-sm">Preferred Choice</span>}
                        <div className="w-full">
                            <h4 className="text-2xl font-serif font-bold mb-4">{p.name}</h4>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-serif font-bold text-primary"> ${p.price}</span>
                                <span className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest">/month</span>
                            </div>
                        </div>

                        <div className="w-full space-y-4 pt-8 border-t border-accent flex-1">
                            {p.features.map(f => (
                                <div key={f} className="flex gap-4 items-start text-sm font-medium text-zinc-500 leading-snug">
                                    <span className="text-primary text-lg mt-[-2px]">🌱</span> {f}
                                </div>
                            ))}
                        </div>

                        <button className={`w-full py-4 rounded-md font-bold uppercase tracking-[0.2em] text-xs transition-all ${p.popular ? 'bg-primary text-white shadow-lg' : 'bg-transparent border border-accent text-zinc-500 hover:border-primary hover:text-primary'}`}>
                            {p.cta}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
