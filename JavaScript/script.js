alert("Promoção do dia! 50% de desconto em todos os produtos.");

//Testando operadores OU|| / E&&
function testandoOperadorOu() {
    const nro = prompt("Informe um número");
    if (nro == 5 || nro == 10) {
        alert("O número é 5 ou 10");
    } else {
        alert("Outro número");
    }
}

function testandoOperadorE() {
    const idade = prompt("Informe sua idade:");
    const idadeAmigo = prompt("Informe a idade do seu amigo:");
    if (idade >= 18 && idadeAmigo >= 18) {
        alert("Vocês estão liberados para entrar");
    } else {
        alert("Infelizmente você não estão liberados");
    }
}

//usado quando tem uma quantidade expecifica de vezes, faz até tanto.
function testeFor() {
    for (let contador = 0; contador < 10; contador++) {
        console.log(contador);
    }
}

//usado quando quero que seja dinamico, fique fazendo até alguma ação.
function testeWhile() {
    let numero = 0;
    while (!isNaN(numero)) {
        numero = prompt("Informe apenas números:");
    }
    alert("Você não digitou um número.\nAplicação encerrada.");
}

//whileBreakEContinue
function whileBreakEContinue() {
    let numero = 0;
    while (numero != 7) {
        numero = prompt("Informe um numero:");
        if (numero == 5) {
            console.log("Achou um easter egg e pode sair do loop!");
            break;
        } else if (numero == 3) {
            console.log("Não impreme esse número");
            continue;
        }
        console.log(numero);
    }
}

//Array - é uma lista
//solicitar 10 números para o usuario e colocar em lista

function solicitarNumero() {
    let arrayList = [];
    for(let i = 0; i < 10; i++) {
        arrayList.push(prompt("Digite um número para lista"));
    }
   console.log(arrayList);
}

//Aprendendo mais sobre manipulação de HTML
function alterarTexto() {
    let div = document.getElementById("minhaDiv");
    let campo = document.getElementById("campoTexto");
    div.innerHTML = "<p> O texto digitado pelo usuário é: "+campo.value+"</p>";
}

function validarResultado() {
    let resultado = document.getElementById("resultado");
    let resultadoConta = document.getElementById("resultadoConta");
    const RESULTADOVALIDO = 4;
    
    if (resultadoConta.value == RESULTADOVALIDO) {
        resultado.innerHTML = "<p class='sucesso'> Parabéns, você acertou!</p>";
    } else {
        resultado.innerHTML = "<p class='erro'>Resposta errada, tente outra vez</p>";
    }

}

function incluirTexto() {
    const textoUsuario = document.getElementById('texto-usuario');
    const conteudoTexto = document.getElementById('conteudo-texto');
    const texto = document.createElement('p');
    texto.innerText = textoUsuario.value;
    conteudoTexto.appendChild(texto);
    textoUsuario.value = '';
}

function limpar() {
    const conteudoTexto = document.getElementById('conteudo-texto');
    conteudoTexto.innerHTML = '';
}