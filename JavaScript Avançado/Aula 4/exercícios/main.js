// PARTE 1
// Exercício 1 -
let textoH1 = document.querySelector(".texto").innerText = "Olá Mundo";

// 2 -
let musica = document.querySelector(".musica");
musica.style.backgroundColor = "grey";

// 3 -
document.querySelector(".valor").value = "Digite algo aqui"

// 4 -
let quadrado = document.querySelector(".quadrado");
quadrado.style.backgroundColor = "purple";
quadrado.style.height= "100px"
quadrado.style.width = "100px"

// PESQUISA sobre createElement / appendChild
let li = document.createElement("li");
li.innerHTML = "Metal";
document.querySelector(".musica").appendChild(li);

// PARTE 2
// Exercício - 1
document.querySelector(".botao").addEventListener("click",()=>{
    console.log("Olá Mundo!");
})
// 2 -
let p = document.createElement("p");
p.innerText = "Wanna see a happy cat?";
document.body.appendChild(p);

document.querySelector("p").addEventListener("mouseover",()=>{
    if (p.innerText == "Wanna see a happy cat?") {
        p.innerText = "😺"; 
    } else {
        p.innerText = "Wanna see a happy cat?";
    }
})
//  3 -
// let quaBola = document.querySelector(".quaBola");
// quaBola.style.backgroundColor = "blue";
// quaBola.style.height= "100px";
// quaBola.style.width = "100px";

// document.querySelector(".quaBola").addEventListener("dbclick",()=>{
    
// })
// 4 -
