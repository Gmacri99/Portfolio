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
    y:-100,
    opacity:0,
    duration: 1.2
})

let write=document.querySelector('.p-writting')

let writting= str =>{
    let arrFromStr=str.split('')
    let i=0
    let printStr=setInterval(()=>{
        write.innerHTML+=arrFromStr[i];
        i++;

        if(i===arrFromStr.length){
            clearInterval(printStr)
        }
    },50)
}

tl.call(setTimeout(()=>{writting("Hello, I'm a front end developer with experience creating websites and interactive applications. I love designing and developing web experiences that surprise and delight users. ")},7000))


tl.from('.about-container-div-2',{
    opacity:0,
    x:50,
    duration: 1
})