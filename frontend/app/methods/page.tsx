import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';

const pillars = [
    {
        id: "N",
        title: "Nutrition",
        subtitle: "Fueling the Machine",
        content: "We bypass the supplement industry. Our nutritional approach is 100% organic, focused on bio-available micronutrients and anti-inflammatory whole foods. We calculate your metabolic blueprint to ensure every calorie serves your performance.",
        icon: "🍏"
    },
    {
        id: "T",
        title: "Training",
        subtitle: "Organic Kinematics",
        content: "Functional movement patterns executed with precision. No machines, no shortcuts. We utilize bodyweight mastery, compound lifts, and high-intensity organic circuits to build a body that is as capable as it is aesthetic.",
        icon: "🏋️"
    },
    {
        id: "R",
        title: "Resilience",
        subtitle: "The Mental Edge",
        content: "Training the mind is as critical as training the body. Our resilience protocols include cold exposure, breathwork, and sensory deprivation to forge an unbreakable mental state capable of withstanding extreme physical stress.",
        icon: "🏔️"
    },
    {
        id: "L",
        title: "Longevity",
        subtitle: "Future Proofing",
        content: "Fitness isn't just for today. Our longevity science focuses on joint health, cellular repair, and cardiovascular efficiency to ensure you stay in your prime for decades, not just years.",
        icon: "⏳"
    }
];

export default function MethodsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-40 pb-32 px-8 max-w-7xl mx-auto relative z-10">
                <header className="mb-24">
                    <h1 className="text-zinc-500 font-black text-xs uppercase tracking-[0.5em] mb-4">The NTRL Framework</h1>
                    <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-gradient leading-[0.85] uppercase">
                        SCIENCE OF <br /> ORGANIC <br /> EVOLUTION.
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {pillars.map((p, i) => (
                        <div key={i} className="glass p-12 rounded-[60px] flex flex-col gap-8 group hover:border-primary/50 transition-all">
                            <div className="flex justify-between items-start">
                                <span className="text-8xl font-black text-primary/10 group-hover:text-primary transition-colors leading-none">{p.id}</span>
                                <span className="text-4xl">{p.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black tracking-tight mb-2 uppercase">{p.title}</h3>
                                <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-6">{p.subtitle}</h4>
                                <p className="text-zinc-500 font-medium text-lg leading-relaxed">
                                    {p.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="aspect-square bg-white/5 rounded-[80px] border border-white/10 flex items-center justify-center overflow-hidden">
                        <div className="text-zinc-800 font-black italic text-4xl uppercase select-none opacity-20">
                            Organic Imagery Here
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-5xl font-black tracking-tighter uppercase leading-[1.1]">WHY NO <br /> SUPPLEMENTS?</h3>
                        <p className="text-zinc-500 font-medium text-lg leading-relaxed">
                            Synthetics are a band-aid. We believe in tapping into your body's natural endocrine potential. By optimizing sleep, sunlight, and organic nutrient density, we trigger superior hypertrophy and fat loss without the need for artificial boosters.
                        </p>
                        <ul className="space-y-4">
                            {["0% Synthetics", "100% Natural Hypertrophy", "Endocrine Optimization", "Bio-available Fuels"].map(item => (
                                <li key={item} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest">
                                    <span className="w-2 h-2 bg-primary"></span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>

            <Chatbot />

            <footer className="py-24 border-t border-accent text-center">
                <div className="text-2xl font-black italic tracking-tighter mb-4">
                    NTRL<span className="text-primary">FIT</span>
                </div>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.5em]">
                    &copy; 2026 NTRLFIT PERFORMANCE SCIENCE.
                </p>
            </footer>
        </main>
    );
}
