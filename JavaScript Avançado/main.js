//Objeto e suas caracteristicas
let aluno1 = {
    nome: 'Fulano',
    idade: 30,
    altura: 1.8,
    andar() {
        console.log("Aluno está andando")
    }
}

let aluno2 = {
    nome: 'Ciclano',
    idade: 25,
    altura: 1.6,
    andar() {
        console.log("Aluno está andando")
    }
}

let aluno3 = {
    nome: 'Beltrana',
    idade: 28,
    altura: 1.7,
    andar() {
        console.log("Aluna está andando")
    }
}

//lista de todos os alunos
let alunos = [aluno1, aluno2, aluno3]

/*aqui a gente pega todos os alunos da 
lista que tem mais ou igual 26 anos*/
alunos.filter(aluno => aluno.idade >= 26)
    .forEach(aluno => console.log(aluno.nome))

//------------------------ exemplosClasses -------------------------

class Pessoa {
    nome
    idade
    cpf
    mostrarDados() {
        //Interpola qualquer codigo javascript no meio da string
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Cpf: ${this.cpf}`)
    }
}


let pessoa1 = new Pessoa()
pessoa1.nome = "Maria"
pessoa1.idade = 32
pessoa1.cpf = '555.444.333-52'

pessoa1.mostrarDados()

//sobreescrever o metodo
class Aluno extends Pessoa {
    matricula

    mostrarDados() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Cpf: ${this.cpf}`)
        //incluindo isso aqui
        console.log(`Matricula: ${this.matricula}`)
    }
}

let a1 = new Aluno()

class Professor extends Pessoa {
    disciplina
}

//sobrecarga de metodo
function calcularArea(lado) {
    return lado * lado;
}

function calcularArea(base, altura) {
    return base * altura
}
function calcularArea(lado1, lado2, lado3) {
    return lado1 * lado2 * lado3
}

calcularArea(12)

//adicionar eventos usando herança do document

// let teste = document.getElementById("teste")
// teste.addEventListener("mouseover", ()=>{
//    alert("TEM CERTEZA QUE QUER SAIR? ಥ_ಥ")
// })

//Adiciona o evento de: "quando sair do documento ele mostra o
//alerta"
// document.addEventListener("mouseleave",()=>{
//     alert("TEM CERTEZA? (⊙ˍ⊙)")
// })

//Busca do CEP
document.querySelector(".buscar").addEventListener("click", () => {
        let cep = document.querySelector(".cep").value
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(resposta => resposta.json())
            .then((payload) => {
                document.querySelector(".cidade").innerText = "Cidade: " + payload.localidade
                document.querySelector(".bairro").innerText = "Bairro: " + payload.bairro
                document.querySelector(".estado").innerText = "Estado: " + payload.uf
            })
})

//Calculo do dolar - usando json

fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => resposta.json())
.then (payload => document.querySelector(".dolar").value = payload.USDBRL.bid)

document.querySelector(".converter").addEventListener("click", () => {
        let valor1 = Number(document.querySelector(".real").value)

        fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
        .then(resposta => resposta.json()).then((payload) => {
                let dolar = Number(payload.USDBRL.bid) * valor1
                document.querySelector(".resultado").value = dolar
        })
})

//usando os dados passados pelo usuario
/*document.querySelector(".converter").addEventListener("click", () => {
        let valor1 = Number(document.querySelector(".real").value)
        let valor2 = Number(document.querySelector(".dolar").value)

        document.querySelector(".resultado").value = valor1 * valor2
})*/