export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="parallax-wrap absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Luxury living room by UrbanNest Interiors"
          className="parallax-img w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="eyebrow text-white/80 fade-up">
              <span className="text-white/60">Premium Indian Interiors</span>
            </div>
            <h1 className="mt-6 font-display text-white text-5xl sm:text-6xl lg:text-8xl leading-[0.95] fade-up fade-up-delay-1">
              Where <span className="gold-text italic">elegance</span>
              <br />
              meets everyday living.
            </h1>
            <p className="mt-8 text-white/80 text-lg lg:text-xl max-w-xl leading-relaxed fade-up fade-up-delay-2">
              UrbanNest crafts timeless, bespoke interiors for India's most discerning
              homeowners — from Mumbai penthouses to Delhi villas.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 fade-up fade-up-delay-3">
              <a href="#projects" className="btn-gold">
                View Portfolio
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">Book Free Consultation</a>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 max-w-4xl fade-up fade-up-delay-3">
            {[
              { num: "350+", label: "Homes Delivered" },
              { num: "12", label: "Years of Craft" },
              { num: "42", label: "Cities Served" },
              { num: "4.9★", label: "Client Rating" },
            ].map((s) => (
              <div key={s.label} className="glass-dark rounded-2xl px-6 py-5">
                <div className="font-display text-3xl lg:text-4xl text-white">{s.num}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-2">
        <span>Scroll</span>
        <div className="w-[1px] h-10 bg-white/40 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-3 bg-[#c9a961] animate-[fadeUp_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
