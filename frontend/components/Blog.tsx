"use client";

const posts = [
    {
        title: "Effective Home Workouts",
        desc: "Elite functional training patterns you can do without expensive gym equipment.",
        category: "Training",
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Eating Clean & Simple",
        desc: "A guide to bio-available organic nutrition for maximum recovery and energy.",
        category: "Nutrition",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Tips for Natural Recovery",
        desc: "The science of sleep, sunlight, and cold exposure for long-term health.",
        category: "Longevity",
        img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop"
    }
];

export default function Blog() {
    return (
        <section id="blog" className="py-24 px-8 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Latest from the Blog</h2>
                <div className="w-20 h-1 bg-primary mb-12"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {posts.map((p, i) => (
                    <div key={i} className="flex flex-col group cursor-pointer">
                        <div className="aspect-[16/10] overflow-hidden rounded-lg mb-6">
                            <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex gap-4 mb-4 items-center">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-primary/10 text-primary rounded-sm">
                                {p.category}
                            </span>
                        </div>
                        <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                            {p.title}
                        </h3>
                        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                            {p.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
