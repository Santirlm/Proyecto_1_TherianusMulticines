import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

gsap.registerPlugin(ScrollTrigger);

// PAGINA ENTERA
const tl = gsap.timeline();

tl.from("nav", { y: -80, opacity: 0, duration: 0.6, ease: "power3.out" })
  .from(".date-strip", { opacity: 0, duration: 0.4 }, "-=0.2")

// FECHAS
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".date-btn", {
    y: 40,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
    stagger: 0.10,
    clearProps: "all"
  });
});

// SESIONES INFORMACION
document.querySelectorAll(".movie-info").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%"
    },
    x: +100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});


// SESIONES POSTER
document.querySelectorAll(".movie-poster").forEach(poster => {
  tl.from(poster, {
    clipPath: "inset(0 100% 0 0)",
    duration: 0.8,
    ease: "power3.out"
  })
  .from(poster.querySelector("img"), {
    scale: 1.3,
    duration: 1,
    ease: "power2.out"
  }, "<");
});