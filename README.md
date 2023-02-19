 Para a tarefa de construir uma aplicação web para cadastro de itens, serão necessárias as seguintes etapas:
 
- [x] Desenvolvimento das duas páginas principais:
	- [x] Página de cadastro de itens
	- [x] Página de listagem de itens
	
![image](https://user-images.githubusercontent.com/63022256/219971031-28c3abfd-e642-41f4-a010-3a6c4bc8a852.png)

- [X] Implementação de um menu lateral, localizado à esquerda em ambas as páginas:
	- [x] Com links para cada uma das páginas principais
	- [x] Com sistema de navegação estrutural
	
![image](https://user-images.githubusercontent.com/63022256/219971118-b454dbb0-16dd-478f-9838-20fad0e4528b.png)


- [x] Criação de um formato JSON para persistência dos dados:
	- [x] - [x] Utilização da LocalStorage para armazenamento dos dados

![image](https://user-images.githubusercontent.com/63022256/219971681-1272b7b1-3110-41fa-bf99-6aac4551f546.png)	
	- [x] Adição, remoção e edição de itens no JSON
	
![image](https://user-images.githubusercontent.com/63022256/219971732-bffca3f2-09d6-4cc8-9065-cb2d2bc72451.png)

- [x] Desenvolvimento do formulário de cadastro de itens:

![image](https://user-images.githubusercontent.com/63022256/219971948-78a21aa2-995c-478e-a8e5-ed897abce1e2.png)

	- [x] Criação de um formulário com validação conforme os campos descritos
	
![image](https://user-images.githubusercontent.com/63022256/219971995-8f154fc2-e55f-478b-8f3a-53e26f2f90d5.png)


	- [x] Exibição clara dos campos que apresentem erro de validação ou obrigatoriedade
	
![image](https://user-images.githubusercontent.com/63022256/219972056-e02fe8fe-fb16-45d1-b348-de5916e9d0fa.png)

- [x] Campos do formulário:

![image](https://user-images.githubusercontent.com/63022256/219972137-0ae312e7-f2e0-41d6-badf-3325b9ebd8d3.png)

	- [x] Nome do item: Texto, obrigatório, com tamanho máximo de 50 caracteres (somente letras)
	- [x] Unidade de medida: Enumeração, obrigatório
	- [x] Quantidade: Numérico, variando conforme a regra da unidade medida
	- [x] Preço: Monetário, obrigatório, com validações de campo monetário
	- [x] Produto perecível: Checkbox booleano, obrigatório
	- [x] Data de validade: Data, só é obrigatório caso o produto seja perecível
	- [x] Data de fabricação: Data, obrigatório
- [x] Desenvolvimento da listagem de itens:

![image](https://user-images.githubusercontent.com/63022256/219972192-c0675e05-20bd-4994-a049-199e16150f8d.png)

	- [x] Exibição de uma tabela com os itens cadastrados
	- [x] Link para edição e exclusão de cada item
	- [x] Botão para adicionar um novo item
	- [x] Confirmação de exclusão de item
	- [x] Exibição de notificação de sucesso ou erro após exclusão
- [x] Avaliação das tecnologias e conceitos utilizados:

![image](https://user-images.githubusercontent.com/63022256/219972301-467bf38b-6756-4ac6-a5d1-2747168d3587.png)

	- [x] HTML 5
	- [x ] CSS
	- [x] JavaScript
	- [x] Utilização de LocalStorage

