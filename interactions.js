// interactions.js
document.addEventListener('DOMContentLoaded', () => {
    
    // Main CTA Button
    document.getElementById('cta-button').addEventListener('click', () => {
        Swal.fire({
            title: 'ACCESS RESTRICTED',
            text: 'The Purrlight Genesis Shop is currently in invite-only beta. Join the waitlist to get notified.',
            icon: 'warning',
            input: 'email',
            inputPlaceholder: 'Enter your email address',
            showCancelButton: true,
            confirmButtonText: 'Join Waitlist',
            cancelButtonText: 'Close',
            customClass: {
                popup: 'purr-modal',
                confirmButton: 'purr-confirm'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'VERIFIED',
                    text: `You have been added to the matrix: ${result.value}`,
                    icon: 'success',
                    customClass: { popup: 'purr-modal', confirmButton: 'purr-confirm' }
                });
            }
        });
    });

    // Login Link
    document.getElementById('login-btn').addEventListener('click', (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'AUTHENTICATE',
            html: `
                <input type="text" id="login" class="swal2-input" placeholder="Username / ID">
                <input type="password" id="password" class="swal2-input" placeholder="Passkey">
            `,
            confirmButtonText: 'Sign In',
            focusConfirm: false,
            customClass: { popup: 'purr-modal', confirmButton: 'purr-confirm' }
        });
    });

    // Add to Cart Buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const itemName = btn.getAttribute('data-item');
            
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                customClass: { popup: 'purr-modal' }
            });

            Toast.fire({
                icon: 'success',
                title: `${itemName} added to your cargo.`
            });
        });
    });
});
