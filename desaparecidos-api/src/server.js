const express = require('express');
const cors = require('cors'); // 1. Importe o pacote cors
const app = express();
const criancaRoutes = require('./routes/crianca.routes');

// 2. Habilite o CORS para todas as requisições
// Isso permitirá que seu frontend em localhost:3001 se comunique com a API
app.use(cors());

app.use(express.json());

//Usando as Rotas de crianças desaparecidas
app.use('/criancas', criancaRoutes);

//Porta onde o servidor vai rodar
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
});
