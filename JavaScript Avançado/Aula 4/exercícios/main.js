// PARTE 1
// Exercício 1 -  Alterar o texto de um H1 para “ola mundo” ✔
document.querySelector(".texto").innerText = "Olá Mundo";

// 2 - Trocar a cor de fundo de uma lista 2 itens
let musica = document.querySelector(".musica");
musica.style.backgroundColor = "grey";

// 3 - Alterar o value de um input para “Digite algo aqui” ✔
document.querySelector(".valor").value = "Digite algo aqui";

// 4 - Alterar a altura, largura e a cor de fundo de uma div para transformar 
// ela em um quadrado roxo
let quadrado = document.querySelector(".quadrado");
quadrado.style.backgroundColor = "purple";
quadrado.style.height= "100px";
quadrado.style.width = "100px";

// PESQUISA/DESAFIO sobre createElement / appendChild
// let li = document.createElement("li");
// li.innerHTML = "METAL";
// document.querySelector(".musica").appendChild(li);

// PARTE 2
// Exercício - 1 Criar um botão e adicionar o evento de click para Exibir um alert
document.querySelector(".botao").addEventListener("click",()=>{
    console.log("Olá Mundo!");
})
// 2 - Criar um elemento <p> com o nome de um animal, adicionar o evento “mouseover”
// para mudar o texto para um emoji do animal
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

//  3 - Criar uma div com formato de um quadrado e adicionar um evento de “dblclick” 
// (double click) para transformar ela em um circulo (border-radius = 50%)
let quaBola = document.querySelector(".quaBola");
quaBola.style.backgroundColor = "blue";
quaBola.style.height= "100px";
quaBola.style.width = "100px";

document.querySelector(".quaBola").addEventListener("dblclick",()=>{
    quaBola.style.borderRadius = "50%";
})

// 4 - Criar um botão que ao entrar com o mouse dentro dele (mouseenter) ele se
// move para esquerda (se quiser mudar para direita fique a vontade)
// document.querySelector(".move").addEventListener("mouseenter", ()=>{

// })

// DESAFIO - Criar 1 input com a classe “nome” e um botão, ao clicar no botão
// mostrar em um alerta uma mensagem de bem vindo com o valor do input
let input = document.querySelector(".nome");
let button = document.querySelector(".button").addEventListener("click", ()=>{
    console.log(input.value);
})

/* DESAFIO - Pesquisar sobre o class list e o class toggle:
    Usando CSS, HTML e JS faça:
-Crie uma div com formato retangular
-Usando o toggle da class list faça o que com um click o usuario consiga
mudar o formato do retangulo para um quadrado azul com as bordas levemente
arredondadas */

let retangulo = document.querySelector(".retangulo");

document.querySelector(".retangulo").addEventListener("click", (e)=>{
    e.target.classList.toggle("mudarQuadrado");
});

// PARTE 3
// 1 -  Criar uma lista de nomes e exibir no console
let nomes = ["Aurora","Amora","Belco","Eduardo"];
console.log(nomes);

// Adicione um nome ao final da lista usando .push()
nomes.push("Fernanda");

// Remover o último nome da lista usando .pop()
nomes.pop();

// Remover o primeiro nome da lista usando .shift()
nomes.shift();

/* Criar uma lista de animais, usar o foreach para mostrar 
todos eles no console */
let animais = ["Gato", "Bode", "Onça"];
animais.forEach(animal => console.log(animal));

/* Criar uma lista de nome de frutas, usar o foreach para mostrar 
todas elas no console */
let frutas = ["Amora", "Morango", "Uva", "Manga"];
frutas.forEach(fruta => console.log(fruta));

/*Desafio - Criar uma lista de nomes de musicas, usando querySelector, 
<ul>, <li> e forEach mostrar todas essas músicas no site.*/

let playlist = ["música 1", "música 2", "música 3", "música 4"];

let ul = document.querySelector(".newli").createElement("li");
playlist.forEach(musi => console.log(musi));
document.querySelector(".newli").appendChild(li);

