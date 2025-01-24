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

//aqui usamos muito else if, mas como a variálvel é a mesma 
//só muda o valor, é melhor usar switch.
//o else if é mais usado quando muda a variável e o valor
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

//Exemplo do switch
function calcularComSwitch() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    switch (operacao) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            resultado = valor1 / valor2;
            break;
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
//Exercício 9- IMC(Indice de Massa Corporal)
function getIndiceCorporal() {
    const pesoUsuario = prompt("Qual seu peso?");
    let alturaUsuario = prompt("Qual sua altura?");

    //Verificar se esta em centimetros e converter para metros
    if (alturaUsuario.indexOf(".") == -1 && alturaUsuario.length > 1) {
        alturaUsuario = alturaUsuario / 100;
    }
    const valorIMC = pesoUsuario / (alturaUsuario * alturaUsuario);
    
    if (valorIMC <= 18.5) {
        alert("Você esta abaixo do peso.");
    } else if (valorIMC > 18.5 && valorIMC <= 25) {
        alert("Você esta no peso ideal.");
    } else if (valorIMC > 25 && valorIMC <= 30) {
        alert("Você esta acima do peso.");
    } else {
        alert("Você esta obeso(a)");
    }
}

//Exercício 10 - Switch - converter dias da semana em números
function diaDaSemana() {
    const DOMINGO = 1, SEGUNDA = 2, TERCA = 3, QUARTA = 4, QUINTA = 5, SEXTA = 6, SABADO = 7;
    getDiaUsuario = parseInt(prompt ("Descubra que dia da semana é. Coloque um número de 1 a 7:"));

    switch (getDiaUsuario) {
        case DOMINGO:
            alert("Hoje é Domingo");
            break;
        case SEGUNDA:
            alert("Hoje é Segunda-feira");
            break;
        case TERCA:
            alert("Hoje é Terça-feira");
            break;
        case QUARTA:
            alert("Hoje é Quarta-feira");
            break;
        case QUINTA:
            alert("Hoje é Quinta-feira");
            break;
        case SEXTA:
            alert("Hoje é Sexta-feira");
            break;
        case SABADO:
            alert("Hoje é Sábado");
            break;
        default:
            alert("Dia invalido");
    }
}

//Exercício 11 - Calcular valor compra 

function valorCompraUsuario() {
    let valorTotalCompra = parseFloat(prompt ("Qual o valor total da sua compra?"));
    let cupomDesconto = prompt ("Caso tenha, insira o cupom de desconto:");
    let formaPagamente = prompt ("Qual sera a forma de pagamento? Digite: Pix - 1 | Cartão de Débito - 2 | Cartão de Crédito - 3 | Boleto - 4");
    let freteCompra = prompt ("Como você quer fazer o frete? Digite: Padrão - 1 | Expresso - 2");
    const PIX = 1, CARTAODEBITO = 2, CARTAOCREDITO = 3, BOLETO = 4, FRETEPADRAO = 1, FRETEEXPRESSO = 2;

    switch (formaPagamente) {
        case  PIX:
            (10 * valorTotalCompra) / 100;
            break;
        case CARTAODEBITO:
            (5 * valorTotalCompra) / 100;          
            break;
        case CARTAOCREDITO:
            valorTotalCompra = valorTotalCompra + (valorTotalCompra * 0.02);
            break;
        case BOLETO:
            valorTotalCompra 
            break;    
    }
}

function calcularPrecoProduto(preco) {
    const preco = parseFloat(prompt("Informe o valor da sua compra:"));
    let valorTotal = calcularFormaPagamento(preco);
}

function
