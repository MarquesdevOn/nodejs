// comando para instalar o express 
// npm install express --save

// agora vamos carregar o express


const express = require("express")

const app = express()


// Rotas é um caminho para aplicação
// rota principal da aplicacao 

app.get("/", function(req,res){
    //enviamos uma mengsam
    res.send("Seja vem vindo ao meu app!")

})

// para criar caminhos/ rotas
// NAO ESQUECR DE COLOCAR A BARRA ("/...")
app.get("/home", function(req,res){
    res.send("Está é minha página HOME")
})

// criar outra rota / pagina/ caminho
app.get("/contato", function(req,res){
    res.send("CONTATO: 0000-000")
})

// rota com parametro 
// exibir o nome da pessoa
// para criar o parametro /:
/*
app.get("/ola/:nome", function(req,res){
    res.send("Ola")
})
*/
/*
app.get("/ola/:nome", function(req,res){
    res.send(req.params)
})
*/
//exibir o nome da pessoa
// acessar um unico parametro: req.params.nomedoparametro
app.get("/test/:nome", function(req,res){
    //res.send("Olá "+req.params.nome)
    //estilizando
    res.send("<h1>Seja bem vindo(a): </h1>" +req.params.nome)
})

app.get("/dados/:nome/:cor", function(req,res){
    //estilizando
    res.send("<h1>Olá " +req.params.nome+ "</h1>")
})


app.get("/oi/:cargo/:nome", function(req,res){
    res.send(req.params) // quando vc digitar na qrl ele envia os dados atraves do http para o servidor nodejs
})



// para abrir servidor no express bem mais simples 
// function de callback
app.listen(8081,function(){

    console.log("Servidor rodando na url http://localhost:8081")

}) 