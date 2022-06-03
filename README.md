# Teste de estágio Intuitive Care - Fullstack JS

### Aplicação CRUD que puxa os dados de uma planilha .csv no servidor para o frontend.


## Protótipo

![](https://raw.githubusercontent.com/dgsouzav/intuitive-care-teste/main/Prot%C3%B3tipo%20Front%20IC%20(Copy)frontIC.png)

## ToDo List
  - [x] Criar servidor com rota que realiza uma busca textual na lista de cadastro de operadoras (obtido na tarefa de prepação) e retorne as linhas que mais se assemelham;
  - Criar uma interface usando o framework Vue.js que permita a um usuário:
    - [x] Visualizar os dados do csv acima em uma tabela de dados (datagrid/datatable);
    - [x] Realizar a pesquisa textual para qualquer uma das colunas do csv;
    - [x] Criar novos cadastros de operadoras;
    - [x] Deletar um cadastro;
    - [x] Editar um cadastro existente.

 ## Tecnologias Utilizadas:
  - Express
  - Vue.js
  - Node.js
  - MongoDB
  - Mongoose
  - Babel


# Como executar:

1. Clone o repositório para sua máquina (pelo menos o código fonte do servidor);
2. Instale as dependências do projeto(Node.js, MongoDB, Mongoose, Vue, Babel);
3. Para iniciar o servidor execute `npm run start` na pasta back.
4. Para iniciar o Cliente  execute `npm run serve` na pasta front.

## Coisas que faltam:

  - [X] Implementar o CRUD no frontend.