tl = gsap.timeline()
tl.from("nav h1", {
    y: -40,
    opacity:0,
    delay:0.5,
    duration:0.7,
    stagger: 0.2
})

gsap.from(" nav h4, nav button",{
    y:-40,
    opacity:0,
    delay:0.1,
    duration:0.7,
    stagger: -.2
})

   const tlHearbeat = gsap.timeline({ repeat: -1 });

    tl.to(".center-part2 img", { scale: 1.1, duration: 0.2, ease: "power1.inOut" })
      .to(".center-part2 img", { scale: 1, duration: 0.15, ease: "power1.inOut" })
      .to(".center-part2 img", { scale: 1.125, duration: 0.2, ease: "power1.inOut" })
      .to(".center-part2 img", { scale: 1, duration: 0.3, ease: "power1.inOut" })
      .to(".center-part2 img", { scale: 1.125, duration: 0.2, ease: "power1.inOut" })
      .to(".center-part2 img", { scale: 1, duration: 0.3, ease: "power1.inOut" })
      .to(".center-part2 img", { scale: 1.125, duration: 0.2, ease: "power1.inOut" })
      .to(".center-part2 img", { scale: 1, duration: 0.3, ease: "power1.inOut" })
      .to(".center-part2 img", { scale: 1.125, duration: 0.2, ease: "power1.inOut" })
      .to(".center-part2 img", { scale: 1, duration: 0.3, ease: "power1.inOut" });

    // Stop the heartbeat after 5 seconds
    setTimeout(() => {
      tl.pause();
      gsap.to(".center-part2 img", { scale: 1, duration: 0.3 }); // Reset scale
    }, 5000);

tlHero = gsap.timeline()

tlHero.from(".center-part1 h1",{
    x:-100,
    opacity:0,
    delay:2,
    duration:1,
    ease:"elastic.out"
})

tlHero.from(".center-part1 p",{
    x:500,
    opacity:0,
    delay:0.5,
    duration:1,
    ease:"elastic.out"
})

tlHero.from(".center-part1 button",{
    y:-700,
    rotate:360,
    delay:1.5,
    
    duration:0.5
}, "-=0.5")



// CARDS ANIMATION 

const tlCards = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:2
    }
})


tlCards.from(".services",{
    x:-100,
    opacity:0,
    duration:.5

})

tlCards.from(".elem.line1.left",{
    x:-200,
    opacity:0,
   
    duration:2,
    
}, "anime")
tlCards.from(".elem.line1.right",{
    x:200,
    opacity:0,
   duration:2,
    
}, "anime")
tlCards.from(".elem.line2.left",{
    x:-200,
    opacity:0,
    duration:2,
    
}, "anime2")
tlCards.from(".elem.line2.right",{
    x:200,
    opacity:0,
    duration:2,
    
}, "anime2")



// gsap.to(".marquee",{
//                     x:200,
//                     repeat:-1,
//                     duration:4, 
//                     ease:"none"
// })


// window.addEventListener("wheel", function(dets){
//             if(dets.deltaY > 0){
//                 gsap.to(".marquee",{
//                     transform: "translateX(-100%)",
//                     repeat:-1,
//                     duration:4, 
//                     ease:"none"
//                 })


//                 console.log("seedha")
//             }else{

//                  gsap.to(".marquee",{
//                     transform: "translateX(0%)",
//                     repeat:-1,
//                     duration:4, 
//                     ease:"none"
//                 })
//             }
// })


// let currentX = 0;
// let direction = 1;

// window.addEventListener("wheel", function (e) {
//   const scrollAmount = 50; // how much to move per scroll

//   if (e.deltaY > 0) {
//     direction = -1;
//   } else {
//     direction = 1;
//   }

//   currentX += direction * scrollAmount;

//   gsap.to(".marquee", {
//     x: currentX,
//     duration: 1,
//     ease: "power1.out",
//   });
// });



window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".marq", {
      x: "-200%",
      repeat: -1,
      duration: 5,
      ease: "none"
    });

    gsap.to(".marq img", {
      rotate: 180
    });

    console.log("seedha");
  } else {
    gsap.to(".marq", {
      x: "0%",
      repeat: -1,
      duration: 5,
      ease: "none"
    });

    gsap.to(".marq img", {
      rotate: 0
    });

    console.log("ulta");
  }
});


// gsap.to(".marquee-track",{
//                     // x:-100,
//                      transform: "translateX(0)",
//                     repeat:-1,
//                     duration:35, 
//                     ease:"none"
// })

window.addEventListener("wheel", function(dets){
            if(dets.deltaY > 0){
                gsap.to(".marquee-track",{
                x: "-200%",
                    repeat:-1,
                    duration:35, 
                    ease:"none"
                })


                console.log("seedha")
            }else{

                 gsap.to(".marquee-track",{
                    x: "0%",
                    repeat:-1,
                    duration:35, 
                    ease:"none"
                })
            }
})
