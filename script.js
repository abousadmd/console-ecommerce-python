const totalSlides = 14;
let currentSlideIndex = 0;
let isAnimating = false;

// DOM Elements
const slidesWrapper = document.getElementById('slides-wrapper');
const progressBar = document.getElementById('progress-bar');
const sideNavList = document.getElementById('side-nav-list');
const currentSlideSpan = document.getElementById('current-slide');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

// Initialize Slides Structure
function initSlides() {
    const allSlidesContent = [
        ...slidesContent,
        ...slides6to10Content,
        ...slides11to14Content
    ];

    for (let i = 0; i < totalSlides; i++) {
        // Create Slide
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.id = `slide-${i + 1}`;
        slide.innerHTML = allSlidesContent[i] || `<div class="content"><h1>Slide ${i + 1}</h1></div>`;

        if (i === 0) {
            slide.classList.add('active');
            gsap.set(slide, { autoAlpha: 1 });
        } else {
            gsap.set(slide, { autoAlpha: 0 });
        }

        slidesWrapper.appendChild(slide);

        // Create Side Nav Item
        const navItem = document.createElement('li');
        navItem.textContent = (i + 1).toString().padStart(2, '0');
        navItem.dataset.index = i;
        if (i === 0) navItem.classList.add('active');

        navItem.addEventListener('click', () => goToSlide(i));
        sideNavList.appendChild(navItem);
    }
    updateUI();

    // Initial Animation for Slide 1
    animateSlide1();

    // Setup Interactions
    setupQuiz(); // Slide 4
    setupCollage(); // Slide 7
    setupGallery(); // Slide 9
    setupGenerator(); // Slide 11
    setupEtSi(); // Slide 12
}

function updateUI() {
    currentSlideSpan.textContent = (currentSlideIndex + 1).toString().padStart(2, '0');

    const progress = (currentSlideIndex / (totalSlides - 1)) * 100;
    progressBar.style.width = `${progress}%`;

    document.querySelectorAll('.side-nav li').forEach((item, index) => {
        if (index === currentSlideIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    btnPrev.disabled = currentSlideIndex === 0;
    btnNext.disabled = currentSlideIndex === totalSlides - 1;
}

function goToSlide(index) {
    if (isAnimating || index === currentSlideIndex || index < 0 || index >= totalSlides) return;

    isAnimating = true;

    const currentSlide = document.getElementById(`slide-${currentSlideIndex + 1}`);
    const nextSlide = document.getElementById(`slide-${index + 1}`);
    const direction = index > currentSlideIndex ? 1 : -1;

    // Transition Out
    gsap.to(currentSlide, {
        autoAlpha: 0,
        xPercent: -20 * direction,
        duration: 0.8,
        ease: "expo.inOut"
    });

    // Transition In
    gsap.fromTo(nextSlide,
        { autoAlpha: 0, xPercent: 20 * direction },
        {
            autoAlpha: 1,
            xPercent: 0,
            duration: 0.8,
            ease: "expo.inOut",
            onComplete: () => {
                currentSlide.classList.remove('active');
                nextSlide.classList.add('active');
                isAnimating = false;
                triggerSlideAnimation(index + 1);
            }
        }
    );

    currentSlideIndex = index;
    updateUI();
}

// Slide-Specific Animations
function triggerSlideAnimation(slideNumber) {
    if (slideNumber === 1) animateSlide1();
    if (slideNumber === 8) animateSlide8();
    if (slideNumber === 10) animateSlide10();
    if (slideNumber === 13) animateSlide13();
    if (slideNumber === 14) animateSlide14();
}

function animateSlide1() {
    const tl = gsap.timeline();
    tl.to(".title-part-1", { opacity: 1, y: -20, duration: 0.5, ease: "power2.out" })
      .to(".title-part-2", { opacity: 1, y: -20, duration: 0.5, ease: "power2.out" }, "-=0.2")
      .to(".img-alex", { opacity: 1, scale: 1, rotation: -2, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3")
      .to(".img-steve", { opacity: 1, scale: 1, rotation: 3, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4")
      .to(".note-imaginer", { opacity: 1, y: -10, duration: 0.5, ease: "power2.out" }, "-=0.2");
}

function animateSlide8() {
    gsap.to("#slide-8 .step-item", { opacity: 1, y: -10, duration: 0.5, stagger: 0.2, ease: "back.out(1.5)" });
    gsap.to("#slide-8 .step-arrow", { opacity: 1, x: 10, duration: 0.3, stagger: 0.2, ease: "power1.out", delay: 0.2 });
    gsap.to("#slide-8 .step-desc", { opacity: 1, y: -10, duration: 0.5, ease: "power2.out", delay: 1 });
}

function animateSlide10() {
    // Basic draw effect for the path (if using DrawSVGPlugin, otherwise just fade)
    gsap.fromTo("#creativity-path", { strokeDashoffset: 1000, strokeDasharray: 1000 }, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" });
    gsap.fromTo("#slide-10 .action-step", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: "back.out(1.5)", delay: 0.5 });
}

function animateSlide13() {
    // Fake SVG draw
    gsap.fromTo("#mistake-path", { strokeDashoffset: 1000, strokeDasharray: 1000 }, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" });
}

function animateSlide14() {
    const tl = gsap.timeline();
    tl.fromTo("#slide-14 .end-word", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.15, ease: "power2.out" })
      .to("#slide-14 .end-quote", { opacity: 1, y: -10, duration: 0.8, ease: "power2.out" }, "+=0.3");
}


// Interactive Setups
function setupQuiz() {
    const btn1 = document.getElementById('btn-text-1');
    const btn2 = document.getElementById('btn-text-2');
    const feedback = document.getElementById('quiz-feedback');
    const fTitle = document.getElementById('feedback-title');
    const fText = document.getElementById('feedback-text');

    if(!btn1 || !btn2) return;

    btn1.addEventListener('click', () => {
        fTitle.textContent = "Presque !";
        fTitle.style.color = "var(--c-accent)";
        fText.textContent = "Ce texte décrit bien la scène, mais il reste factuel et classique. Il manque d'images et de métaphores.";
        gsap.to(feedback, { opacity: 1, y: -20, duration: 0.4, ease: "back.out(1.5)" });
    });

    btn2.addEventListener('click', () => {
        fTitle.textContent = "Bonne réponse !";
        fTitle.style.color = "var(--c-blue)";
        fText.textContent = "Le texte utilise des métaphores (« boule d'or brûlante »), des images et un vocabulaire plus original pour transformer une situation ordinaire en expérience visuelle.";
        gsap.to(feedback, { opacity: 1, y: -20, duration: 0.4, ease: "back.out(1.5)" });
    });
}

function setupCollage() {
    const items = document.querySelectorAll('.collage-item');
    const detail = document.getElementById('collage-detail');
    const cTitle = document.getElementById('collage-title');
    const cDesc = document.getElementById('collage-desc');
    const closeBtn = document.getElementById('close-collage');

    if(items.length === 0) return;

    items.forEach(item => {
        item.addEventListener('click', () => {
            cTitle.textContent = item.dataset.title;
            cDesc.textContent = item.dataset.desc;
            gsap.to(detail, { opacity: 1, scale: 1, pointerEvents: 'auto', duration: 0.3, ease: "back.out(1.5)" });
        });

        // Hover micro-interaction
        item.addEventListener('mouseenter', () => gsap.to(item, { scale: 1.05, duration: 0.2 }));
        item.addEventListener('mouseleave', () => gsap.to(item, { scale: 1, duration: 0.2 }));
    });

    closeBtn.addEventListener('click', () => {
        gsap.to(detail, { opacity: 0, scale: 0.9, pointerEvents: 'none', duration: 0.2 });
    });
}

function setupGallery() {
    const items = document.querySelectorAll('.gallery-item');
    const info = document.getElementById('gallery-info');

    if(items.length === 0) return;

    items.forEach(item => {
        item.addEventListener('click', () => {
            gsap.to(info, { opacity: 1, y: -10, duration: 0.3 });
            // Highlight selected
            items.forEach(i => gsap.to(i, { opacity: 0.5, duration: 0.2 }));
            gsap.to(item, { opacity: 1, scale: 1.05, duration: 0.2 });
        });
    });
}

function setupGenerator() {
    const btn = document.getElementById('btn-generate');
    const result = document.getElementById('generator-result');

    if(!btn) return;

    const contexts = ["étudiant", "salle de classe", "transport", "cantine", "révision", "organisation", "sommeil", "téléphone", "travail en groupe", "déplacements"];
    const contraintes = ["petit", "peu coûteux", "écologique", "rapide", "portable", "sans batterie", "facile à utiliser", "fabriqué avec des matériaux simples", "utile au quotidien", "utilisable à l'école"];

    btn.addEventListener('click', () => {
        // Animation
        gsap.to(result, { opacity: 0, duration: 0.1, onComplete: () => {
            const c1 = contraintes[Math.floor(Math.random() * contraintes.length)];
            let c2 = contraintes[Math.floor(Math.random() * contraintes.length)];
            while(c1 === c2) c2 = contraintes[Math.floor(Math.random() * contraintes.length)]; // prevent duplicate
            const ctx = contexts[Math.floor(Math.random() * contexts.length)];

            result.innerHTML = `<p class="text-body" style="font-size: 2.2vw; text-align:center;">« Imaginez un objet <span class="highlight">${c1.toUpperCase()}</span> et <span class="highlight-blue">${c2.toUpperCase()}</span> pour faciliter : <br><strong style="font-size: 2.5vw;">${ctx.toUpperCase()}</strong>. »</p>`;

            gsap.to(result, { opacity: 1, y: -10, duration: 0.4, ease: "back.out(1.5)" });
        }});
    });
}

function setupEtSi() {
    const cards = document.querySelectorAll('.et-si-card');
    if(cards.length === 0) return;

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const reveal = card.querySelector('.et-si-reveal');
            if(reveal.style.display === 'none') {
                reveal.style.display = 'block';
                gsap.fromTo(reveal, { opacity: 0, height: 0 }, { opacity: 1, height: 'auto', duration: 0.3 });
                gsap.to(card, { scale: 1.05, duration: 0.2 });
            } else {
                gsap.to(reveal, { opacity: 0, height: 0, duration: 0.2, onComplete: () => reveal.style.display = 'none' });
                gsap.to(card, { scale: 1, duration: 0.2 });
            }
        });
    });
}

// Event Listeners
btnPrev.addEventListener('click', () => goToSlide(currentSlideIndex - 1));
btnNext.addEventListener('click', () => goToSlide(currentSlideIndex + 1));

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        goToSlide(currentSlideIndex + 1);
    } else if (e.key === 'ArrowLeft') {
        goToSlide(currentSlideIndex - 1);
    } else if (e.key === 'Escape') {
        closeAllInteractions();
    }
});

function closeAllInteractions() {
    // Slide 7 Collage Detail
    const detail = document.getElementById('collage-detail');
    if (detail && detail.style.opacity > 0) {
        gsap.to(detail, { opacity: 0, scale: 0.9, pointerEvents: 'none', duration: 0.2 });
    }

    // Slide 12 Et Si Cards
    const cards = document.querySelectorAll('.et-si-card');
    cards.forEach(card => {
        const reveal = card.querySelector('.et-si-reveal');
        if (reveal && reveal.style.display !== 'none') {
            gsap.to(reveal, { opacity: 0, height: 0, duration: 0.2, onComplete: () => reveal.style.display = 'none' });
            gsap.to(card, { scale: 1, duration: 0.2 });
        }
    });
}

let touchStartX = 0;
let touchEndX = 0;

window.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

window.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) {
        goToSlide(currentSlideIndex + 1);
    }
    if (touchEndX > touchStartX + threshold) {
        goToSlide(currentSlideIndex - 1);
    }
}

// Initialize on load
window.onload = initSlides;

// Add mouse tracking for magnetic effect on buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: "power2.out" });
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    });
});
