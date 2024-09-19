gsap.registerPlugin(ScrollTrigger);

gsap.from('.logo div', {
    opacity: 0,
    delay: 1,
    x: 20
});

const menu_items = document.querySelector('.menu-items');
gsap.from(menu_items.children, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 1.5,
    stagger: {
        amount: 1
    }
});

gsap.utils.toArray('.star').forEach(star => {
    gsap.fromTo(star, {
        rotation: 450,
        opacity: 0,
        y: 100
    }, {
        rotation: 0,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
            trigger: star,
            start: "top 100%",
            toggleActions: "play none none none"
        }
    });
});

gsap.utils.toArray('.title').forEach(title => {
    gsap.fromTo(title, {
        letterSpacing: '10px',
        opacity: 0,
        x: 300,
        skewX: 65
    }, {
        letterSpacing: '0',
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: title
        }
    });
});

gsap.utils.toArray('p').forEach(p => {
    gsap.fromTo(p, {
        opacity: 0,
        x: 150,
        skewX: 30
    }, {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: p
        }
    });
});

gsap.utils.toArray('button').forEach(button => {
    gsap.fromTo(button, {
        opacity: 0
    }, {
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
            trigger: button
        }
    });
});

gsap.utils.toArray('.img1').forEach(img1 => {
    gsap.fromTo(img1, {
        letterSpacing: '10px',
        opacity: 0,
        x: 300,
        skewX: 65
    }, {
        letterSpacing: '0',
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: img1
        }
    });
});

gsap.utils.toArray('.img3').forEach(img3 => {
    gsap.fromTo(img3, {
        letterSpacing: '10px',
        opacity: 0,
        x: 300,
        skewX: 65
    }, {
        letterSpacing: '0',
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: img3
        }
    });
});
gsap.utils.toArray('.lamborghini').forEach(lamborghini => {
    gsap.fromTo(lamborghini, {
        letterSpacing: '10px',
        opacity: 0,
        x: 300,
        skewX: 65
    }, {
        letterSpacing: '0',
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: lamborghini
        }
    });
});


gsap.to(".lamborghini", {
    rotate: 360,            // Rotate the car by 360 degrees
    duration: 2,            // Time for one full rotation
    repeat: -1,             // Repeat infinitely
    repeatDelay: 1,         // Delay between repeats (1 second)
    ease: "linear"          // Use linear easing for a constant speed
});


gsap.utils.toArray('.card').forEach(card => {
    gsap.fromTo(card, {
        letterSpacing: '10px',
        opacity: 0,
        x: 300,
        skewX: 65
    }, {
        letterSpacing: '0',
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: card
        }
    });
});




gsap.utils.toArray('a').forEach(a => {
    gsap.fromTo(a, {
        letterSpacing: '10px',
        opacity: 0,
        x: 300,
        skewX: 65
    }, {
        letterSpacing: '0',
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: a
        }
    });
});





