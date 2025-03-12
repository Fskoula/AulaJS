const axios = require('axios')

// axios.get('https://viacep.com.br/ws/89040296/json/')
// .then(response => {
//     let dados = response.data
//     console.log(dados.estado)
//     console.log(dados.ddd)
// }).catch(err => {
//     // mostra o erro ou uma mensagem pro usuario que deu erro
//     console.log(err)
// }).finally(f => {
//     // mostra no fim do código, pode mostrar mensagem, voltar para ultima pagina
//     console.log("ACABOU")
// })

// Usar a fake store API usar o axios para pesquisar o produto 6
// axios.get('https://fakestoreapi.com/products/6')
// .then(result => {
//     let titulo = result.data
//     let valor = result.data
//     console.log(`O preço do produto ${titulo.title}é R$ ${valor.price}`)
// })

// todos os produtos
// axios.get('https://fakestoreapi.com/products')
// .then(result => {
//     let dados = result.data
//     dados.forEach(dados => {
//         console.log(`ID: ${dados.id} - ${dados.title}`)
//     });
// })
let url = "https://pokeapi.co/api/v2/pokemon/ditto"
axios.get(url)
.then(res => {
    console.log(res.data)
})
.catch(err => {
    console.error(err); 
})

