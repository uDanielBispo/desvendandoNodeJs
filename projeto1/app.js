const express = require('express');
const app = express(); /*recebe função express que vem do modulo express e cria uma 
                       cópia inteira do framework*/
const porta = 8081;
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');



// config
    // template engine
    app.engine('handlebars', handlebars.engine({defaultlLayout:'main'}));
    app.set('view engine', 'handlebars');

    // conexao com banco mysql
    const sequelize = new Sequelize('LoginECadastro', 'root', '1234', {
        host: "localhost",
        dialect: 'mysql',
    
    });


app.get("/", function (req, res) {
   //res.sendFile(__dirname /*Traz o diretorio raiz do projeto*/ + "/html/index.html");
   res.render('registro');
   
});


app.get("/ola/:nome/:cargo", function (req, res) {
    res.send("olá " + req.params.cargo + " " + req.params.nome);
});











//Precisa ser a ultima linha 
app.listen(porta, function(){
    console.log('Servidor funcionando na url http://localhost:' + porta);
});

