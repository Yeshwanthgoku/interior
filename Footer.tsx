export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-[#c9a961] flex items-center justify-center">
                <span className="font-display text-[#c9a961] text-2xl leading-none">U</span>
              </div>
              <div>
                <div className="font-display text-2xl text-white">UrbanNest</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/60">Interiors</div>
              </div>
            </div>
            <p className="mt-6 text-white/60 max-w-md leading-relaxed">
              India's most trusted premium interior design studio. Bespoke homes,
              crafted with obsessive attention to detail.
            </p>

            <div className="mt-8 flex gap-3">
              {[
                { label: "Instagram", path: "M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-3.5a1 1 0 110 2 1 1 0 010-2z" },
                { label: "Facebook", path: "M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" },
                { label: "Pinterest", path: "M12 2a10 10 0 00-3.64 19.32c-.08-.8-.16-2.03.03-2.9.18-.8 1.13-5.1 1.13-5.1s-.29-.58-.29-1.43c0-1.34.78-2.34 1.75-2.34.83 0 1.23.62 1.23 1.36 0 .83-.53 2.07-.8 3.22-.23.96.48 1.74 1.42 1.74 1.71 0 3.02-1.8 3.02-4.4 0-2.3-1.66-3.91-4.03-3.91-2.75 0-4.36 2.06-4.36 4.19 0 .83.32 1.72.72 2.2.08.1.09.18.07.28-.07.3-.24.96-.27 1.1-.04.17-.14.2-.32.12-1.2-.56-1.95-2.3-1.95-3.7 0-3.02 2.19-5.79 6.32-5.79 3.31 0 5.89 2.36 5.89 5.51 0 3.29-2.07 5.93-4.95 5.93-.97 0-1.88-.5-2.2-1.1l-.6 2.28c-.22.83-.8 1.87-1.2 2.5A10 10 0 1012 2z" },
                { label: "YouTube", path: "M23.5 6.2a3 3 0 00-2.11-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.39.58A3 3 0 00.5 6.2 31.25 31.25 0 000 12a31.25 31.25 0 00.5 5.8 3 3 0 002.11 2.12c1.89.58 9.39.58 9.39.58s7.5 0 9.39-.58a3 3 0 002.11-2.12A31.25 31.25 0 0024 12a31.25 31.25 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full border border-white/15 hover:border-[#c9a961] hover:text-[#c9a961] flex items-center justify-center transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#c9a961] mb-5">Services</div>
            <ul className="space-y-3 text-white/70">
              {["Full Home Interiors","Modular Kitchens","Bedroom & Wardrobes","Living & Dining","3D Visualisation","Renovation"].map((l)=>(
                <li key={l}><a href="#services" className="hover:text-[#c9a961] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#c9a961] mb-5">Studio</div>
            <ul className="space-y-3 text-white/70">
              {["About Us","Portfolio","Testimonials","Careers","Press & Media","Contact"].map((l)=>(
                <li key={l}><a href="#about" className="hover:text-[#c9a961] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© 2026 UrbanNest Interiors Pvt. Ltd. · Crafted with care in Mumbai.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c9a961]">Privacy</a>
            <a href="#" className="hover:text-[#c9a961]">Terms</a>
            <a href="#" className="hover:text-[#c9a961]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
