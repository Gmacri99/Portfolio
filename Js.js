let tl = gsap.timeline()


tl.from('.logo-header',{
    x:-300,
    duration: 2
})

tl.from('.li-about',{
    opacity:0,
    duration: 0.5
})

tl.from('.li-services',{
    opacity:0,
    duration: 0.5
})

tl.from('.li-skills',{
    opacity:0,
    duration: 0.5
})

tl.from('.li-experience',{
    opacity:0,
    duration: 0.5
})

tl.from('.li-contact',{
    opacity:0,
    duration: 0.5
})

tl.from('.about-container',{
    y:1000,
    duration: 1.5
})



tl.from('.p-writting',{
    opacity:0,
    position:relative,
    width:100,
    duration: 7
})

