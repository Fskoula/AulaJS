alert("Promoção do dia! 50% de desconto em todos os produtos.");

function testeFor() {
    for (let contador = 0; contador < 10; contador++) {
        console.log(contador);
    }
}

function testeWhile() {
    let numero = 0;
    while (!isNaN(numero)) {
        numero = prompt("Informe apenas números:");
    }
    alert("Você não digitou um número.\nAplicação encerrada.");
}

