// engine3d.js
document.addEventListener('DOMContentLoaded', () => {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff007f, // Purr Pink
        backgroundColor: 0x030305, // Deep Dark
        points: 12.00,
        maxDistance: 22.00,
        spacing: 18.00
    });
});
