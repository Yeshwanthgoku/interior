import { useState } from "react";

export default function Consultation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    homeType: "Apartment",
    budget: "₹10L – ₹25L",
    rooms: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", city: "", homeType: "Apartment", budget: "₹10L – ₹25L", rooms: "", message: "" });
    }, 3500);
  };

  return (
    <section id="consultation" className="relative py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 parallax-wrap">
        <img
          src="https://images.pexels.com/photos/6920446/pexels-photo-6920446.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800"
          className="parallax-img absolute inset-0 w-full h-full object-cover"
          alt="Interior workspace"
        />
        <div className="absolute inset-0 bg-[#141414]/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="glass rounded-3xl p-8 lg:p-14">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 reveal">
              <div className="eyebrow">Free Consultation</div>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-[1.05] text-[#141414]">
                Let's design
                <br />
                <span className="italic text-[#6b5b44]">your forever home.</span>
              </h2>
              <p className="mt-6 text-[#6b5b44] leading-relaxed">
                Book a complimentary 45-minute consultation with one of our senior
                designers. We'll walk through your vision, your budget, and your
                timeline — and share how UrbanNest can bring it all to life.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { icon: "📞", t: "Call us", s: "+91 98765 43210" },
                  { icon: "✉️", t: "Email", s: "hello@urbannest.in" },
                  { icon: "📍", t: "Studio", s: "Bandra West, Mumbai" },
                ].map((i) => (
                  <div key={i.t} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c9a961]/15 flex items-center justify-center text-xl">
                      {i.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-[#6b5b44]">{i.t}</div>
                      <div className="font-medium text-[#141414]">{i.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={onSubmit} className="lg:col-span-3 space-y-5 reveal reveal-delay-2">
              {submitted ? (
                <div className="rounded-2xl bg-[#c9a961]/15 border border-[#c9a961] p-10 text-center">
                  <div className="text-4xl mb-3">✨</div>
                  <div className="font-display text-2xl text-[#141414]">Thank you!</div>
                  <p className="text-[#6b5b44] mt-2">
                    We've received your request. A senior designer will reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs uppercase tracking-[0.2em] text-[#6b5b44]">Full Name</label>
                      <input required name="name" value={form.name} onChange={onChange} className="mt-2 w-full bg-transparent border-b border-[#141414]/20 py-3 focus:border-[#c9a961] outline-none transition-colors text-[#141414]" placeholder="Ananya Sharma" />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-[0.2em] text-[#6b5b44]">Phone</label>
                      <input required name="phone" value={form.phone} onChange={onChange} className="mt-2 w-full bg-transparent border-b border-[#141414]/20 py-3 focus:border-[#c9a961] outline-none transition-colors text-[#141414]" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs uppercase tracking-[0.2em] text-[#6b5b44]">Email</label>
                      <input required type="email" name="email" value={form.email} onChange={onChange} className="mt-2 w-full bg-transparent border-b border-[#141414]/20 py-3 focus:border-[#c9a961] outline-none transition-colors text-[#141414]" placeholder="you@email.com" />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-[0.2em] text-[#6b5b44]">City</label>
                      <input required name="city" value={form.city} onChange={onChange} className="mt-2 w-full bg-transparent border-b border-[#141414]/20 py-3 focus:border-[#c9a961] outline-none transition-colors text-[#141414]" placeholder="Mumbai" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs uppercase tracking-[0.2em] text-[#6b5b44]">Home Type</label>
                      <select name="homeType" value={form.homeType} onChange={onChange} className="mt-2 w-full bg-transparent border-b border-[#141414]/20 py-3 focus:border-[#c9a961] outline-none transition-colors text-[#141414]">
                        {["Apartment","Villa","Penthouse","Independent House","Studio"].map((o)=>(<option key={o}>{o}</option>))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-[0.2em] text-[#6b5b44]">Budget</label>
                      <select name="budget" value={form.budget} onChange={onChange} className="mt-2 w-full bg-transparent border-b border-[#141414]/20 py-3 focus:border-[#c9a961] outline-none transition-colors text-[#141414]">
                        {["Under ₹10L","₹10L – ₹25L","₹25L – ₹50L","₹50L – ₹1Cr","₹1Cr+"].map((o)=>(<option key={o}>{o}</option>))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[#6b5b44]">Rooms to design</label>
                    <input name="rooms" value={form.rooms} onChange={onChange} className="mt-2 w-full bg-transparent border-b border-[#141414]/20 py-3 focus:border-[#c9a961] outline-none transition-colors text-[#141414]" placeholder="e.g. Living room, master bedroom, kitchen" />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-[#6b5b44]">Tell us about your vision</label>
                    <textarea name="message" value={form.message} onChange={onChange} rows={3} className="mt-2 w-full bg-transparent border-b border-[#141414]/20 py-3 focus:border-[#c9a961] outline-none transition-colors text-[#141414] resize-none" placeholder="Style preferences, inspirations, any specific requirements…" />
                  </div>

                  <button type="submit" className="btn-gold w-full justify-center mt-4">
                    Book My Free Consultation
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>
                  <p className="text-xs text-[#6b5b44] text-center">
                    No spam. No obligation. Just a friendly design conversation.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
