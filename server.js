const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public/html'));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});