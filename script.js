// Toggle mobile menu
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.product-card .btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        alert(`${productName} added to cart!`);
        // You can implement actual cart functionality here
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add accessibility features
document.addEventListener('DOMContentLoaded', function() {
    // Ensure proper keyboard navigation
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(button => {
        button.setAttribute('tabindex', '0');
    });
});