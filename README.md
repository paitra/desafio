Para construir essa aplicação web, será necessário utilizar algumas tecnologias e ferramentas, como HTML, CSS, JavaScript, Bootstrap (para o design responsivo), jQuery (para validação de formulário e manipulação do JSON no LocalStorage) e, opcionalmente, algum framework de front-end, como React ou Angular mais irei utilizar codelgniter.

Para a estruturação do projeto,será utilizado arquitetura MVC (Model-View-Controller), separando a lógica de negócio (Controller) da interface do usuário (View) e dos dados (Model).

Segue um passo a passo para a implementação das páginas:

- [ ] Criação da página de cadastro (View):
    - [x] Criar um arquivo HTML para a página de cadastro e outro para a página de listagem.
    - [ ] Incluir o menu lateral com os links para as duas páginas e um sistema de navegação estrutural.
    - [ ] Criar um formulário com os campos descritos, seguindo as regras de validação e as especificações de formato de dados e apresentação.
    - [ ] Adicionar botões de salvar e cancelar e definir suas funcionalidades.
- [ ] Validação do formulário:
    - [ ] Utilizar o jQuery para a validação do formulário, exibindo mensagens de erro ou obrigatoriedade dos campos que não atendam aos critérios especificados.
    - [ ] Fazer a validação de campo monetário com máscara de preenchimento e limite de casas decimais.
    - [ ] Adicionar a regra de negócio para a validação da quantidade, de acordo com a unidade de medida selecionada.
    - [ ] Manipulação do JSON no LocalStorage (Model):
    - [ ] Criar um objeto JSON para armazenar os dados dos itens cadastrados, com as propriedades correspondentes aos campos do formulário.
    - [ ] Implementar a lógica para adicionar, editar e remover itens do JSON, fazendo uso do LocalStorage para persistir os dados.
    - [ ] Exibir notificações de sucesso ou erro para o usuário após as operações de adição, edição ou remoção de itens.
- [ ] Criação da página de listagem (View):
    - [ ] Criar uma tabela com os dados dos itens cadastrados e adicionar links para editar e excluir cada um.
    - [ ] Implementar a funcionalidade de exclusão, exibindo uma mensagem de confirmação antes de efetivar a remoção.
    - [ ] Adicionar um botão para adicionar novo item, redirecionando o usuário para a página de cadastro.
- [ ] Integração entre as páginas e manipulação dos dados (Controller):
    - [ ] Criar um arquivo JavaScript para a lógica de negócio, responsável por integrar as páginas de cadastro e listagem e manipular os dados.
    - [ ] Implementar as funcionalidades de adição, edição e remoção de itens, fazendo uso das funções já criadas para manipular o JSON no LocalStorage.
    - [ ] Adicionar a funcionalidade de redirecionamento para a página de cadastro com os dados do item selecionado para edição.
