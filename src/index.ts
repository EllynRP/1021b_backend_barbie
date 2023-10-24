import express from 'express'
const app = express()
app.use(express.json())
//Tenho que ter uma rota post para cadastrar um filme
app.post('/filmes',(req,res)=>{
    res.status(201).send("Filme cadastrado com sucesso")
})
app.get('/filmes',(req,res)=>{
    res.send("Filmes Listados com sucesso")
})
//Tenho que iniciar o servidor na porta 3000
app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})
//        res.status(201).send(filme)