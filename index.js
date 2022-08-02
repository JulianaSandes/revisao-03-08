/* configurações do servidor - início */
//carregar o módulo express

const express = require('express')
// executar o módulo express
const app = express()
// definir a pasta dos arquivos ejs
app.set('views', './')
//criar uma instancia local
app.listen(3050 , ()=>{
console.log("servidor local em http://localhost:3050")
})
/* configurações do servidor - fim */

/* configuração do banco de dados - início*/
//importar o módulo moongose
const mongoose = require('mongoose')
//configurar o script de conexão


/* configuração do banco de dados - fim*/
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:tom505160@fiaptecnico.vknqm.mongodb.net/?retryWrites=true&w=majority')
} 
/* rota para a requisição /*/
app.get('/', (req, res)=>{
    conexao()
    //res.send('Funcionando')
    res.render('index.ejs', {nome:"Alunos Feiosos", turma:"2EMIA", disciplina:"LP2"})
})
