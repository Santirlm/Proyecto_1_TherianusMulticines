import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

gsap.registerPlugin(ScrollTrigger);

// FECHAS
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".date-btn", {
    y: 40,
    opacity: 0,
    duration: 0.1,
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
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    x: +100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});


// SESIONES POSTER
document.querySelectorAll(".movie-poster").forEach(poster => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: poster,
      start: "top 60%",
      toggleActions: "play reverse play reverse"
    }
  });

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

// SESIONES TITULO
document.querySelectorAll(".movie-title").forEach(title => {
  title.innerHTML = title.textContent
    .split("")
    .map(char => `<span>${char === " " ? "&nbsp;" : char}</span>`)
    .join("");

  gsap.from(title.querySelectorAll("span"), {
    opacity: 0,
    y: 20,
    duration: 0.3,
    stagger: 0.03,
    ease: "power2.out"
  });
});