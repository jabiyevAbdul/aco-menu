// let btn1=document.querySelector(".btn1")
// let btn2=document.querySelector(".btn2")
// let btn3=document.querySelector(".btn3")
// let p1=document.querySelector(".p1")
// let p2=document.querySelector(".p2")
// let p3=document.querySelector(".p3")

// btn1.onclick=function(){
//     p1.style.display="block"
//     p2.style.display="none"
//     p3.style.display="none"
// }
// btn2.onclick=function(){
//     p1.style.display="none"
//     p2.style.display="block"
//     p3.style.display="none"
// }
// btn3.onclick=function(){
//     p1.style.display="none"
//     p2.style.display="none"
//     p3.style.display="block"
// }
// ------------------------------

let btn=document.querySelectorAll("button")
let p=document.querySelectorAll("p")

for(let i=0;i<btn.length;i++){
    btn[i].onclick=function(){
        for(let j=0;j<p.length;j++){
            p[j].classList.remove("active")
        }
        this.nextElementSibling.classList.toggle("active")
    }
}