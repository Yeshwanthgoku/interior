import { useParallax } from "../hooks/useScrollReveal";

export default function About() {
  useParallax();
  return (
    <section id="about" className="relative py-28 lg:py-40 bg-[#f6f1e8] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-[#c9a961]/20 blur-xl" />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/8837784/pexels-photo-8837784.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 max-w-[220px]">
                <div className="font-display text-3xl text-[#141414]">12+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#6b5b44] mt-1">Years crafting Indian homes</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-2">
            <div className="eyebrow">Our Story</div>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-[1.05]">
              Designing homes
              <br />
              <span className="italic text-[#6b5b44]">that feel like poetry.</span>
            </h2>
            <p className="mt-6 text-[#6b5b44] leading-relaxed">
              Founded in 2013 by designer <strong className="text-[#141414]">Aarav Mehta</strong>,
              UrbanNest began with a single belief: Indian homes deserve world-class design,
              rooted in Indian living. We design for festivals, for joint families, for
              puja rooms and pickle jars — without compromising an inch on luxury or craft.
            </p>
            <p className="mt-4 text-[#6b5b44] leading-relaxed">
              Today, our studio of 40+ architects, designers and master craftsmen has
              delivered over 350 homes across India — from compact Mumbai studios to
              sprawling Delhi villas. Every home is a bespoke conversation between
              client, context and craft.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { k: "Awards", v: "28 National & International" },
                { k: "In-house", v: "40+ designers & craftsmen" },
                { k: "Warranty", v: "10 years on all woodwork" },
                { k: "Coverage", v: "42 cities across India" },
              ].map((b) => (
                <div key={b.k} className="glass rounded-2xl p-5">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#6b5b44]">{b.k}</div>
                  <div className="font-display text-lg text-[#141414] mt-2">{b.v}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-3 mt-10 text-sm uppercase tracking-[0.2em] font-medium text-[#141414] hover:text-[#c9a961] transition-colors">
              Meet the full team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
