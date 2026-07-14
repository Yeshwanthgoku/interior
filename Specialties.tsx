export default function Specialties() {
  const sections = [
    {
      id: "kitchen",
      eyebrow: "Kitchen Designs",
      title: "Kitchens engineered for the Indian way of cooking.",
      desc: "Modular layouts, heavy-duty hardware, granite & quartz counters, dedicated masala zones and soft-close Indian cabinetry — we design kitchens that handle tadkas, tandoors and everyday life with equal grace.",
      img: "https://images.pexels.com/photos/7148841/pexels-photo-7148841.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
      features: ["L-shaped · Parallel · Island layouts", "Soft-close Hettich hardware", "Quartz / granite counters", "Built-in appliance integration"],
    },
    {
      id: "bedroom",
      eyebrow: "Bedroom Designs",
      title: "Bedrooms that whisper luxury.",
      desc: "Upholstered headboards, ambient cove lighting, walk-in wardrobes and serene palettes. Every bedroom we design becomes a sanctuary — a place to truly unwind after the chaos of the day.",
      img: "https://images.pexels.com/photos/6782578/pexels-photo-6782578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
      features: ["Custom walk-in wardrobes", "Ambient & reading lighting", "Premium upholstery", "Acoustic isolation"],
      reverse: true,
    },
    {
      id: "living",
      eyebrow: "Living Room Designs",
      title: "Living rooms made for Indian hospitality.",
      desc: "From intimate family rooms to expansive entertaining lounges, our living rooms balance Indian warmth with modern restraint — layered textures, statement art, and seating that invites long conversations.",
      img: "https://images.pexels.com/photos/7031722/pexels-photo-7031722.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
      features: ["Bespoke sofas & joinery", "Curated art & artefacts", "Acoustic treatment", "Integrated home entertainment"],
    },
  ];

  return (
    <section className="relative bg-[#f6f1e8]">
      {sections.map((s, idx) => (
        <div
          key={s.id}
          id={s.id}
          className={`py-20 lg:py-28 ${idx % 2 === 0 ? "bg-[#f6f1e8]" : "bg-[#efe7d7]"}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${s.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="reveal relative">
                <div className="parallax-wrap rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[5/6] shadow-2xl">
                  <img src={s.img} alt={s.title} className="parallax-img w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-5 hidden md:block glass rounded-2xl px-5 py-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#6b5b44]">Starting at</div>
                  <div className="font-display text-2xl text-[#141414]">₹8L*</div>
                  <div className="text-[10px] text-[#6b5b44]">*10x10 ft. approx</div>
                </div>
              </div>

              <div className="reveal reveal-delay-2">
                <div className="eyebrow">{s.eyebrow}</div>
                <h3 className="mt-4 font-display text-4xl lg:text-5xl leading-[1.05]">
                  {s.title}
                </h3>
                <p className="mt-6 text-[#6b5b44] leading-relaxed text-lg">{s.desc}</p>

                <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#141414]">
                      <span className="mt-1 w-4 h-4 rounded-full border border-[#c9a961] flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a961]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 mt-10 px-6 py-3 border border-[#141414] text-[#141414] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#141414] hover:text-white transition-all"
                >
                  Design my {s.id}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
