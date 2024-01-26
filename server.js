const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota padrão
app.get('/', (req, res) => {
   res.send('Coisans');
});

app.get('/coisas', (req, res) => {
          res.send('Exemplo de mais uma rota sla')
})

// Inicia o servidor
app.listen(PORT, () => {
   console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});