//aqui estamos dando para o btn o valor de button
let btn = document.querySelector("button");
//nameless function
btn.addEventListener("click",() => console.log("oi"));

/*Da pra criar uma variável com a expressão labda
let mostrarOi = () => {
console.log(oi)}*/

/*Mudar fundo - acrescenta uma class que muda o fundo (CSS)*/
document.addEventListener("keydown", (e) => {
    if(e.key == "f"){
        document.querySelector("html").classList.toggle("fundo-cor");
    }
})

// Meche o quadrado
document.addEventListener("keydown", (e)=> {
    if(e.key == "ArrowUp"){
        document.querySelector(".quadrado").classList.toggle("slide-rotate-hor-top");
    }
})
// Meche o quadrado 2
document.addEventListener("keydown", (e)=> {
    if(e.key == "ArrowRight"){
        document.querySelector(".quadradoDois").classList.toggle("slide-right");
    }
})
// Pula a bola
document.addEventListener("keydown", (e)=>{
    if(e.key == " "){
        document.querySelector(".bola").classList.toggle("bounce-top");
    }
})
// Relampago Marquinhos
document.addEventListener("keydown", (e)=>{
    if(e.key == "r"){
        document.querySelector(".bolaDois").classList.toggle("slide-out-blurred-left");
    }
})