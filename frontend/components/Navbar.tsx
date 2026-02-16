import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass py-4 px-8 flex justify-between items-center transition-all">
      <div className="flex flex-col leading-none">
        <div className="text-2xl font-black italic tracking-tighter">
          NTRL<span className="text-primary transition-colors">FIT</span>
        </div>
        <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          Nutrition • Training • Resilience • Longevity
        </div>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-zinc-400">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <Link href="/methods" className="hover:text-primary transition-colors">Methods</Link>
        <Link href="/#training" className="hover:text-primary transition-colors">Training</Link>
        <Link href="/#pricing" className="hover:text-primary transition-colors">Pricing</Link>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="bg-primary text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-tighter hover:scale-105 transition-all cursor-pointer">
          Join Now
        </button>
      </div>
    </nav>
  );
}
