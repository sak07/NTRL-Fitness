import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 py-6 px-12 flex justify-between items-center transition-all bg-background/80 backdrop-blur-md border-b border-accent/20">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white text-lg font-bold">N</span>
        </div>
        <div className="text-2xl font-serif font-bold tracking-tight text-foreground">
          NTRL
        </div>
      </div>

      <div className="hidden md:flex gap-10 text-[13px] font-bold uppercase tracking-[0.15em] text-foreground/70">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <Link href="#programs" className="hover:text-primary transition-colors">Programs</Link>
        <Link href="#about" className="hover:text-primary transition-colors">About</Link>
        <Link href="#blog" className="hover:text-primary transition-colors">Blog</Link>
      </div>

      <div className="flex items-center gap-6">
        <ThemeToggle />
        <button className="bg-primary text-white px-8 py-3 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          Get Started
        </button>
      </div>
    </nav>
  );
}
