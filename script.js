document.addEventListener('DOMContentLoaded', () => {
    // Active nav link - destaca o link da página atual
    const url = window.location.pathname.replace(/\/$/, '');
    const segments = url.split('/').filter(Boolean);
    const isBlog = segments.includes('blog');
    const currentFile = isBlog ? '/blog/' : (segments.length ? '/' + segments.pop() + '/' : '/');

    document.querySelectorAll('header nav a[href], .mobile-menu-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href === currentFile) {
            link.style.color = '#CCFF00';
        }
    });

    // Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const id = link.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                const header = document.getElementById('main-header');
                const offset = header ? header.offsetHeight + 16 : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // Initialize Lucide Icons
    lucide.createIcons();

    // Hero Animations on Load
    setTimeout(() => {
        document.querySelector('.reveal-left')?.classList.add('visible');
        document.querySelector('.reveal-right')?.classList.add('visible');
        document.querySelectorAll('.reveal-scale').forEach(el => el.classList.add('visible'));
    }, 100);

    // --- HERO SECTION INTERACTIVITY (apenas na Home) ---
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        const strategyContainer = document.querySelector('[data-side="strategy"]');
        const creativityContainer = document.querySelector('[data-side="creativity"]');
        const heroTargets = document.querySelectorAll('.hero-text-target'); 

        const bgStrategy = document.getElementById('hero-bg-strategy');
        const bgCreativity = document.getElementById('hero-bg-creativity');

        const isMobile = window.innerWidth < 768;

        const strategyText = strategyContainer?.querySelector('.hero-text');
        const creativityText = creativityContainer?.querySelector('.hero-text');

        if (isMobile) {
            if(bgStrategy) {
                bgStrategy.style.opacity = '0.3';
                bgStrategy.style.display = 'block';
            }
            if(bgCreativity) {
                bgCreativity.style.opacity = '0';
                bgCreativity.style.display = 'block';
            }

            heroSection.style.backgroundColor = '#050505';

            let currentImage = 'strategy';
            setInterval(() => {
                if (currentImage === 'strategy') {
                    if(bgStrategy) {
                        bgStrategy.style.transition = 'opacity 1.5s ease-in-out';
                        bgStrategy.style.opacity = '0';
                    }
                    if(bgCreativity) {
                        bgCreativity.style.transition = 'opacity 1.5s ease-in-out';
                        bgCreativity.style.opacity = '0.3';
                    }
                    currentImage = 'creativity';
                } else {
                    if(bgCreativity) {
                        bgCreativity.style.transition = 'opacity 1.5s ease-in-out';
                        bgCreativity.style.opacity = '0';
                    }
                    if(bgStrategy) {
                        bgStrategy.style.transition = 'opacity 1.5s ease-in-out';
                        bgStrategy.style.opacity = '0.3';
                    }
                    currentImage = 'strategy';
                }
            }, 10000);
        } else {
            if(bgStrategy) bgStrategy.style.opacity = '0';
            if(bgCreativity) bgCreativity.style.opacity = '0';
        }

        const resetHero = () => {
            if (isMobile) return;
            heroSection.style.transition = 'background-color 0.5s ease';
            heroSection.style.backgroundColor = '#050505';
            if (strategyText) strategyText.style.color = '#F2F2F2';
            if (creativityText) creativityText.style.color = '#F2F2F2';
            heroTargets.forEach(target => target.style.color = '#F2F2F2');
            if(bgStrategy) bgStrategy.style.opacity = '0';
            if(bgCreativity) bgCreativity.style.opacity = '0';
        };

        if (!isMobile && strategyContainer && creativityContainer) {
            strategyContainer.addEventListener('mouseenter', () => {
                heroSection.style.transition = 'background-color 0.5s ease';
                heroSection.style.backgroundColor = '#CCFF00';
                if (strategyText) strategyText.style.color = '#F2F2F2';
                if (creativityText) creativityText.style.color = '#050505';
                heroTargets.forEach(target => target.style.color = '#050505');
                if(bgStrategy) bgStrategy.style.opacity = '0.15';
            });
            strategyContainer.addEventListener('mouseleave', resetHero);

            creativityContainer.addEventListener('mouseenter', () => {
                heroSection.style.transition = 'background-color 0.5s ease';
                heroSection.style.backgroundColor = '#E0C3FC';
                if (creativityText) creativityText.style.color = '#F2F2F2';
                if (strategyText) strategyText.style.color = '#050505';
                heroTargets.forEach(target => target.style.color = '#050505');
                if(bgCreativity) bgCreativity.style.opacity = '0.2';
            });
            creativityContainer.addEventListener('mouseleave', resetHero);
        }
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

    // --- CUSTOM CURSOR LOGIC (apenas na Home) ---
    const cursor = document.getElementById('custom-cursor');
    const cursorText = document.getElementById('cursor-text');
    const authoritySection = document.getElementById('authority-section');
    const triggers = document.querySelectorAll('.cursor-trigger');

    if (cursor && cursorText && authoritySection) {
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

    // --- SOCIAL PROOF SUN RISING (apenas na Home) ---
    const sun = document.getElementById('rising-sun');
    const socialSection = document.getElementById('social-proof');

    if (sun && socialSection) {
        window.addEventListener('scroll', () => {
            const rect = socialSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const isMobileSun = window.innerWidth < 768;

            // Aumentamos a margem de ativação para 800px antes da seção aparecer no mobile
            const activationMargin = isMobileSun ? 800 : 200;

            if (rect.top < windowHeight + activationMargin && rect.bottom > -200) {
                
                // No mobile, o offset é muito maior (0.8), fazendo o sol "nascer" 
                // bem antes da seção chegar ao centro da tela.
                const offset = isMobileSun ? windowHeight * 0.8 : 0;
                
                let progress = (windowHeight + offset - rect.top) / (rect.height + windowHeight);
                
                // Limitamos o progresso entre 0 e 1
                progress = Math.min(Math.max(progress, 0), 1);
                
                // O multiplicador define a altura final. 250 faz ele subir mais no mobile.
                const multiplier = isMobileSun ? 250 : 120;
                const yPos = 100 - (progress * multiplier);
                
                // Opacidade mais agressiva no início para mobile
                const opacity = Math.min(progress * (isMobileSun ? 4 : 3), 1); 

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

    // --- MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    let menuOpen = false;

    const toggleMenu = () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            mobileMenu.classList.add('active');
            mobileMenu.style.opacity = '1';
            mobileMenu.style.pointerEvents = 'auto';
            document.body.style.overflow = 'hidden';
            const icon = mobileMenuButton.querySelector('i');
            icon.setAttribute('data-lucide', 'x');
            lucide.createIcons();
        } else {
            mobileMenu.classList.remove('active');
            mobileMenu.style.opacity = '0';
            mobileMenu.style.pointerEvents = 'none';
            document.body.style.overflow = '';
            const icon = mobileMenuButton.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    };

    mobileMenuButton.addEventListener('click', toggleMenu);

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });
});
