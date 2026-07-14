export default function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "We begin with a deep conversation — your lifestyle, your dreams, your budget. A site visit follows to understand the bones of your space." },
    { n: "02", t: "Design", d: "Our senior designers craft mood boards, layouts and material palettes tailored to you. Revisions until every corner sings." },
    { n: "03", t: "Visualise", d: "Photorealistic 3D walkthroughs bring every corner to life. Walk through your future home — before a single nail is hammered." },
    { n: "04", t: "Deliver", d: "Our in-house craftsmen execute with obsessive detail. Dedicated project manager. Weekly updates. Move-in ready, on schedule." },
  ];

  return (
    <section className="relative py-28 lg:py-40 bg-[#f6f1e8] border-t border-[#c9a961]/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal">
          <div className="eyebrow justify-center">Our Process</div>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-[1.05]">
            Four simple steps
            <br />
            <span className="italic text-[#6b5b44]">to your dream home.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#c9a961]/40 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.n} className={`reveal reveal-delay-${i + 1} relative`}>
              <div className="relative glass rounded-3xl p-8 h-full hover-lift">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-6xl text-[#c9a961]/30">{s.n}</span>
                  <span className="w-4 h-4 rounded-full bg-[#c9a961] relative z-10 hidden lg:block mt-4" />
                </div>
                <h3 className="font-display text-2xl text-[#141414]">{s.t}</h3>
                <p className="mt-3 text-sm text-[#6b5b44] leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
