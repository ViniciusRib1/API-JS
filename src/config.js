const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Login");

//Checar conecção do banco de dados
connect.then(() => {
    console.log("Conectado com sucesso no banco de dados!")
})
.catch(() => {
    console.log("Houve um erro")
})