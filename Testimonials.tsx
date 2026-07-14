const testimonials = [
  {
    name: "Priya & Rohan Kapoor",
    city: "Mumbai",
    role: "3BHK, Bandra West",
    text: "UrbanNest transformed our 15-year-old apartment into something we see in design magazines. The attention to detail, the craftsmanship, the calm professionalism — they made the entire journey feel effortless.",
    initials: "PK",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    city: "Delhi",
    role: "Villa, Vasant Vihar",
    text: "We interviewed six studios before choosing UrbanNest. Best decision we made. They understood our Indian family's needs — the puja room, the large dining for festivals, the storage — and made it all look impossibly chic.",
    initials: "AS",
    rating: 5,
  },
  {
    name: "Vikram & Neha Reddy",
    city: "Bengaluru",
    role: "4BHK, Whitefield",
    text: "The 3D walkthrough sold us, but the delivery exceeded it. Our modular kitchen is a dream to cook in, and the kids' rooms are pure magic. On time, on budget, on point.",
    initials: "VR",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    city: "Chennai",
    role: "Penthouse, Nungambakkam",
    text: "From the very first consultation I knew I was in good hands. They translated my vague Pinterest mood board into a cohesive, luxurious home that feels unmistakably ours.",
    initials: "MI",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 lg:py-40 bg-[#f6f1e8] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#c9a961]/10 blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 reveal">
          <div>
            <div className="eyebrow">Client Love</div>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-[1.05] max-w-2xl">
              Homes that make
              <br />
              <span className="italic text-[#6b5b44]">our clients smile.</span>
            </h2>
          </div>
          <div className="flex items-center gap-6 reveal reveal-delay-2">
            <div className="text-center">
              <div className="font-display text-5xl text-[#141414]">4.9</div>
              <div className="flex gap-1 mt-1 justify-center text-[#c9a961]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#6b5b44] mt-1">Google Reviews</div>
            </div>
            <div className="h-16 w-[1px] bg-[#c9a961]/40" />
            <div className="text-center">
              <div className="font-display text-5xl text-[#141414]">350+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#6b5b44] mt-3">Happy families</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal reveal-delay-${(i % 4) + 1} relative glass rounded-3xl p-8 lg:p-10 hover-lift`}
            >
              <svg className="absolute top-6 right-6 w-10 h-10 text-[#c9a961]/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="flex gap-1 mb-5 text-[#c9a961]">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-display text-xl lg:text-2xl leading-snug text-[#141414]">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c9a961] to-[#8b7355] flex items-center justify-center text-white font-display text-xl">
                  {t.initials}
                </div>
                <div>
                  <div className="font-medium text-[#141414]">{t.name}</div>
                  <div className="text-sm text-[#6b5b44]">{t.role} · {t.city}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-[#6b5b44]/60 reveal">
          <span className="text-xs uppercase tracking-[0.3em]">As featured in</span>
          {["Architectural Digest", "Elle Decor", "House & Garden", "Vogue Living", "GQ India"].map((m) => (
            <span key={m} className="font-display text-xl italic opacity-70 hover:opacity-100 transition-opacity">{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
