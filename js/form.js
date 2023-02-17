// Define uma função para salvar os dados do formulário no LocalStorage
function salvarDados() {
    const nome = document.getElementById('nome').value;
    const unidade = document.getElementById('unidade').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;
    const perecivel = document.getElementById('perecivel').checked;
    const validade = document.getElementById('validade').value;
    const fabricacao = document.getElementById('fabricacao').value;
  
    // Armazena os dados no LocalStorage como um objeto JSON
    localStorage.setItem('produto', JSON.stringify({
      nome: nome,
      unidade: unidade,
      quantidade: quantidade,
      preco: preco,
      perecivel: perecivel,
      validade: validade,
      fabricacao: fabricacao
    }));
  }
  
  // Define uma função para recuperar os dados do formulário do LocalStorage
  function carregarDados() {
    const produto = localStorage.getItem('produto');
  
    if (produto) {
      // Se os dados existem no LocalStorage, carrega os valores dos campos
      const dados = JSON.parse(produto);
      document.getElementById('nome').value = dados.nome;
      document.getElementById('unidade').value = dados.unidade;
      document.getElementById('quantidade').value = dados.quantidade;
      document.getElementById('preco').value = dados.preco;
      document.getElementById('perecivel').checked = dados.perecivel;
      document.getElementById('validade').value = dados.validade;
      document.getElementById('fabricacao').value = dados.fabricacao;
    }
  }
  
  // Adiciona um evento ao formulário para salvar os dados no LocalStorage ao ser enviado
  const formulario = document.querySelector('form');
  formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    salvarDados();
    alert('Dados salvos no LocalStorage.');
  });
  
  // Carrega os dados do formulário do LocalStorage ao carregar a página
  carregarDados();
  
  // Define uma função para verificar a validade do produto e atualizar a mensagem
  function checkValidity() {
    const validade = new Date(document.getElementById('validade').value);
    const hoje = new Date();
    if (validade < hoje) {
      document.getElementById('validade').setCustomValidity('O produto está vencido!');
    } else {
      document.getElementById('validade').setCustomValidity('');
    }
  }
  