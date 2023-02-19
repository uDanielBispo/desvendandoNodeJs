const express = require('express');
const app = express(); /*recebe função express que vem do modulo express e cria uma 
                       cópia inteira do framework*/
const porta = 8081;
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./modulos/Post');

// config
    // template engine
    app.engine('handlebars', handlebars.engine({defaultlLayout:'main'}));
    app.set('view engine', 'handlebars');
    // body parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());


// porta raiz
app.get("/", function (req, res) {
   //res.sendFile(__dirname /*Traz o diretorio raiz do projeto*/ + "/html/index.html");
   res.render('registro');
   
});

// porta cadastro
app.post('/add', function(req, res){
    Post.create({
        nome: req.body.nome,
        email: req.body.email,
        sexo: req.body.sexo,
        senha: req.body.senha
    }).then(function(){
        res.send("Usuario registrado!")
    }).catch(function(erro){
        res.send("Houve um erro: "+erro);
    });
})

// exemplo de GET
app.get("/html/index.html", function (req, res) {
    res.sendFile(__dirname+"/html/index.html");
 });

app.get("/ola/:nome/:cargo", function (req, res) {
    res.send("olá " + req.params.cargo + " " + req.params.nome);
});











//Precisa ser a ultima linha 
app.listen(porta, function(){
    console.log('Servidor funcionando na url http://localhost:' + porta);
});

