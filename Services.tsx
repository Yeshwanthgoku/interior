const services = [
  {
    num: "01",
    title: "Full Home Interiors",
    desc: "End-to-end turnkey interiors — from concept to move-in ready. We handle every detail, every finish.",
    icon: "🏡",
  },
  {
    num: "02",
    title: "Modular Kitchens",
    desc: "Bespoke Indian kitchens engineered for the way you cook — soft-close fittings, premium laminates, quartz counters.",
    icon: "🍳",
  },
  {
    num: "03",
    title: "3D Visualisation",
    desc: "Photorealistic walkthroughs of your home before a single brick is moved. Walk through your future today.",
    icon: "📐",
  },
  {
    num: "04",
    title: "Bedroom & Wardrobes",
    desc: "Serene, clutter-free bedrooms with custom walk-in wardrobes and mood-lit ambience.",
    icon: "🛏️",
  },
  {
    num: "05",
    title: "Living & Dining",
    desc: "Showstopping living rooms and dining spaces designed for the Indian way of entertaining.",
    icon: "🛋️",
  },
  {
    num: "06",
    title: "Renovation & Makeover",
    desc: "Breathe new life into existing spaces with intelligent layouts, premium materials and modern aesthetics.",
    icon: "✨",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-40 bg-[#f6f1e8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 reveal">
          <div>
            <div className="eyebrow">What We Do</div>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-[1.05] max-w-2xl">
              A complete studio for
              <br />
              <span className="italic text-[#6b5b44]">every room of your home.</span>
            </h2>
          </div>
          <p className="max-w-md text-[#6b5b44] leading-relaxed reveal reveal-delay-2">
            From the first sketch to the final cushion, our in-house architects, designers
            and craftsmen deliver homes you'll never want to leave.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative glass rounded-3xl p-10 hover-lift cursor-pointer overflow-hidden`}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#c9a961]/10 blur-2xl group-hover:bg-[#c9a961]/30 transition-all duration-700" />
              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div className="text-4xl">{s.icon}</div>
                  <span className="font-display text-5xl text-[#c9a961]/30 group-hover:text-[#c9a961] transition-colors">
                    {s.num}
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl mb-3 text-[#141414]">
                  {s.title}
                </h3>
                <p className="text-[#6b5b44] leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#141414] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
