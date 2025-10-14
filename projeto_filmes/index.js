// constante express carrega uma função que carrega as funções do pacote 'express'
const express = require('express')
// com a chamada da função express, as funções do pacote são carregadas em app
const app = express()

// Criamos um endpoint (padrão de acesso) do tipo GET, ou seja, 
// um endereço por onde nosso servidor consegue receber requisições HTTP do tipo GET
// GET = requisição que não envia nenhuma informações, simplesmente solicita
// uma resposta

// localhost:3000/hey
// req (request): se refere ao "corpo" da requisição: as informações que são enviadas
// res (response): se referir a resposta da requisição; res.send() configura um valor
// que podemos enviar como resposta
app.get('/hey', (req, res) => {
    res.send("recebi a requisicao GET \o/")
})

app.listen(3000,() => console.log("up and running"))

// escrevendo os dados dos filmes no formato JSON
let filmes = [
    // primeiro filme
    {titulo: "Forrest Gump", sinopse: "Quarenta anos da histório dos Estados ..."},
    // segundo filme
    {titulo: "Um Sonho de Liberdade", sinopse: "Em 1946, um jovem bem sucedido..."},
    // terceiro filme
    {titulo: "Senhor dos Anéis", sinopse: "Tem que jogar o anel no vulcão..."}
]

// requisição do tipo GET, ou seja, o Cliente apenas recebe uma resposta
// localhost:3000/filmes
app.get("/filmes", (req,res) => {
    res.json(filmes)
})

// O express não considera a leitura de json() por padrão
app.use(express.json());

// requisição do tipo POST, ou seja, o Cliente também envia informações além de receber uma resposta
app.post("/filmes", (req,res) => {
    // obtemos os dados no corpo da requisição, ou seja, os dados enviados pelo Cliente
    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;
    // monta um objeto chave/valor para representar o novo filme
    const filme = {titulo: titulo, sinopse: sinopse}
    // adiciona o novo filme à base
    filmes.push(filme)
    // respondemos a requisição do Cliente, enviando a lista de filmes atualizada
    res.json(filmes)
})