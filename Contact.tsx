export default function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-40 bg-[#f6f1e8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="eyebrow justify-center">Visit Our Studio</div>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl leading-[1.05]">
            Come see the <span className="italic text-[#6b5b44]">magic</span>
            <br />in person.
          </h2>
          <p className="mt-6 text-[#6b5b44]">
            Our flagship experience studio in Bandra — walk through full-scale kitchen,
            bedroom and living room installations, feel the materials, meet the team.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 glass rounded-3xl p-8 reveal">
            <h3 className="font-display text-2xl text-[#141414] mb-6">Get in touch</h3>
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  t: "Flagship Studio",
                  s: "2nd Floor, Hill Road, Bandra West, Mumbai – 400050",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                  t: "Call",
                  s: "+91 98765 43210",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  ),
                  t: "Email",
                  s: "hello@urbannest.in",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  ),
                  t: "Hours",
                  s: "Mon – Sat · 10:00 AM – 7:00 PM",
                },
              ].map((i) => (
                <div key={i.t} className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#c9a961]/15 flex items-center justify-center text-[#c9a961] shrink-0">
                    {i.icon}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#6b5b44]">{i.t}</div>
                    <div className="text-[#141414] mt-1">{i.s}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-[#c9a961]/20">
              <div className="text-xs uppercase tracking-[0.2em] text-[#6b5b44] mb-3">Also in</div>
              <div className="flex flex-wrap gap-2">
                {["Delhi NCR","Bengaluru","Hyderabad","Pune","Chennai","Ahmedabad","Jaipur","Chandigarh"].map((c)=>(
                  <span key={c} className="px-3 py-1.5 rounded-full bg-white/70 text-xs text-[#141414]">{c}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 reveal reveal-delay-2">
            <div className="rounded-3xl overflow-hidden border border-[#c9a961]/20 h-[500px] lg:h-full min-h-[500px] relative">
              <iframe
                title="UrbanNest Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0186945107787!2d72.8296!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b88b5f7a5d%3A0x0!2sBandra%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
