import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animación inicial
gsap.from(".pelicula-img", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
});

gsap.from(".pelicula-info h1", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.2,
});

gsap.from(".pelicula-info p", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.4,
});

gsap.from(".valoracion", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.6,
});

// ScrollTrigger básico para el resto
gsap.utils.toArray(".ficha-item, .recomendada, .comentario, .actor-item").forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top center",
            scrub: 1,
        },
        y: 40,
        opacity: 0,
    });
});