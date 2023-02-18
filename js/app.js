//Menu Retratio
$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  });
  //atributos personalizados (data-display e data-hidden)
  $('.menu').on('click', function (e) {
    e.preventDefault();
    $('#' + $(this).data('hidden')).addClass('d-none');
    $('#' + $(this).data('display')).removeClass('d-none');
    formReset();
  });
  carregarProdutos();
});



// Função para salvar os dados no localStorage
function inserir() {
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
}

// Função para carregar os produtos salvos no LocalStorage e exibir na tabela
function carregarProdutos() {
  let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
  let tabelaProdutos = document.getElementById('tabela-produtos');
  // Limpa a tabela
  tabelaProdutos.innerHTML = '';

  if (produtos.length > 0) {
    // Preenche a tabela com os produtos salvos
    produtos.forEach((produto, index) => {
      let row = tabelaProdutos.insertRow();

      row.insertCell().textContent = produto.nome;
      row.insertCell().textContent = produto.unidade;
      row.insertCell().textContent = produto.quantidade || '-';
      row.insertCell().textContent = 'R$ ' + produto.preco;
      row.insertCell().textContent = (produto.perecivel == true ? 'sim' : 'não');

      row.insertCell().textContent = produto.validade || '-';
      row.insertCell().textContent = produto.fabricacao || '-';
;
    });
  } else {
    tabelaProdutos.innerHTML = '<tr><td colspan="8">Nenhum produto cadastrado.</td></tr>';
  }
  $('input[name=edit]').remove();
}

// Evento disparado ao enviar o formulário
$(document).on('submit', 'form', (event) => {
  event.preventDefault();

 // Salva os dados no localStorage
 if ($('input[name=edit]').length > 0) {
  atualizar($('input[name=edit]').val());
} else {
  inserir();
}
carregarProdutos();
//exibe a listagem
$('#list-action').trigger('click');
});