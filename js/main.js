gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: 'power4.out'
})

tl.from('.stagger1', {
    opacity: 0,
    y: '-50',
    stagger: .3,
    duration: 2,
    ease: 'power4.out'
}, '-=1.5')

tl.from('.hero-design', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power4.out'
}, '-=1.5')

gsap.from('.square-anim', {
    stagger: .2,
    scale: 0.1,
    duration: 1,
    ease: 'back.out(1.7)'
})

gsap.from('.transition2', {
    scrollTrigger: {
        trigger: '.transition2',
        start: 'top bottom'
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from('.transition3', {
    scrollTrigger: {
        trigger: '.transition3',
        start: 'top center'
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
})

gsap.from('.footer-design', {
    scrollTrigger: {
        trigger: '.footer-design',
        start: 'top bottom'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power4.out'
}, '-=2')

gsap.from('.footer-anim', {
    scrollTrigger: {
        trigger: '.footer-design',
        start: 'top bottom'
    },
    stagger: .2,
    scale: 0.1,
    duration: 1,
    ease: 'back.out(1.7)'
}, '-=2')