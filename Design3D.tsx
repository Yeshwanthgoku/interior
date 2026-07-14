export default function Design3D() {
  const features = [
    "Photorealistic walkthroughs in 4K",
    "Walk through your home before we build it",
    "Unlimited design iterations until perfect",
    "Accurate material & finish matching",
  ];

  return (
    <section className="relative py-28 lg:py-40 bg-[#141414] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="eyebrow">3D Design Studio</div>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-[1.05]">
              See your dream home
              <br />
              <span className="italic gold-text">before it's built.</span>
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              Our 3D visualisation studio produces cinematic, photorealistic renders
              of every corner of your home — so you know exactly what you're getting.
              No surprises, only delight.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-white/85">
                  <span className="mt-1 w-5 h-5 rounded-full border border-[#c9a961] flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c9a961" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-gold mt-10">
              Request 3D Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#c9a961]/30 to-transparent blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="/images/3d-render.jpg"
                  alt="3D interior render"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-5 glass-dark rounded-full px-4 py-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c9a961] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white">Live 3D Walkthrough</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 glass-dark rounded-2xl p-5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">Project</div>
                    <div className="font-display text-lg text-white mt-1">Aurora Penthouse · Living Room</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">Resolution</div>
                    <div className="font-display text-lg text-[#c9a961] mt-1">4K · 60fps</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block glass-dark rounded-2xl p-5 w-56">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">Design Stage</div>
                <div className="mt-3 space-y-2">
                  {[
                    { l: "Concept", v: 100 },
                    { l: "3D Model", v: 100 },
                    { l: "Textures", v: 85 },
                    { l: "Lighting", v: 70 },
                  ].map((b) => (
                    <div key={b.l}>
                      <div className="flex justify-between text-[10px] text-white/80">
                        <span>{b.l}</span>
                        <span className="text-[#c9a961]">{b.v}%</span>
                      </div>
                      <div className="mt-1 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#c9a961]" style={{ width: `${b.v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
