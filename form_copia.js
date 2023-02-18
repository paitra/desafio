const form = document.querySelector('form');
const produtosTableBody = document.getElementById('produtos-table-body');

// Função para checar a validade do produto
function checkValidity() {
  const validade = new Date(document.getElementById('validade').value);
  const hoje = new Date();
  if (validade < hoje) {
    alert('Atenção: o produto está vencido!');
  }
}

// Função para salvar os dados no localStorage
function saveData() {
  const nome = document.getElementById('nome').value;
  const unidade = document.getElementById('unidade').value;
  const quantidade = document.getElementById('quantidade').value;
  const preco = document.getElementById('preco').value;
  const perecivel = document.getElementById('perecivel').checked;
  const validade = document.getElementById('validade').value;
  const fabricacao = document.getElementById('fabricacao').value;

  // Recupera os dados já cadastrados no localStorage
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  // Cria um objeto com os dados do novo produto
  const produto = {
    nome,
    unidade,
    quantidade,
    preco,
    perecivel,
    validade,
    fabricacao
  };

  // Adiciona o novo produto ao array de produtos
  produtos.push(produto);

  // Salva o array atualizado no localStorage
  localStorage.setItem('produtos', JSON.stringify(produtos));

  // Limpa o formulário
  document.getElementById('nome').value = '';
  document.getElementById('unidade').value = 'kg';
  document.getElementById('quantidade').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('perecivel').checked = false;
  document.getElementById('validade').value = '';
  document.getElementById('validade').disabled = true;
  document.getElementById('fabricacao').value = '';
}

// Função para carregar os produtos salvos no LocalStorage e exibir na tabela
function carregarProdutos() {
  let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
  let tabelaProdutos = document.getElementById('tabela-produtos');

  // Limpa a tabela
  tabelaProdutos.innerHTML = '';

  // Preenche a tabela com os produtos salvos
  produtos.forEach((produto, index) => {
    let row = tabelaProdutos.insertRow();

    row.insertCell().textContent = produto.nome;
    row.insertCell().textContent = produto.unidade;
    row.insertCell().textContent = produto.quantidade;
    row.insertCell().textContent = 'R$ ' + produto.preco;
    row.insertCell().textContent = produto.validade || '-';
    row.insertCell().textContent = produto.fabricacao;

    // Cria os botões de ação (Editar e Excluir)
    let cellAcoes = row.insertCell();

    let btnEditar = document.createElement('button');
    btnEditar.setAttribute('type', 'button');
    btnEditar.setAttribute('class', 'btn btn-sm btn-warning mr-1');
    btnEditar.setAttribute('data-toggle', 'modal');
    btnEditar.setAttribute('data-target', '#modalEditar');
    btnEditar.setAttribute('data-index', index);
    btnEditar.textContent = 'Editar';

    let btnExcluir = document.createElement('button');
    btnExcluir.setAttribute('type', 'button');
    btnExcluir.setAttribute('class', 'btn btn-sm btn-danger');
    btnExcluir.setAttribute('data-toggle', 'modal');
    btnExcluir.setAttribute('data-target', '#modalExcluir');
    btnExcluir.setAttribute('data-index', index);
    btnExcluir.textContent = 'Excluir';

    cellAcoes.appendChild(btnEditar);
    cellAcoes.appendChild(btnExcluir);
  });
}
// Função para carregar os dados do produto selecionado no formulário de edição
function carregarProdutoParaEditar(index) {
  let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
  let produto = produtos[index];

  document.getElementById('index-editar').value = index;
  document.getElementById('nome-editar').value = produto.nome;
  document.getElementById('unidade-editar').value = produto.unidade;
  document.getElementById('quantidade-editar').value = produto.quantidade;
  document.getElementById('preco-editar').value = produto.preco;
  document.getElementById('perecivel-editar').checked = produto.perecivel;
  document.getElementById('validade-editar').value = produto.validade;
  document.getElementById('fabricacao-editar').value = produto.fabricacao;
}

// Função para atualizar os dados do produto editado no LocalStorage
function atualizarProduto(index) {
  const nome = document.getElementById('nome-editar').value;
  const unidade = document.getElementById('unidade-editar').value;
  const quantidade = document.getElementById('quantidade-editar').value;
  const preco = document.getElementById('preco-editar').value;
  const perecivel = document.getElementById('perecivel-editar').checked;
  const validade = document.getElementById('validade-editar').value;
  const fabricacao = document.getElementById('fabricacao-editar').value;

  const produto = {
    nome,
    unidade,
    quantidade,
    preco,
    perecivel,
    validade,
    fabricacao
  };

 // Verifica se já há produtos salvos no LocalStorage
 let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');

 // Atualiza o produto na posição do array correspondente ao índice recebido
 produtos[index] = produto;

 // Salva o array atualizado no LocalStorage
 localStorage.setItem('produtos', JSON.stringify(produtos));

 // Atualiza a tabela com os dados atualizados
 carregarProdutos();
}

// Função para excluir o produto selecionado do LocalStorage
function excluirProduto(index) {
  // Verifica se já há produtos salvos no LocalStorage
  let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');

  // Remove o produto na posição do array correspondente ao índice recebido
  produtos.splice(index, 1);

  // Salva o array atualizado no LocalStorage
  localStorage.setItem('produtos', JSON.stringify(produtos));

  // Atualiza a tabela com os dados atualizados
  carregarProdutos();
}
// Carrega os produtos salvos no LocalStorage e exibe na tabela ao carregar
document.addEventListener('DOMContentLoaded', function () {
  carregarProdutos();
});

// // Configura o evento para o botão de adicionar
// const btnAdicionar = document.getElementById('btn-adicionar');
// btnAdicionar.addEventListener('click', function () {
//   adicionarProduto();
// });

// // Configura o evento para o botão de editar
// const btnEditar = document.getElementById('btn-editar');
// btnEditar.addEventListener('click', function () {
//   const index = document.getElementById('index-editar').value;
//   atualizarProduto(index);
// });

// // Configura o evento para o botão de excluir
// const btnExcluir = document.getElementById('btn-excluir');
// btnExcluir.addEventListener('click', function () {
//   const index = document.getElementById('index-excluir').value;
//   excluirProduto(index);
// });

// Evento disparado ao enviar o formulário
form.addEventListener('submit', (

  event) => {
  event.preventDefault();

  // Verifica a validade do produto, se necessário
  const perecivel = document.getElementById('perecivel').checked;
  if (perecivel) {
    checkValidity();
  }

  // Salva os dados no localStorage
  saveData();

  // Exibe os dados na tabela
  displayData();

  // Limpa o formulário
  form.reset();
});

// Exibe os dados salvos na tabela ao carregar a página
displayData();
