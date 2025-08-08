// Typewriter Effect
const typewriter = document.getElementById('typewriter');
const text = "Transforming Data into Dynamic Solutions";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 1);
    } else {
        counter.innerText = target;
    }
});

// Logo Carousel (Auto-Scroll)
const carousel = document.querySelector('.logo-carousel');
let scrollAmount = 0;

function autoScroll() {
    scrollAmount += 1;
    if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(autoScroll);
}

autoScroll();