let tl = gsap.timeline()
let match=gsap.matchMedia()
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

match.add("(min-width:768px)", ()=>{

    tl.from('.logo-header',{
        x:-300,
        duration: 2
    })
    
    tl.from('.li-about',{
        opacity:0,
        duration: 0.4
    })
    
    tl.from('.li-services',{
        opacity:0,
        duration: 0.35
    })
    
    tl.from('.li-skills',{
        opacity:0,
        duration: 0.3
    })
    
    tl.from('.li-experience',{
        opacity:0,
        duration: 0.25
    })
    
    tl.from('.li-contact',{
        opacity:0,
        duration: 0.2
    })
    
    tl.from('.about-container',{
        y:-100,
        opacity:0,
        duration: 1.2
    })

tl.from('.about-container-div-2',{
    opacity:0,
    x:50,
    duration: 1
})

})

match.add("(max-width:767px)", ()=>{

    tl.from('.logo-header',{
        opacity:0,
        duration: 1.5
    })
   
    tl.from('.sizes',{
        opacity:0,
        rotate:180,
        duration: 0.8
    })
    
    tl.from('.about-container',{
        x:-400,
        duration: 1.2
    })

tl.from('.about-container-div-2',{
    opacity:0,
    x:50,
    duration: 1
})

})

tl.call(setTimeout(()=>{writting("My name is Gianny Macri, a front end developer with experience creating websites and interactive applications. I love designing and developing webs that surprise and delight users. ")},4000))

