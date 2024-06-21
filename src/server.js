const express = require('express');
const app = express();
const pasth = require("path")
const PORT = process.env.PORT || 3000;

app.use(express.static('view/Html'));
app.use(express.static('view/CSS'));



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});