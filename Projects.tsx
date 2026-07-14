import { useState } from "react";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "living", label: "Living Rooms" },
  { id: "bedroom", label: "Bedrooms" },
  { id: "kitchen", label: "Kitchens" },
  { id: "bathroom", label: "Bathrooms" },
];

const projects = [
  {
    id: 1,
    title: "Aurora Penthouse",
    location: "Bandra, Mumbai",
    category: "living",
    size: "tall",
    img: "https://images.pexels.com/photos/30554297/pexels-photo-30554297.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
    year: "2024",
  },
  {
    id: 2,
    title: "Serene Master Suite",
    location: "Vasant Vihar, Delhi",
    category: "bedroom",
    size: "wide",
    img: "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    year: "2024",
  },
  {
    id: 3,
    title: "Marble Couture Kitchen",
    location: "Koramangala, Bengaluru",
    category: "kitchen",
    size: "normal",
    img: "https://images.pexels.com/photos/20348120/pexels-photo-20348120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    year: "2024",
  },
  {
    id: 4,
    title: "Ivory Lounge",
    location: "Jubilee Hills, Hyderabad",
    category: "living",
    size: "normal",
    img: "https://images.pexels.com/photos/7031732/pexels-photo-7031732.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    year: "2023",
  },
  {
    id: 5,
    title: "Zen Bedroom Retreat",
    location: "Emaar, Gurugram",
    category: "bedroom",
    size: "tall",
    img: "https://images.pexels.com/photos/8135505/pexels-photo-8135505.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
    year: "2024",
  },
  {
    id: 6,
    title: "Open Plan Chef's Kitchen",
    location: "Phoenix Palladium, Mumbai",
    category: "kitchen",
    size: "wide",
    img: "https://images.pexels.com/photos/8082304/pexels-photo-8082304.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    year: "2023",
  },
  {
    id: 7,
    title: "Spa-Like Master Bath",
    location: "Lutyens' Delhi",
    category: "bathroom",
    size: "normal",
    img: "https://images.pexels.com/photos/7166641/pexels-photo-7166641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    year: "2024",
  },
  {
    id: 8,
    title: "Cozy Evening Living",
    location: "Whitefield, Bengaluru",
    category: "living",
    size: "normal",
    img: "https://images.pexels.com/photos/7195570/pexels-photo-7195570.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    year: "2023",
  },
  {
    id: 9,
    title: "Modern Marble Bath",
    location: "Powai, Mumbai",
    category: "bathroom",
    size: "tall",
    img: "https://images.pexels.com/photos/8142049/pexels-photo-8142049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
    year: "2024",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 lg:py-40 bg-[#141414] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, #c9a961 1px, transparent 1px), radial-gradient(circle at 80% 70%, #c9a961 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 reveal">
          <div>
            <div className="eyebrow">Portfolio</div>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-[1.05] max-w-2xl">
              A curated selection of
              <br />
              <span className="italic gold-text">recently crafted homes.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 reveal reveal-delay-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all ${
                  filter === c.id
                    ? "bg-[#c9a961] text-[#141414]"
                    : "bg-white/5 text-white/70 border border-white/10 hover:border-[#c9a961] hover:text-[#c9a961]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl cursor-pointer ${
                p.size === "tall"
                  ? "col-span-12 md:col-span-4 aspect-[3/4]"
                  : p.size === "wide"
                  ? "col-span-12 md:col-span-8 aspect-[16/9]"
                  : "col-span-12 md:col-span-4 aspect-square"
              }`}
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.25em] text-white/80 bg-black/30 backdrop-blur px-3 py-1.5 rounded-full border border-white/15">
                {p.year}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[#c9a961] text-xs uppercase tracking-[0.25em] mb-2">{p.location}</div>
                <h3 className="font-display text-2xl lg:text-3xl text-white">{p.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  View project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a961" strokeWidth="2">
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
