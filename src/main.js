import './style.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ markers: false });

 // Activamos el plugin de scroll 
        gsap.registerPlugin(ScrollTrigger);

        // Instanciamos los elementos del HTML que vamos a manipular
        const audioClic = document.getElementById('audio-boton');
        const musica = document.getElementById('musica-fondo');
        const btnEntrar = document.getElementById('btn-entrar');
        const cortinas = document.getElementById('cortinas');

        // Forzamos que la web esté oculta al cargar
        gsap.set("#contenido-principal", { opacity: 0 });

        // CUando le das al boton:
        btnEntrar.addEventListener('click', () => {
            
            // TEMA AUDIOS
            if (audioClic) {
                audioClic.play().catch(e => console.log("Aviso: Falta el mp3 del clic"));
                
                // Al darle clic empieza la musica de fondo
                audioClic.addEventListener('ended', () => {
                    if (musica) musica.play().catch(e => console.log("Aviso: Falta la música"));
                }, { once: true });
            } else if (musica) {
                // Si no hay clic, se pone la musica directamente
                musica.play().catch(e => console.log("Aviso: Falta la música"));
            }

            // TEMA ANIMACIONES
            // El boton de Entrar desaparece
            gsap.to(btnEntrar, { opacity: 0, duration: 0.3, onComplete: () => btnEntrar.style.display = 'none' });

            // Se abre la cortina hasta el final de la pantalla
            gsap.to("#cortina-izq", { x: "-100%", duration: 5, ease: "power3.inOut" });
            gsap.to("#cortina-der", { x: "100%", duration: 5, ease: "power3.inOut", onComplete: () => {
                // Cuando terminan de abrirse
                cortinas.style.display = 'none'; // Se borra el telon del HTML
                
                // La pagina vuelve a tener scroll
                document.body.classList.remove('overflow-hidden');
                document.body.classList.add('overflow-x-hidden');
            }});

            // Aparece la web con FadeIn de abajo a arriba
            // Con el delay de 3s se espera a que el telón esté abierto para iluminarse.
            gsap.fromTo("#contenido-principal", 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 5, delay: 5, ease: "power2.out" }
            );
        });

          // Animación infinita del Carrusel
        gsap.to("#carrusel", {
            x: "-50%",
            duration: 12,
            repeat: -1,
            yoyo: true,
            ease: "linear"
        });
      
                // Donde la web aparece con FadeIn
            gsap.fromTo("#contenido-principal", 
                { opacity: 0, y: 50 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.5, 
                    delay: 0.5, 
                    ease: "power2.out",
                    onComplete: () => ScrollTrigger.refresh() // Refrescar

                }
            );

             // La animación en cascada para la cartelera
            gsap.from(".pelicula", {
                scrollTrigger: {
                    trigger: "main",
                    start: "top 70%", // Se activa cuando el main ocupa el 70% de la pantalla
                    toggleActions: "play none none reverse"
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.5, // Tiempo de espera entre cada caja (cascada)
                ease: "back.out(1.7)" // Efecto de rebote
            });


             const bocadillos = document.querySelectorAll('.bocadillo');
        bocadillos.forEach((bocadillo, index) => {
            gsap.fromTo(bocadillo, 
                { scale: 0, opacity: 0, y: 50 }, // Estado inicial
                {
                    scrollTrigger: {
                        trigger: "#seccion-comentarios",
                        start: "top 60%", // Aparecen al entrar
                        end: "bottom 40%", // Desaparecen al salir
                        toggleActions: "play reverse play reverse", // Animación bidireccional
                    },
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 1, // Retraso escalonado
                    ease: "elastic.out(1, 0.5)"
                }
            );
        });
