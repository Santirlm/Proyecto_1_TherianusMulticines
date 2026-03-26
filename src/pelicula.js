import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// TIMELINE ENCADENADA al cargar
const tlInicio = gsap.timeline();

tlInicio
    .from(".pelicula-img", {
        x: -150,
        opacity: 0,
        scale: 0.95,
        duration: 1.4,
        ease: "power3.out",
    })
    .from(".pelicula-info h1", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    }, "-=0.8")
    .from(".pelicula-info p", {
        x: 100,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
    }, "-=0.6")
    .from(".valoracion", {
        x: 100,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
    }, "-=0.6");

// CONTADOR ANIMADO en la valoración
const valoracionEl = document.querySelector(".valoracion .font-cinzel");
if (valoracionEl) {
    const valorFinal = parseFloat(valoracionEl.textContent);
    const contador = { val: 0 };
    gsap.to(contador, {
        val: valorFinal,
        duration: 2,
        delay: 1.2,
        ease: "power2.out",
        onUpdate: () => {
            valoracionEl.textContent = contador.val.toFixed(1);
        }
    });
}

// PARALLAX en la imagen principal al hacer scroll
gsap.to(".pelicula-img img", {
    scrollTrigger: {
        trigger: ".pelicula-img",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
    y: 80,
    ease: "none",
});

// HIGHLIGHT en la frase icónica
gsap.fromTo(".frase-texto",
    {
        backgroundSize: "0% 2px",
    },
    {
        backgroundSize: "100% 2px",
        scrollTrigger: {
            trigger: ".frase-contenedor",
            start: "top 60%",
            end: "top 20%",
            scrub: 1,
        },
        ease: "none",
    }
);

// FICHA TÉCNICA
gsap.from(".ficha-titulo", {
    scrollTrigger: {
        trigger: ".ficha-titulo",
        start: "top bottom",
        end: "top center",
        scrub: 1,
    },
    y: 40,
    opacity: 0,
    filter: "blur(10px)",
});

gsap.utils.toArray(".ficha-item").forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top center",
            scrub: 1,
        },
        y: 50,
        opacity: 0,
        delay: i * 0.1,
    });
});

// FRASE ICÓNICA
gsap.from(".frase-texto", {
    scrollTrigger: {
        trigger: ".frase-contenedor",
        start: "top bottom",
        end: "top 30%",
        scrub: 1.5,
    },
    opacity: 0,
    scale: 0.9,
    filter: "blur(15px)",
    y: 40,
});

gsap.from(".frase-autor", {
    scrollTrigger: {
        trigger: ".frase-contenedor",
        start: "top 70%",
        end: "top 20%",
        scrub: 1,
    },
    opacity: 0,
    y: 25,
    letterSpacing: "0.5em",
});

// REPARTO
gsap.from(".reparto-titulo", {
    scrollTrigger: {
        trigger: ".reparto-titulo",
        start: "top bottom",
        end: "top center",
        scrub: 1,
    },
    y: 40,
    opacity: 0,
    filter: "blur(10px)",
});

gsap.utils.toArray(".actor-item").forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top center",
            scrub: 1,
        },
        y: 70,
        opacity: 0,
        scale: 0.85,
        rotation: i % 2 === 0 ? -5 : 5,
        delay: i * 0.1,
    });
});

// RECOMENDADAS
gsap.from(".recomendadas-titulo", {
    scrollTrigger: {
        trigger: ".recomendadas-titulo",
        start: "top bottom",
        end: "top center",
        scrub: 1,
    },
    y: 40,
    opacity: 0,
    filter: "blur(10px)",
});

gsap.utils.toArray(".recomendada").forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top center",
            scrub: 1,
        },
        y: 100,
        opacity: 0,
        rotationX: 40,
        transformOrigin: "top center",
        delay: i * 0.15,
    });
});

// COMENTARIOS
gsap.from(".comentarios-titulo", {
    scrollTrigger: {
        trigger: ".comentarios-titulo",
        start: "top bottom",
        end: "top center",
        scrub: 1,
    },
    y: 40,
    opacity: 0,
    filter: "blur(10px)",
});

gsap.utils.toArray(".comentario").forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top center",
            scrub: 1,
        },
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        scale: 0.97,
    });
});
// HOVER en recomendadas - zoom + brillo al pasar el ratón
gsap.utils.toArray(".recomendada").forEach((el) => {
    const img = el.querySelector("img");

    el.addEventListener("mouseenter", () => {
        gsap.to(img, {
            scale: 1.08,
            filter: "brightness(1.2)",
            duration: 0.4,
            ease: "power2.out",
        });
    });

    el.addEventListener("mouseleave", () => {
        gsap.to(img, {
            scale: 1,
            filter: "brightness(1)",
            duration: 0.4,
            ease: "power2.out",
        });
    });
});