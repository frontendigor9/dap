const tl = gsap.timeline();

tl.fromTo('.agency__title', {
    y: -100,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        duration: 2,
    },
    2
);
tl.fromTo('.agency__descr_photo1', {
    x: -200,
    opacity: 0,
},
    {
        x: 0,
        opacity: 1,
        duration: 1,
    },
    1
);
tl.fromTo('.agency__descr_photo2', {
    y: 200,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        duration: 1,
    },
    2
);
tl.fromTo('.agency__descr_text', {
    x: 200,
    opacity: 0,
},
    {
        x: 0,
        opacity: 1,
        duration: 1,
    },
    1
);
tl.fromTo('.header, .menu__item, .header__logo, .contact__item', {
    y: -50,
    opacity: 0,
},
    {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
    },
    2.5
);
tl.fromTo('.hamburger', {
    x: 200,
    opacity: 0,
},
    {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
    });

gsap.registerPlugin(ScrollTrigger);
const tlLoader = gsap.timeline();
//     //laptop Animations



//laptop Animations

const laptopScreen = window.matchMedia('(min-width: 768px)');

if (laptopScreen.matches) {
    gsap.from('.founders__group_descr', {
        ScrollTrigger: {
            trigger: '.founders__group',
            start: '-250 0',
            end: '-150 0',
            scrub: true,
        },
        x: -100,
        autoAlpha: 0,
        duration: 0.1,
    });

    //why
    gsap.from('.grid-item-1', {
        scrollTrigger: {
            trigger: '.grid-items',
            start: '-750 0',
            end: '-250 0',
            scrub: true,

        },
        x: -100,
        autoAlpha: 0,
        duration: 0.1,
        stagger: 2,
    });
    gsap.from('.grid-item-2__card', {
        scrollTrigger: {
            trigger: '.grid-items',
            start: '-750 0',
            end: '-250 0',
            scrub: true,
        },
        x: 100,
        opacity: 0,
        duration: 0.15,
        stagger: 0.2,
    });
    gsap.from('.portfolio__item_img', {
        scrollTrigger: {
            trigger: '.portfolio__items',
            start: '-350 0',
            end: '-150 0',
            scrub: true,

        },
        x: -100,
        opacity: 0,
        duration: 0.15,
        stagger: 0.2,
    });
}
