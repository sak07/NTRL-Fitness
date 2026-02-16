"use client";

const plans = [
    {
        name: "Starter",
        price: "49",
        features: ["Standard gym access", "2 Group sessions/mo", "Mobile app access", "Water & Towel service"],
        cta: "Join Now",
        popular: false
    },
    {
        name: "Performance",
        price: "99",
        features: ["All-hours access", "Unlimited group classes", "1-on-1 coaching session", "Personal meal plan", "Progress tracking"],
        cta: "Best Value",
        popular: true
    },
    {
        name: "Elite",
        price: "199",
        features: ["Priority booking", "Unlimited 1-on-1 coaching", "Custom supplement stack", "Recovery lounge access", "Dedicated concierge"],
        cta: "Go Pro",
        popular: false
    }
];

export default function Pricing() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Pricing Plans</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">INVEST IN YOURSELF</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((p, i) => (
                    <div key={i} className={`glass p-10 rounded-[40px] flex flex-col items-start gap-8 transition-all hover:scale-[1.02] ${p.popular ? 'border-primary/50 bg-primary/5 shadow-[0_0_80px_-20px_var(--primary)]' : ''}`}>
                        {p.popular && <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-primary text-black rounded-full">Most Popular</span>}
                        <div className="w-full">
                            <h4 className="text-xl font-bold uppercase tracking-widest text-zinc-500 mb-2">{p.name}</h4>
                            <div className="flex items-baseline gap-1">
                                <span className="text-5xl font-black"> ${p.price}</span>
                                <span className="text-zinc-500 font-bold uppercase text-xs">/month</span>
                            </div>
                        </div>

                        <div className="w-full space-y-4 pt-4 border-t border-accent flex-1">
                            {p.features.map(f => (
                                <div key={f} className="flex gap-3 items-center text-sm font-medium text-zinc-400">
                                    <span className="text-primary">✓</span> {f}
                                </div>
                            ))}
                        </div>

                        <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-tighter transition-all ${p.popular ? 'bg-primary text-black' : 'bg-white text-black hover:bg-primary'}`}>
                            {p.cta}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
