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

    // Show Tabs 
    const showTabs = (tabLinkID, tabContentID) => {
        let tabLinks = document.querySelectorAll(tabLinkID),
            tabContent = document.querySelectorAll(tabContentID);

        if (tabLinks && tabContent) {
            const openTabs = el => {
                let selectedLink = el.currentTarget.classList,
                    showId = el.currentTarget.dataset.tab;

                tabLinks.forEach(el => {
                    el.classList.remove("active");
                });
                tabContent.forEach(el => {
                    el.classList.remove("active");
                });
                selectedLink.add("active");
                document.querySelector("#" + showId).classList.add("active");
            }
            tabLinks.forEach(el => {
                el.addEventListener("click", openTabs);
            });
        }
    }
    showTabs('[data-tab]', '.tab-content');

    // Client Swiper
    const clientSwiper = document.querySelector("#clientSwiper");
    if (clientSwiper && window.innerWidth <= 1024) {
        const swiper = new Swiper('#clientSwiper', {
            // Optional parameters
            slidesPerView: 'auto',
            spaceBetween: 20,
            grabCursor: true,
            pagination: {
                el: "#clientSwiper .swiper-pagination",
            },
        });
    }

    // Work Swiper
    const workSwiper = document.querySelector("#workSwiper");
    if (workSwiper && window.innerWidth <= 768) {
        const swiper = new Swiper('#workSwiper', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 20,
            grabCursor: true,
            pagination: {
                el: "#workSwiper .swiper-pagination",
            },
        });
    }

    // Blog Swiper
    const blogSwiper = document.querySelector("#blogSwiper");
    if (blogSwiper) {
        const swiper = new Swiper('#blogSwiper', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            pagination: {
                el: "#blogSwiper .swiper-pagination",
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }

    // All Work Swiper
    const allWorkSwiper = document.querySelector("#allWorkSwiper");
    if (allWorkSwiper && window.innerWidth <= 768) {
        const swiper = new Swiper('#allWorkSwiper', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 20,
            grabCursor: true,
            pagination: {
                el: "#allWorkSwiper .swiper-pagination",
            },
        });
    }

    // E-commerce Swiper
    const eCommerceSwiper = document.querySelector("#eCommerceSwiper");
    if (eCommerceSwiper && window.innerWidth <= 768) {
        const swiper = new Swiper('#eCommerceSwiper', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 20,
            grabCursor: true,
            pagination: {
                el: "#eCommerceSwiper .swiper-pagination",
            },
        });
    }

    // Branding Swiper
    const brandingSwiper = document.querySelector("#brandingSwiper");
    if (brandingSwiper && window.innerWidth <= 768) {
        const swiper = new Swiper('#brandingSwiper', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 20,
            grabCursor: true,
            pagination: {
                el: "#brandingSwiper .swiper-pagination",
            },
        });
    }

    // Mobile Application Swiper
    const mobileApplicationSwiper = document.querySelector("#mobileApplicationSwiper");
    if (brandingSwiper && window.innerWidth <= 768) {
        const swiper = new Swiper('#mobileApplicationSwiper', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 20,
            grabCursor: true,
            pagination: {
                el: "#mobileApplicationSwiper .swiper-pagination",
            },
        });
    }

    // Work Swiper
    const relatedPortfolioSwiper = document.querySelector("#relatedPortfolioSwiper");
    if (relatedPortfolioSwiper) {
        const swiper = new Swiper('#relatedPortfolioSwiper', {
            // Optional parameters
            slidesPerView: "auto",
            spaceBetween: 16,
            centeredSlides: true,
            initialSlide: 1,
            grabCursor: true,
            navigation: {
                nextEl: "#relatedPortfolioSwiper .swiper-button-next",
                prevEl: "#relatedPortfolioSwiper .swiper-button-prev",
            },
            pagination: {
                el: "#relatedPortfolioSwiper .swiper-pagination",
            },
            breakpoints: {
                640: {
                    spaceBetween: 20,
                }
            },
        });
    }

    // gsap animations
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
        toggleActions: "play none none none",
        start: "top 95%",
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