(function() {

    // JS loaded
    let body = document.body;
    body.classList.add('loaded');
    window.scrollTo(0, 0);

    // Toggle Menu
    const toggleMenu = (toggleID, toggleNav) => {
        let toggleLink = document.querySelector(toggleID),
            toggleItem = document.querySelector(toggleNav),
            headerLinks = document.querySelectorAll("#toggleNav a"),
            root = document.getElementsByTagName('html')[0];
        headerLinks.forEach(link => {
            link.onclick = (e) => {
                root.classList.remove('hide-scroll');
                toggleItem.classList.remove("active");
            }
        });
        if (toggleLink && toggleItem) {
            toggleLink.onclick = () => {
                if (toggleItem.classList.contains('active')) {
                    root.classList.remove('hide-scroll');
                    toggleItem.classList.remove("active");
                } else {
                    root.classList.add('hide-scroll');
                    toggleItem.classList.add("active");
                }
            }
        }
    }
    toggleMenu('#toggleBtn', '#toggleNav');

    // Add class on scroll
    const header = document.querySelector(".header-section")
    if (header) {
        let scrollpos = window.scrollY
        const header_height = header.offsetHeight

        const addClassOnScroll = () => header.classList.add("active")
        const remClassOnScroll = () => header.classList.remove("active")

        window.addEventListener('scroll', function() {
            scrollpos = window.scrollY;
            if (scrollpos >= 1) { addClassOnScroll() } else { remClassOnScroll() }
        })
    }

    // Slide Effect Header
    const slideTopEffect = (selector) => {
        let slider = document.querySelectorAll(selector),
            lastScrollTop = 0;
        if (slider) {
            window.addEventListener("scroll", function() {
                let scrollTopPos = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTopPos > lastScrollTop) {
                    slider.forEach(link => {
                        link.classList.add('has-effect');
                    });
                } else {
                    slider.forEach(link => {
                        link.classList.remove('has-effect');
                    });
                }
                lastScrollTop = scrollTopPos <= 0 ? 0 : scrollTopPos; // For Mobile or negative scrolling
            }, false);
        }
    }
    slideTopEffect('.header-section');


    // gsap animations
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
        toggleActions: "play none none none",
        start: "top 80%",
    });


    // Animation Slide up
    const animationUp = document.querySelectorAll('.animate-up');
    if (animationUp) {
        ScrollTrigger.batch(".animate-up", {
            onEnter: elements => {
                gsap.to(elements, {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.12
                });
            },
            once: false
        });
    }

})();