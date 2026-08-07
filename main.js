// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize 3D Background
    if (typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00, // Scales down well for mobile
            color: 0xff007f, 
            backgroundColor: 0x030305, 
            points: window.innerWidth < 768 ? 8.00 : 12.00, // Less points on mobile for performance
            maxDistance: 22.00,
            spacing: 18.00
        });
    }

    // 2. GSAP Animations (If ScrollTrigger is loaded)
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".hero-title", 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
        gsap.fromTo(".hero-subtitle, .btn-glow", 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.3 }
        );

        gsap.utils.toArray('.gs-reveal').forEach((elem) => {
            gsap.fromTo(elem, 
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%", 
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }
});
