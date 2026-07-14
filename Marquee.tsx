export default function Marquee() {
  const items = [
    "Bespoke Interiors",
    "✦",
    "Made in India",
    "✦",
    "350+ Homes Delivered",
    "✦",
    "10 Year Warranty",
    "✦",
    "42 Cities",
    "✦",
    "Award Winning",
    "✦",
  ];
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="bg-[#141414] text-[#c9a961] py-6 overflow-hidden border-y border-[#c9a961]/20">
      <div className="marquee-track flex whitespace-nowrap gap-10 items-center font-display text-3xl lg:text-4xl italic">
        {loop.map((t, i) => (
          <span key={i} className={t === "✦" ? "text-[#c9a961]/50 text-xl" : ""}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
