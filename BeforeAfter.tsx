import { useRef, useState } from "react";

export default function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, x)));
  };

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    dragging.current = true;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    update(clientX);
  };

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    update(clientX);
  };

  const onUp = () => {
    dragging.current = false;
  };

  return (
    <section className="relative py-28 lg:py-40 bg-[#f6f1e8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <div className="eyebrow">Transformations</div>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-[1.05]">
              The magic of
              <br />
              <span className="italic text-[#6b5b44]">Before & After.</span>
            </h2>
            <p className="mt-6 text-[#6b5b44] leading-relaxed max-w-lg">
              Every home has a story waiting to be told. Drag the slider to see how we
              reimagined a dated Delhi bedroom into a serene, contemporary retreat —
              without changing a single wall.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { v: "38", l: "Days to complete" },
                { v: "₹18L", l: "Budget delivered" },
                { v: "100%", l: "Client delight" },
              ].map((s) => (
                <div key={s.l} className="border-l border-[#c9a961] pl-4">
                  <div className="font-display text-3xl text-[#141414]">{s.v}</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-[#6b5b44] mt-1">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {["AR","PK","SM","ND"].map((n)=>(
                  <div key={n} className="w-11 h-11 rounded-full bg-[#c9a961]/80 border-2 border-white flex items-center justify-center text-xs font-semibold text-white">
                    {n}
                  </div>
                ))}
              </div>
              <div className="text-sm text-[#141414]">
                <div className="font-medium">Trusted by 350+ Indian families</div>
                <div className="text-[#6b5b44] text-xs">Across 42 cities</div>
              </div>
            </div>
          </div>

          <div
            ref={ref}
            className="reveal reveal-delay-2 ba-slider rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl cursor-ew-resize select-none"
            onMouseDown={onDown}
            onMouseMove={onMove}
            onMouseUp={onUp}
            onMouseLeave={onUp}
            onTouchStart={onDown}
            onTouchMove={onMove}
            onTouchEnd={onUp}
          >
            <img src="/images/before.jpg" alt="Before" className="absolute inset-0 w-full h-full object-cover" />
            <div className="ba-after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
              <img src="/images/after.jpg" alt="After" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="ba-handle" style={{ left: `${pos}%` }}>
              <div className="ba-knob">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M8 7L3 12l5 5M16 7l5 5-5 5" />
                </svg>
              </div>
            </div>
            <div className="absolute top-5 left-5 glass-dark text-white text-xs uppercase tracking-[0.25em] px-3 py-1.5 rounded-full">
              Before
            </div>
            <div className="absolute top-5 right-5 bg-[#c9a961] text-[#141414] text-xs uppercase tracking-[0.25em] px-3 py-1.5 rounded-full font-medium">
              After
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-[10px] uppercase tracking-[0.3em]">
              ← Drag to compare →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
