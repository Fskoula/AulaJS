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
    console.log("O resultado da soma entre "+valor1+" e "+valor2+" é: "+resultado);
}

function subtrair(valor1, valor2) {
    let resultado = valor1 - valor2;
    console.log("O resultado da subtração entre "+valor1+" e "+valor2+" é: "+resultado);
}

function dividir(valor1, valor2) {
    let resultado = valor1 / valor2;
    console.log("O resultado da divisão entre "+valor1+" e "+valor2+" é: "+resultado);
}

function multiplicar(valor1, valor2) {
    let resultado = valor1 * valor2;
    console.log("O resultado da multiplicação entre "+valor1+" e "+valor2+" é: "+resultado);
}

//Calcular "funcional"
var valor1 = ""; 
var valor2 = "";
var operacao = "";

function guardarNumero(valor) {
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

    alert("Resultado: "+resultado);
    limpar();
}

//Execício 4 - verificar se o usuário dormiu suficiente
function sonoUsuario () {
    const horasMinimaSono = 8;

    let horasDormidas = parseInt(prompt("Informe quantas horas você dormiu esta noite:"));
    if (horasDormidas >= horasMinimaSono) {
        alert("Parabéns! Você teve uma boa noite de sono.");
    } else {
        alert("Você não dormiu o suficiente, melhore!");
    }  
}