import express from 'express';

const app = express();
app.use(express.json());

const clientes = [
    {id: 1, nome: "Matheus", cpf:  "123.456.789-00"},
    {id: 2, nome: "Lima", cpf:  "987.654.321-00"}
]

const funcionarios = [
    {id: 1, nome: "Maria", cpf:  "123.456.789-00"},
    {id: 2, nome: "Joana", cpf:  "987.654.321-00"}
]


//rota principal
app.get('/', (req, res) =>{
    res.status(200).send("Pagina inicial");
})

//Consultar todos os clientes
app.get('/clientes', (req, res) =>{
    res.status(200).json(clientes)
})

//Consultar todos os funcionarios
app.get('/funcionarios', (req, res) =>{
    res.status(200).json(funcionarios)
})

//cadastrar novo cliente
app.post('/clientes', (req, res) =>{
    clientes.push(req.body)
    res.status(200).send("Cliente cadastrado com sucesso!")
})

//cadastrar novo funcionarios
app.post('/funcionarios', (req, res) =>{
    funcionarios.push(req.body)
    res.status(200).send("Funcionario cadastrado com sucesso!")
})


export default app