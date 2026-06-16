let overlay = document.querySelector(".overlay")
let menu = document.querySelector(".menu-p")
let video = document.querySelector(".motion-video")
let page1 = document.querySelector(".page1")
let mp1 = document.querySelector(".mp1")
let mp2 = document.querySelector(".mp2")
let mp3 = document.querySelector(".mp3")
let page2 = document.querySelector(".page2")
let page4 = document.querySelector(".page4")
let p2 = document.querySelector(".page4 .p2")
let page5 = document.querySelector(".page5")
let left = document.querySelector(".page5 .left")
let right = document.querySelector(".page5 .right")
let page6 = document.querySelector(".page6")
let left6 = document.querySelector(".page6 .left")
let right6 = document.querySelector(".page6 .right")
let b1 = document.querySelector(".b1")
let b2 = document.querySelector(".b2")
let b3 = document.querySelector(".b3")
let b4 = document.querySelector(".b4")
let ser1 = document.querySelector(".serr1")
let ser2 = document.querySelector(".serr2")
let ser3 = document.querySelector(".serr3")
let ser4 = document.querySelector(".serr4")
let ser5 = document.querySelector(".serr5")
let ser6 = document.querySelector(".serr6")
let ser7 = document.querySelector(".serr7")
let s1 = document.querySelector(".s1")
let s2 = document.querySelector(".s2")
let s3 = document.querySelector(".s3")      
let s4 = document.querySelector(".s4")
let s5 = document.querySelector(".s5")
let s6 = document.querySelector(".s6")
let s7 = document.querySelector(".s7")
let i1 = document.querySelector(".i1")
let i2 = document.querySelector(".i2")
let i3 = document.querySelector(".i3")
let i4 = document.querySelector(".i4")
let page8 = document.querySelector(".page8")
let page9 = document.querySelector(".page9")
let pp2 = document.querySelector(".pp2")
let logo1 = document.querySelector(".logo1")
let logo2 = document.querySelector(".logo2")
let logo3 = document.querySelector(".logo3")
let logo4 = document.querySelector(".logo4")
let logo5 = document.querySelector(".logo5")
let imggg = document.querySelector(".imggg")
let vid1 = document.querySelector(".vide1")
let vid2 = document.querySelector(".vide2")
let vid3 = document.querySelector(".vide3")
let vid4 = document.querySelector(".vide4")
let vid5 = document.querySelector(".vide5")
let vid6 = document.querySelector(".vide6")
let vid7 = document.querySelector(".vide7")
let page15 = document.querySelector(".page15")
let p15 = document.querySelector(".page15 p")
let circle = document.querySelector(".circle")
let body = document.querySelector("body")
let flag = 1



menu.addEventListener("click", ()=>{

    if(flag){
    overlay.style.top = "0%"
    overlay.style.transform = "rotate(8deg)"
    menu.innerHTML = "OPEN"
    flag = 0
    }
    else{
    overlay.style.top = "-120%"
    overlay.style.transform = "rotate(0deg)"

    flag = 1
    }

})
menu.addEventListener("mouseenter",()=>{
    menu.innerHTML = "OPEN"
    menu.textContent = "OPEN"
})

menu.addEventListener("mouseleave",()=>{
    menu.innerHTML = "MENU"
    menu.textContent = "MENU"
})
page1.addEventListener("mousemove",(dets)=>{
    video.style.left = dets.x + "px"
    video.style.top = dets.y + "px"
    video.style.transition = "linear 0.3s"
    // video.style.transform = "translate(50%,50%)"

})


body.addEventListener("mousemove",(dets)=>{
    circle.style.left = dets.x + "px"
    circle.style.top = dets.y + "px"
})

page2.addEventListener("mouseenter",()=>{
    video.style.opacity = "0"
})

page4.addEventListener("mouseenter", ()=>{
   p2.style.transform = "translateY(-150px)"
})

page4.addEventListener("mouseleave", ()=>{
    p2.style.transform = "translateY(0px)"
})

page5.addEventListener("mouseenter",()=>{
    left.style.transform = "translateX(640px)"
    right.style.transform = "translateX(-640px)"
})


page6.addEventListener("mouseenter",()=>{
    left6.style.transform = "translateX(640px)"
    right6.style.transform = "translateX(-640px)"
})

left.addEventListener("mouseenter",()=>{
    b1.style.opacity = "1"
    i1.style.opacity = "0.5"
})
left.addEventListener("mouseleave",()=>{
    b1.style.opacity = "0"
    i1.style.opacity = "1"
})
right.addEventListener("mouseenter",()=>{
    b2.style.opacity = "1"
    i2.style.opacity = "0.5"
})
right.addEventListener("mouseleave",()=>{
    b2.style.opacity = "0"
    i2.style.opacity = "1"
})
left6.addEventListener("mouseenter",()=>{
    b3.style.opacity = "1"
    i3.style.opacity = "0.5"
})
left6.addEventListener("mouseleave",()=>{
    b3.style.opacity = "0"
    i3.style.opacity = "1"
})
right6.addEventListener("mouseenter",()=>{
    b4.style.opacity = "1"
    i4.style.opacity = "0.5"    
})
right6.addEventListener("mouseleave",()=>{
    b4.style.opacity = "0"
    i4.style.opacity = "1"
})
page1.addEventListener("mouseenter",()=>{
    mp1.style.transform = "translateY(-130px)"
    mp2.style.transform = "translateY(-130px)"
    mp3.style.transform = "translateY(-130px)"
})
ser1.addEventListener("mouseenter",()=>{
    s1.style.opacity= "1"
    ser2.style.color = "#b5b5b5"
    ser3.style.color = "#b5b5b5"
    ser4.style.color = "#b5b5b5"
    ser5.style.color = "#b5b5b5"
    ser6.style.color = "#b5b5b5"
    ser7.style.color = "#b5b5b5"
})
ser1.addEventListener("mouseleave",()=>{
    s1.style.opacity= "0"
    ser1.style.color = "black"
    ser2.style.color = "black"
    ser3.style.color = "black"
    ser4.style.color = "black"
    ser5.style.color = "black"
    ser6.style.color = "black"
    ser7.style.color = "black"
})
ser2.addEventListener("mouseenter",()=>{
    s2.style.opacity= "1"
    ser1.style.color = "#b5b5b5"
    ser3.style.color = "#b5b5b5"
    ser4.style.color = "#b5b5b5"
    ser5.style.color = "#b5b5b5"
    ser6.style.color = "#b5b5b5"
    ser7.style.color = "#b5b5b5"
})
ser2.addEventListener("mouseleave",()=>{
    s2.style.opacity= "0"
    ser1.style.color = "black"
    ser2.style.color = "black"
    ser3.style.color = "black"
    ser4.style.color = "black"
    ser5.style.color = "black"
    ser6.style.color = "black"
    ser7.style.color = "black"
})
ser3.addEventListener("mouseenter",()=>{
    s3.style.opacity= "1"
    ser1.style.color = "#b5b5b5"
    ser2.style.color = "#b5b5b5"
    ser4.style.color = "#b5b5b5"
    ser5.style.color = "#b5b5b5"
    ser6.style.color = "#b5b5b5"
    ser7.style.color = "#b5b5b5"
})
ser3.addEventListener("mouseleave",()=>{
    s3.style.opacity= "0"
    ser1.style.color = "black"
    ser2.style.color = "black"
    ser3.style.color = "black"
    ser4.style.color = "black"
    ser5.style.color = "black"
    ser6.style.color = "black"
    ser7.style.color = "black"
})
ser4.addEventListener("mouseenter",()=>{
    s4.style.opacity= "1"
    ser1.style.color = "#b5b5b5"
    ser2.style.color = "#b5b5b5"
    ser3.style.color = "#b5b5b5"
    ser5.style.color = "#b5b5b5"
    ser6.style.color = "#b5b5b5"
    ser7.style.color = "#b5b5b5"
})
ser4.addEventListener("mouseleave",()=>{
    s4.style.opacity= "0"
    ser1.style.color = "black"
    ser2.style.color = "black"
    ser3.style.color = "black"
    ser4.style.color = "black"
    ser5.style.color = "black"
    ser6.style.color = "black"
    ser7.style.color = "black"
})
ser5.addEventListener("mouseenter",()=>{
    s5.style.opacity= "1"
    ser1.style.color = "#b5b5b5"
    ser2.style.color = "#b5b5b5"
    ser3.style.color = "#b5b5b5"
    ser4.style.color = "#b5b5b5"
    ser6.style.color = "#b5b5b5"
    ser7.style.color = "#b5b5b5"
})
ser5.addEventListener("mouseleave",()=>{
    s5.style.opacity= "0"
    ser1.style.color = "black"
    ser2.style.color = "black"
    ser3.style.color = "black"
    ser4.style.color = "black"
    ser5.style.color = "black"
    ser6.style.color = "black"
    ser7.style.color = "black"
})  
ser6.addEventListener("mouseenter",()=>{
    s6.style.opacity= "1"
    ser1.style.color = "#b5b5b5"
    ser2.style.color = "#b5b5b5"
    ser3.style.color = "#b5b5b5"
    ser4.style.color = "#b5b5b5"
    ser5.style.color = "#b5b5b5"
    ser7.style.color = "#b5b5b5"
})
ser6.addEventListener("mouseleave",()=>{
    s6.style.opacity= "0"
    ser1.style.color = "black"      
    ser2.style.color = "black"
    ser3.style.color = "black"
    ser4.style.color = "black"
    ser5.style.color = "black"
    ser6.style.color = "black"
    ser7.style.color = "black"
})
ser7.addEventListener("mouseenter",()=>{
    s7.style.opacity= "1"
    ser1.style.color = "#b5b5b5"
    ser2.style.color = "#b5b5b5"
    ser3.style.color = "#b5b5b5"
    ser4.style.color = "#b5b5b5"
    ser5.style.color = "#b5b5b5"
    ser6.style.color = "#b5b5b5"
})
ser7.addEventListener("mouseleave",()=>{
    s7.style.opacity= "0"
    ser1.style.color = "black"
    ser2.style.color = "black"
    ser3.style.color = "black"
    ser4.style.color = "black"
    ser5.style.color = "black"
    ser6.style.color = "black"
    ser7.style.color = "black"
})
page8.addEventListener("mouseenter",()=>{   
    logo1.style.transform = "translateY(-100px)"
    // logo2.style.transform = "translateY(-100px)"
    // logo3.style.transform = "translateY(-100px)"
    // logo4.style.transform = "translateY(-100px)"
    // logo5.style.transform = "translateY(-100px)"
})
page9.addEventListener("mouseenter",()=>{
    pp2.style.transform = "translateX(180px)"
    imggg.style.opacity = "1"
})
ser1.addEventListener("mouseenter",()=>{
    vid1.style.opacity="1"
})
ser1.addEventListener("mouseleave",()=>{
    vid1.style.opacity="0"
})
ser2.addEventListener("mouseenter",()=>{
    vid2.style.opacity="1"
})
ser2.addEventListener("mouseleave",()=>{
    vid2.style.opacity="0"
})
ser3.addEventListener("mouseenter",()=>{
    vid3.style.opacity="1"
})
ser3.addEventListener("mouseleave",()=>{
    vid3.style.opacity="0"
})
ser4.addEventListener("mouseenter",()=>{
    vid4.style.opacity="1"
    ser4.style.zIndex="1"
    ser5.style.zIndex="0"
})
ser4.addEventListener("mouseleave",()=>{
    vid4.style.opacity="0"
    ser4.style.zIndex="0"
})
ser5.addEventListener("mouseenter",()=>{
    vid5.style.opacity="1"
    ser5.style.zIndex="1"
})
ser5.addEventListener("mouseleave",()=>{
    vid5.style.opacity="0"
    ser5.style.zIndex="0"
})
ser6.addEventListener("mouseenter",()=>{
    vid6.style.opacity="1"
    ser6.style.zIndex = "1"
})
ser6.addEventListener("mouseleave",()=>{
    vid6.style.opacity="0"
    ser6.style.zIndex = "0"
})
ser7.addEventListener("mouseenter",()=>{
    vid7.style.opacity="1"
    ser7.style.zIndex = "1"
})
ser7.addEventListener("mouseleave",()=>{
    vid7.style.opacity="0"
    ser7.style.zIndex = "0"
})
page15.addEventListener("mouseenter",()=>{
    p15.style.transform = "scaleY(2) translateY(-170px)"
})

