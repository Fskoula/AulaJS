let frutas = ["limão","banana","maracujá","manga","melancia","melão","bergamota","laranja","morango","kiwi","tomate","lichia","uva","pêra","maçã"];
// outra forma de criar uma função, de forma otimizada
//let atualizaLista = () => {}

//aqui vamos esvaziar a lista para atualizar ela com a nova fruta adicionada
function atualizarListaFrutas() {
    let ulFrutas = document.querySelector(".frutas");
    ulFrutas.innerHTML = "";

    frutas.forEach(fruta => {
        // let liFruta = document.createElement("li"); -CRIA A LI
        // liFruta.innerHTML = fruta; -COLOCA AFRUTA NA LI
        // ulFrutas.appendChild(liFruta); -COLOCA A LI CRIADA DENTRO DA UL

        // aqui é uma forma mais pratica de escrever tudo isso
        ulFrutas.innerHTML += `<li>${fruta}</li>`
    })
}
atualizarListaFrutas()

//1- Adiciona evento "click" no botão ✔
//2- Pega valor do input e salva em uma variável ✔
//3- Adicionar o valor da variável dentro da lista ✔
//4- Roda a função atualizarListraFrutas ✔
document.querySelector(".btn-fruta").addEventListener("click", () =>{
    let input = document.querySelector(".nome-fruta");
    frutas.push(input.value);
    atualizarListaFrutas();
})

/* **************************************************
EXERCÍCIO 1*/
let series = ["Game of Thrones", "Gilmore Girls", "Severence", "Breaking Bad"];

function atualizarListaSeries() {
    // seleciona a lista de series e guarda o elemento html 
    // dentro da variavel
    let ulSeries = document.querySelector(".filmes");
    // limpa a ul
    ulSeries.innerHTML = "";
    // coloca as series com a nova adicionada, 
    // sem repetir a lista toda de novo
    series.forEach(filme => {
        ulSeries.innerHTML += `<li>${filme}</li>`;
    })
}
atualizarListaSeries();

document.querySelector(".btn-series").addEventListener("click", ()=> {
    let input = document.querySelector(".nome-series");
    series.push(input.value);
    atualizarListaSeries();
})
