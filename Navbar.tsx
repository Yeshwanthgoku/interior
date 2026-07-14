import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <nav
          className={`flex items-center justify-between transition-all duration-500 rounded-full px-6 lg:px-10 py-4 ${
            scrolled
              ? "glass shadow-[0_10px_40px_-20px_rgba(20,20,20,0.4)]"
              : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#c9a961] flex items-center justify-center">
              <span className="font-display text-[#c9a961] text-xl leading-none">U</span>
            </div>
            <div className="leading-tight">
              <div className={`font-display text-xl ${scrolled ? "text-[#141414]" : "text-white"}`}>
                UrbanNest
              </div>
              <div
                className={`text-[10px] tracking-[0.3em] uppercase ${
                  scrolled ? "text-[#6b5b44]" : "text-white/70"
                }`}
              >
                Interiors
              </div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm tracking-wide uppercase font-medium transition-colors hover:text-[#c9a961] ${
                    scrolled ? "text-[#141414]" : "text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className={`hidden lg:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium py-3 px-6 border transition-colors ${
              scrolled
                ? "border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-white"
                : "border-white/70 text-white hover:bg-white hover:text-[#141414]"
            }`}
          >
            Free Consultation
          </a>

          <button
            className={`lg:hidden ${scrolled ? "text-[#141414]" : "text-white"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-3 glass rounded-3xl p-6 space-y-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-[#141414] uppercase text-sm tracking-widest font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
