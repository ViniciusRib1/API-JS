const { MongoClient } = require('mongodb');

// URL de conexão
const url = 'mongodb://localhost:27017';
// Nome do banco de dados
const dbName = 'minhaDatabase';

async function main() {
  // Cliente MongoDB
  const client = new MongoClient(url);

  try {
    // Conectar ao servidor
    await client.connect();
    console.log("Conectado ao servidor MongoDB");

    const db = client.db(dbName);
    // Aqui você pode começar a fazer operações com o banco de dados
    // Exemplo: const collection = db.collection('minhaColecao');

  } catch (err) {
    console.error(err);
  } finally {
    // Fechar a conexão quando terminar
    await client.close();
  }
}

main().catch(console.error);