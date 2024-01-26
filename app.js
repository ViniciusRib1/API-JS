const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar solicitações JSON
app.use(express.json());

// Middleware de log simples
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Rota padrão
app.get('/', (req, res) => {
  res.send('API muito daora e saúdavel');
});

// Rota com parâmetro
app.get('/api/produtos/:id', (req, res) => {
  const { id } = req.params;
  res.json({ mensagem: `Obtendo informações do produto com ID ${id}` });
});

// Rota para lidar com solicitações POST
app.post('/api/produtos', (req, res) => {
  const { nome, preco } = req.body;
  // Lógica para criar um novo produto no banco de dados, por exemplo
  res.json({ mensagem: `Produto ${nome} criado com sucesso!` });
});

// Rota para lidar com solicitações PUT
app.put('/api/produtos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;
  // Lógica para atualizar o produto com o ID fornecido no banco de dados
  res.json({ mensagem: `Produto ${id} atualizado com sucesso!` });
});

// Rota para lidar com solicitações DELETE
app.delete('/api/produtos/:id', (req, res) => {
  const { id } = req.params;
  // Lógica para excluir o produto com o ID fornecido do banco de dados
  res.json({ mensagem: `Produto ${id} excluído com sucesso!` });
});

// Rota para lidar com qualquer outra solicitação
app.use((req, res) => {
  res.status(404).send('Página não encontrada!');
});

// Middleware de erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});