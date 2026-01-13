document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Hero Animations on Load
    setTimeout(() => {
        document.querySelector('.reveal-left')?.classList.add('visible');
        document.querySelector('.reveal-right')?.classList.add('visible');
        document.querySelectorAll('.reveal-scale').forEach(el => el.classList.add('visible'));
    }, 100);

    // --- HERO SECTION INTERACTIVITY ---
    const heroSection = document.getElementById('hero');
    const strategyContainer = document.querySelector('[data-side="strategy"]');
    const creativityContainer = document.querySelector('[data-side="creativity"]');
    const heroTexts = document.querySelectorAll('.hero-text'); 
    const heroTargets = document.querySelectorAll('.hero-text-target'); 
    
    // Background Images
    const bgStrategy = document.getElementById('hero-bg-strategy');
    const bgCreativity = document.getElementById('hero-bg-creativity');

    const resetHero = () => {
        heroSection.style.backgroundColor = ''; 
        heroTexts.forEach(text => text.style.color = '');
        heroTargets.forEach(target => target.style.color = '');
        
        if(bgStrategy) bgStrategy.style.opacity = '0';
        if(bgCreativity) bgCreativity.style.opacity = '0';
    };

    if (strategyContainer) {
        strategyContainer.addEventListener('mouseenter', () => {
            heroSection.style.backgroundColor = '#CCFF00';
            heroTexts.forEach(text => text.style.color = '#050505');
            heroTargets.forEach(target => target.style.color = '#050505');
            if(bgStrategy) bgStrategy.style.opacity = '0.15';
        });
        strategyContainer.addEventListener('mouseleave', resetHero);
    }

    if (creativityContainer) {
        creativityContainer.addEventListener('mouseenter', () => {
            heroSection.style.backgroundColor = '#E0C3FC';
            heroTexts.forEach(text => text.style.color = '#050505');
            heroTargets.forEach(target => target.style.color = '#050505');
            if(bgCreativity) bgCreativity.style.opacity = '0.2';
        });
        creativityContainer.addEventListener('mouseleave', resetHero);
    }


    // --- SCROLL OBSERVER ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const expand = entry.target.querySelector('.animate-expand');
                if (expand) expand.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    document.querySelectorAll('.animate-expand').forEach(el => observer.observe(el));


    // --- METHODOLOGY HORIZONTAL SCROLL ---
    const methodologySection = document.getElementById('methodology');
    const sliderContainer = document.getElementById('methodology-slider-container');
    const slider = document.getElementById('methodology-slider');

    if (methodologySection && slider) {
        window.addEventListener('scroll', () => {
            const rect = methodologySection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
                const move = Math.min(Math.max(progress * -20, -20), 0); 
                slider.style.transform = `translateX(${move}%)`;
            }
        });
    }

    // --- CUSTOM CURSOR LOGIC ---
    const cursor = document.getElementById('custom-cursor');
    const cursorText = document.getElementById('cursor-text');
    const authoritySection = document.getElementById('authority-section');
    const triggers = document.querySelectorAll('.cursor-trigger');

    if (cursor && authoritySection) {
        // Only enable custom cursor on desktop to avoid touch interference
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;

        if (isDesktop) {
            document.addEventListener('mousemove', (e) => {
                cursor.style.transform = `translate(${e.clientX + 10}px, ${e.clientY + 10}px)`;
            });

            authoritySection.addEventListener('mouseenter', () => {
                cursor.classList.remove('hidden');
            });

            authoritySection.addEventListener('mouseleave', () => {
                cursor.classList.add('hidden');
            });

            triggers.forEach(trigger => {
                trigger.addEventListener('mouseenter', () => {
                    const text = trigger.getAttribute('data-cursor');
                    if (text) {
                        cursorText.innerText = text;
                        cursor.classList.remove('hidden');
                        cursor.style.opacity = '1';
                    }
                });
                
                trigger.addEventListener('mouseleave', () => {
                    cursorText.innerText = '';
                });
            });
        }
    }

// --- SOCIAL PROOF SUN RISING (VERSÃO ANTECIPADA) ---
const sun = document.getElementById('rising-sun');
const socialSection = document.getElementById('social-proof');

if (sun && socialSection) {
    window.addEventListener('scroll', () => {
        const rect = socialSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isMobile = window.innerWidth < 768;

        // Aumentamos a margem de ativação para 800px antes da seção aparecer no mobile
        const activationMargin = isMobile ? 800 : 200;

        if (rect.top < windowHeight + activationMargin && rect.bottom > -200) {
            
            // No mobile, o offset é muito maior (0.8), fazendo o sol "nascer" 
            // bem antes da seção chegar ao centro da tela.
            const offset = isMobile ? windowHeight * 0.8 : 0;
            
            let progress = (windowHeight + offset - rect.top) / (rect.height + windowHeight);
            
            // Limitamos o progresso entre 0 e 1
            progress = Math.min(Math.max(progress, 0), 1);
            
            // O multiplicador define a altura final. 250 faz ele subir mais no mobile.
            const multiplier = isMobile ? 250 : 120;
            const yPos = 100 - (progress * multiplier);
            
            // Opacidade mais agressiva no início para mobile
            const opacity = Math.min(progress * (isMobile ? 4 : 3), 1); 

            sun.style.transform = `translate(-50%, ${yPos}%)`;
            sun.style.opacity = opacity;
        }
    });
}

    // --- HEADER BLUR ON SCROLL ---
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('backdrop-blur-md', 'bg-black/50', 'py-4');
                header.classList.remove('py-6', 'mix-blend-difference');
            } else {
                header.classList.remove('backdrop-blur-md', 'bg-black/50', 'py-4');
                header.classList.add('py-6', 'mix-blend-difference');
            }
        });
    }
});
