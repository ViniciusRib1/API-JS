document.addEventListener('DOMContentLoaded', () => {
  const outputDiv = document.getElementById('output');

  // Função para buscar dados da API
  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch('http://localhost:3000/'); // Substitua pela URL da sua API
      const data = await response.json();
      
      // Exibir os dados na página
      displayData(data);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      outputDiv.innerHTML = 'Erro ao buscar dados da API.';
    }
  };

  // Função para exibir dados na página
  const displayData = (data) => {
    outputDiv.innerHTML = '<h2>Dados da API:</h2>';
    
    // Construir a exibição dos dados (ajuste conforme a estrutura dos seus dados)
    data.forEach(item => {
      const listItem = document.createElement('div');
      listItem.innerHTML = `<strong>${item.nome}</strong>: ${item.descricao}`;
      outputDiv.appendChild(listItem);
    });
  };

  // Chamar a função para buscar dados da API quando a página carregar
  fetchDataFromAPI();
});