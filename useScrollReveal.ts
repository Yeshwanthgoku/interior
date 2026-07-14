import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useParallax() {
  useEffect(() => {
    const imgs = document.querySelectorAll<HTMLElement>(".parallax-img");
    if (!imgs.length) return;
    const onScroll = () => {
      const vh = window.innerHeight;
      imgs.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const delta = (center - vh / 2) / vh;
        img.style.transform = `translateY(${delta * 60}px) scale(1.12)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}
