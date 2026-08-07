// animations.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Nav smooth scroll hook
    document.querySelectorAll('.scroll-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            lenis.scrollTo(target);
        });
    });

    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    const heroTimeline = gsap.timeline();
    heroTimeline.fromTo("#main-title", 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.2 }
    )
    .fromTo(".hero-subtitle", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 
        "-=1"
    )
    .fromTo("#cta-button", 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }, 
        "-=0.5"
    );

    gsap.utils.toArray('.gs-reveal').forEach((elem) => {
        let delay = elem.classList.contains('gs-delay-1') ? 0.2 : 
                    elem.classList.contains('gs-delay-2') ? 0.4 : 0;
        
        gsap.fromTo(elem, 
            { y: 50, opacity: 0 },
            {
                y: 0, 
                opacity: 1, 
                duration: 1, 
                ease: "power3.out",
                delay: delay,
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%", 
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
});
