//Exibir uma mensagem assim que a pagina abre
alert("Promoção do dia! 50% de desconto em todos os produtos.");

//Exercicio 2- criar um botão que ao clicar mostra uma mensagem ao usuario
function exibirMensage() {
    alert("Você ganhou mais um descontinho! 15% se pagar a vista.");
    //aqui to exibindo essa mensagem para o DEV, mostrando qual método estou usando
    //muito usado para que possamos saber  que esta acontecendo quando no thebug não da pra entender
    console.log("A página executou o método exibirMensage")
}

//Exercício 3- criar uma calculadora
//OPERADORES (+ - * /)
//FUNCTIOM é uum método -sempre ter o nome do que vai fazer

function realizarCalculo() {
    //let é uma variável para dentro da função
    //var é usado fora de function, pois é global
    //const é usado quando o valor dele NÃO vai mudar nunca
    let numero1 = parseInt(prompt("Informe o primeiro valor:"));
    let numero2 = parseInt(prompt("Informe o segundo valor:"));
    somar(numero1, numero2);
    subtrair(numero1, numero2);
    dividir(numero1, numero2);
    multiplicar(numero1, numero2);
}

// valor1 e valor2 são parâmetros
function somar(valor1, valor2) {
    //operação
    let resultado = valor1 + valor2;
    //exibir no console
    console.log("O resultado da soma entre " + valor1 + " e " + valor2 + " é: " + resultado);
}

function subtrair(valor1, valor2) {
    let resultado = valor1 - valor2;
    console.log("O resultado da subtração entre " + valor1 + " e " + valor2 + " é: " + resultado);
}

function dividir(valor1, valor2) {
    let resultado = valor1 / valor2;
    console.log("O resultado da divisão entre " + valor1 + " e " + valor2 + " é: " + resultado);
}

function multiplicar(valor1, valor2) {
    let resultado = valor1 * valor2;
    console.log("O resultado da multiplicação entre " + valor1 + " e " + valor2 + " é: " + resultado);
}

//Calcular "funcional"
var valor1 = "";
var valor2 = "";
var operacao = "";

function guardarNumero(valor) {
    //O ! é negação do que estiver escrito depois
    if (!operacao) {
        valor1 += valor;
        console.log(valor1);
    } else {
        valor2 += valor;
        console.log(valor2);
    }
}

function guardarOperacao(operacaoE) {
    operacao = operacaoE;
}

function limpar() {
    valor1 = "";
    valor2 = "";
    operacao = "";
}

function calcular() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;

    if (operacao == "+") {
        resultado = valor1 + valor2;
    } else if (operacao == "-") {
        resultado = valor1 - valor2;
    } else if (operacao == "*") {
        resultado = valor1 * valor2;
    } else if (operacao == "/") {
        resultado = valor1 / valor2;
    }

    alert("Resultado: " + resultado);
    limpar();
}

//Execício 4 - verificar se o usuário dormiu suficiente
function identificarSonoUsuario() {
    const horasDormidas = parseInt(prompt("Informe quantas horas você dormiu esta noite:"));
    const horasMinimasSono = 8;
    if (horasDormidas < horasMinimasSono) {
        alert("Você não dormiu o suficiente, melhore! ");
    } else {
        alert("Parabéns! Você dormiu o suficiente.");
    }
}

//Exercício 5 - Criar um método que retorna o horario em formato 12h
function idtHoraFormato12() {
    const qtdHora = prompt("Informe o horario atual");
    if (qtdHora > 12) {
        alert("São " + (qtdHora - 12) + "pm.");
    } else {
        alert("São " + qtdHora + "am.");
    }
}

//Testando operadores OU|| / E&&
function testandoOperadorOu() {
    const nro = prompt("Informe um digite");
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

//Exercício 6 - verificar idade, ingresso ou lista
function verificarEntradaBalada() {
    const idade = prompt("Informe sua idade");
    const lista = prompt("Você tem nome na lista? Digite Sim ou Não");
    const ingresso = prompt("Você tem ingresso? Diga Sim ou Não");

    if (idade >= 18 && (lista.toUpperCase() == "SIM" || ingresso.toUpperCase() == "SIM")) {
        alert("Entrada permitida!");
    } else {
        alert("Entrada negada.");
    }
}

//MELHORADA
function verificarEntradaMelhorada() {
    if (prompt("Informe sua idade") >= 18 &&
        (prompt("Você tem nome na lista? Digite Sim ou Não").toUpperCase() == "SIM" ||
            prompt("Você tem ingresso? Diga Sim ou Não").toUpperCase() == "SIM")) {
        alert("Entrada permitida!");
    } else {
        alert("Entrada negada.");
    }
}

//Exercício 7 - verificar meia entrada
function verificarMeiaEntrada() {
    const idadeUsuario = prompt("Informe sua idade:");
    if ( idadeUsuario <= 12 || idadeUsuario >= 60) {
        alert("Você tem direito a meia-entrada.");
    } else {
        alert("Você paga a entrada inteira.");
    }
}

//Exercício 8 - Obrigar a informar nome
function identificarNomeUsuario() {
    const nomeUsuario = prompt("Informe seu nome:");
    if (!nomeUsuario) {
        alert("Entrada negada. É OBRIGATÓRIO você informar seu nome!");
        //para que fique em loop e peça novamente o nome do usuario, chamamos a function de novo.
        identificarNomeUsuario();
    } else {
        alert("Entrada liberada!");
    }
}