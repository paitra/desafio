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
  //formatação do campo preço
  $("#preco").maskMoney({ allowNegative: true, thousands: '.', decimal: ',', affixesStay: false });
  carregarProdutos();

});
function formReset() {
  $('#reset').trigger('click');
}
// Ação mediada
function onChangeUnidadeMedida() {
  var quantidadeInput = document.getElementById("quantidade");
  var unidade = document.getElementById("unidade").value;
  var medidaAddon = document.getElementById("medida-addon");
  
  switch (unidade) {
    case "Lt (Litro)":
      quantidadeInput.setAttribute("type", "number");
      quantidadeInput.setAttribute("step", "1");
      quantidadeInput.setAttribute("max", "9999");
      quantidadeInput.setAttribute("min", "1");
      medidaAddon.innerHTML = "Lt";
      break;
    case "KG (Quilograma)":
      quantidadeInput.setAttribute("type", "number");
      quantidadeInput.setAttribute("step", "0.01");
      quantidadeInput.setAttribute("max", "9999.99");
      quantidadeInput.setAttribute("min", "0.01");
      medidaAddon.innerHTML = "kg";
      break;
    case "Un (Unidade)":
      quantidadeInput.setAttribute("type", "number");
      quantidadeInput.setAttribute("step", "1");
      quantidadeInput.setAttribute("max", "9999");
      quantidadeInput.setAttribute("min", "1");
      medidaAddon.innerHTML = "Un";
      break;
    default:
      quantidadeInput.setAttribute("type", "text");
      quantidadeInput.setAttribute("step", "");
      quantidadeInput.setAttribute("max", "");
      quantidadeInput.setAttribute("min", "");
      medidaAddon.innerHTML ='';
    }};

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


// Função para salvar os dados no localStorage
function inserir() {
  const nome = document.getElementById('nome').value;
  const quantidade = document.getElementById('quantidade').value;
  const unidade = document.getElementById('unidade').value;
  const preco = document.getElementById('preco').value;
  const perecivel = document.getElementById('perecivel').checked;
  const fabricacao = document.getElementById('fabricacao').value;
  const validade = document.getElementById('validade').value;


  // Recupera os dados já cadastrados no localStorage
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  // Cria um objeto com os dados do novo produto
  const produto = {
    nome,
    quantidade,
    unidade,
    preco,
    perecivel,
    fabricacao,
    validade

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
      row.insertCell().textContent = produto.quantidade || '-';
      row.insertCell().textContent = produto.unidade;
      row.insertCell().textContent = 'R$ ' + produto.preco;
      row.insertCell().textContent = (produto.perecivel == true ? 'sim' : 'não');
      row.insertCell().textContent = produto.fabricacao || '-';
      row.insertCell().textContent = produto.validade || '-';

      // Cria os botões de ação (Editar e Excluir)
      let cellAcoes = row.insertCell();

      let btnEditar = document.createElement('button');
      btnEditar.setAttribute('type', 'button');
      btnEditar.setAttribute('class', 'btn btn-sm btn-warning btn-edit mr-1');
      btnEditar.setAttribute('data-index', index);
      btnEditar.textContent = 'Editar';

      let btnExcluir = document.createElement('button');
      btnExcluir.setAttribute('type', 'button');
      btnExcluir.setAttribute('class', 'btn btn-sm btn-danger btn-delete');
      btnExcluir.setAttribute('data-index', index);
      btnExcluir.textContent = 'Excluir';

      cellAcoes.appendChild(btnEditar);
      cellAcoes.appendChild(btnExcluir);
    });
  } else {
    tabelaProdutos.innerHTML = '<tr><td colspan="8">Nenhum produto cadastrado.</td></tr>';
  }
  $('input[name=edit]').remove();
}
// Função para carregar os dados do produto selecionado no formulário de edição
function editar(index) {
  let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
  let produto = produtos[index];
  $('#form-action').trigger('click');
  // document.getElementById('index-editar').value = index;
  document.getElementById('nome').value = produto.nome;
  document.getElementById('quantidade').value = produto.quantidade;
  document.getElementById('unidade').value = produto.unidade;
  document.getElementById('preco').value = produto.preco;
  document.getElementById('perecivel').checked = produto.perecivel;
  document.getElementById('fabricacao').value = produto.fabricacao;
  document.getElementById('validade').value = produto.validade;

  $('form').append('<input type=hidden name=edit value=' + index + '>');
}
// Função para atualizar os dados do produto editado no LocalStorage
function atualizar(index) {

  const nome = document.getElementById('nome').value;
  const quantidade = document.getElementById('quantidade').value;
  const unidade = document.getElementById('unidade').value;
  const preco = document.getElementById('preco').value;
  const perecivel = document.getElementById('perecivel').checked;
  const fabricacao = document.getElementById('fabricacao').value;
  const validade = document.getElementById('validade').value;


  const produto = {
    nome,
    quantidade,
    unidade,
    preco,
    perecivel,
    fabricacao,
    validade

  };

  

  // Verifica se já há produtos salvos no LocalStorage
  let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');

  // Atualiza o produto na posição do array correspondente ao índice recebido
  produtos[index] = produto;
  console.log(produtos[index]);

  // Salva o array atualizado no LocalStorage
  localStorage.setItem('produtos', JSON.stringify(produtos));
}
// acão edite
$(document).on('click', '.btn-edit', function () {
  editar($(this).data('index'));
});
// acão delete mais confimação da ação
$(document).on('click', '.btn-delete', function () {
  Swal.fire({
    title: 'Deseja realmente excluir o produto?',
    showCancelButton: true,
    confirmButtonText: 'Sim',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      excluirProduto($(this).data('index'));
      Swal.fire('Removido!', '', 'success');
    }
  });
});
// Evento disparado ao enviar o formulário
$(document).on('submit', 'form', (event) => {
  event.preventDefault();
  // Verifica a validade do produto, se necessário
  const perecivel = document.getElementById('perecivel').checked;
  if (perecivel) {
    const validade = new Date(document.getElementById('validade').value);
    const hoje = new Date();
    if (validade < hoje) {
      Swal.fire('O produto está vencido!')
      return false;
    }
  }

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

