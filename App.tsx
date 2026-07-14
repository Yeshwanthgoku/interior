import { useEffect } from "react";
import { useScrollReveal, useParallax } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import BeforeAfter from "./components/BeforeAfter";
import Design3D from "./components/Design3D";
import Specialties from "./components/Specialties";
import Testimonials from "./components/Testimonials";
import Consultation from "./components/Consultation";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  useScrollReveal();
  useParallax();

  // Re-apply reveal observer when sections change (e.g., after filtering)
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

  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#141414]">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Projects />
        <BeforeAfter />
        <Design3D />
        <Specialties />
        <About />
        <Testimonials />
        <Consultation />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
