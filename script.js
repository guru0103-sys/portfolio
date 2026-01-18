// Wait for the window to load before starting animations
window.onload = () => {

    // 1. Hero Text Fade-in & Slide-up
    anime({
        targets: 'header h1, header p',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(200), // Each element waits 200ms
        easing: 'easeOutExpo',
        duration: 1200
    });

    // 2. Certification Cards Staggered Pop-in
    anime({
        targets: '.cert-card',
        scale: [0.9, 1],
        opacity: [0, 1],
        delay: anime.stagger(150, {start: 500}), // Starts after 500ms
        easing: 'spring(1, 80, 10, 0)' // A bouncy "engineering" spring effect
    });

    // 3. Hover Effect logic (using Anime.js for smooth scaling)
    const cards = document.querySelectorAll('.cert-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1.0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const waveContainer = document.getElementById('wave');
    
    // Safety Check: Log to console to see if container exists
    if (!waveContainer) {
        console.error("Signal Error: #wave container not found!");
        return;
    }
    // Skill Bar Animation
anime({
    targets: '.fill',
    width: function(el) {
        return el.getAttribute('data-level'); // Pulls value from HTML data-level
    },
    easing: 'easeInOutQuart',
    duration: 2000,
    delay: anime.stagger(200) // Bars fill up one by one
});

    // Create the dots
    for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        waveContainer.appendChild(dot);
    }

    // Animate the dots
    anime({
        targets: '.dot',
        height: ['10px', '50px'],
        opacity: [0.3, 1],
        delay: anime.stagger(50),
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
    });
    
    console.log("Signal Active: Wave animation started.");
});
// Certification entrance animation
anime({
    targets: '.cert-card',
    opacity: [0, 1],
    translateY: [20, 0],
    scale: [0.95, 1],
    delay: anime.stagger(200, {start: 1200}),
    easing: 'easeOutCubic'
});
// Add this to your existing script.js
anime({
    targets: '.project-card',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(200, {start: 1000}), // Delay it to appear after the wave
    easing: 'easeOutQuad',
    duration: 800
});
anime({
    targets: '.bento-item',
    opacity: [0, 1],
    scale: [0.8, 1],
    translateY: [20, 0],
    delay: anime.stagger(100, {start: 500}),
    easing: 'spring(1, 80, 10, 0)'
});
anime({
    targets: '.info-item',
    translateX: [-30, 0],
    opacity: [0, 1],
    delay: anime.stagger(200, {start: 1500}),
    easing: 'easeOutQuad'
});
