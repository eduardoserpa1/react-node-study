const express = require("express")
const rotaLivro = require("./rotas/livro")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"})); //Permite que todos os domínios acessem nossa API

app.use('/livros', rotaLivro)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})