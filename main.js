// main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize 3D Background (Vanta)
    if (typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xff007f, 
            backgroundColor: 0x000000, // Background color is overridden by CSS gradient, this just sets the canvas base
            points: window.innerWidth < 768 ? 7.00 : 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        });
    }

    // 2. Beautiful Add to Cart Notifications (MOCK UNTIL SNIPCART IS SETUP)
    let cartCount = 0;
    const cartCounterDisplay = document.querySelector('.snipcart-items-count');

    document.querySelectorAll('.mock-add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update cart number visually
            cartCount++;
            if (cartCounterDisplay) cartCounterDisplay.innerText = cartCount;

            // Trigger beautiful Toast Notification
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: 'rgba(25, 20, 40, 0.95)',
                color: '#fff',
                iconColor: '#00f0ff',
                customClass: { popup: 'glass-toast' }
            });

            Toast.fire({
                icon: 'success',
                title: 'Item added to your cart!'
            });
        });
    });

    // 3. GSAP Animations for Store & Products
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Animate titles
        gsap.fromTo(".section-title", 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
        );

        // Stagger animate product grid items
        gsap.utils.toArray('.product-card').forEach((card, i) => {
            gsap.fromTo(card, 
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    y: 0, opacity: 1, scale: 1, duration: 0.8, 
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Item Detail Page Animations
        const detailImg = document.querySelector('.item-detail .product-img-placeholder');
        const detailInfo = document.querySelector('.item-detail .product-info');
        
        if (detailImg && detailInfo) {
            gsap.fromTo(detailImg, 
                { x: -50, opacity: 0 }, 
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );
            gsap.fromTo(detailInfo.children, 
                { x: 50, opacity: 0 }, 
                { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
            );
        }
    }
});
