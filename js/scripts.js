fetch('https://api.example.com/data')
 .then(response => response.json())
 .then(data => {
  // Faça algo com os dados recebidos
 })
 .catch(error => {
  console.error('Erro:', error);
 });