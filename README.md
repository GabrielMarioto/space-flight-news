<h1 align="center">
<a href="https://lab.coodesh.com/public-challenges/back-end-challenge-2021"> <i>Space Flight News 🏅</i> </a> <br>
</h1>
<p align="center"> projeto desenvolvido para um back-end challenge da coodesh </p>

<h3 align="center">
<img src="https://img.shields.io/static/v1?label=NodeJS&message=Backend&color=339933&style=for-the-badge&logo=Node.js"/> 
<img src="https://img.shields.io/static/v1?label=Express&message=Framework&color=000000&style=for-the-badge&logo=Express"/>
<img src="https://img.shields.io/static/v1?label=TypeScript&message=LANGUAGE&color=3178C6&style=for-the-badge&logo=TypeScript"/> 
<img src="https://img.shields.io/static/v1?label=PostgreSQL&message=DB&color=4169E1&style=for-the-badge&logo=PostgreSQL"/>
</h3>

---

<p align="center">
 <a href="#-o-que-é-">O que é</a> | 
 <a href="#%EF%B8%8F-projeto">Projeto</a> |
 <a href="#-pré-requisitos">Pré-Requisitos</a> |
 <a href="#-rodando-o-projeto">Rodando o Projeto</a> |
 <a href="#%EF%B8%8F-tecnologias">Tecnologias</a> |
 <a href="#-autor">Autor</a> 
</p>

# ❓ O que é ?

Este é um desafio para que possamos ver as suas habilidades como Back-end Developer. <br>

Nesse desafio você deverá desenvolver uma REST API que utilizará os dados do projeto Space Flight News, uma API pública com informações relacionadas a voos espaciais. O projeto a ser desenvolvido por você tem como objetivo criar a API permitindo assim a conexão de outras aplicações. <br>
As instruções de entrega e apresentação do challenge estão no final deste Readme (=

> This is a challenge by [Coodesh](https://coodesh.com/)

## Instruções iniciais obrigatórias

- Trabalhar em um repositório em seu usuário ou utilizar o seu github pessoal (não esqueça de colocar no readme a referência a este challenge);
- O projeto deverá ser desenvolvido com uma das tecnologias a seguir: Node.js | C# .NET Core | PHP Laravel | RubyOnRails | Go Lang | Python FastAPI | SpringBoot Kotlin | Rust;
- Criar um banco de dados grátis MongoDB usando Atlas: https://www.mongodb.com/cloud/atlas ou banco de dados grátis MySQL no Heroku: https://elements.heroku.com/addons/jawsdb ou banco de dados grátis Postgres no Heroku: https://elements.heroku.com/addons/heroku-postgresql; (Recomendável usar Drivers oficiais para integração com o DB)

## Modelo de Dados:

Para a definição do modelo consulte a rota [GET]/articles da API, nesta rota você pode ver a estrutura como o exemplo:

```js
{
    "id": 0,
    "featured": false,
    "title": "string",
    "url": "string",
    "imageUrl": "string",
    "newsSite": "string",
    "summary": "string",
    "publishedAt": "string",
    "launches": [
      {
        "id": "string",
        "provider": "string"
      }
    ],
    "events": [
      {
        "id": "string",
        "provider": "string"
      }
    ]
  }
```

# 🖥️ Projeto

Nessa etapa você deverá construir uma API Restful com as melhores práticas de desenvolvimento, baseada na API Space Flight News. Para isso você deve executar os passos a seguir:

### Obrigatório 1

Você deverá desenvolver as seguintes rotas:

- [GET]/: Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News"

- [GET]/articles/: Listar todos os artigos da base de dados, utilizar o sistema de paginação para não sobrecarregar a REQUEST

- [GET]/articles/{id}: Obter a informação somente de um artigo

- [POST]/articles/: Adicionar um novo artigo

- [PUT]/articles/{id}: Atualizar um artigo baseado no id

- [DELETE]/articles/{id}: Remover um artigo baseado no id

### Obrigatório 2

Para alimentar o seu banco de dados você deve criar um script para armazenar os dados de todos os artigos na Space Flight News API.

### Obrigatório 3

Além disso você precisa desenvolver um CRON para ser executado diariamente às 9h e armazenar em seu os novos artigos ao seu banco de dados.
(Para essa tarefa você poderá alterar o seu modelo de dados)

### Diferencial 1

Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

### Diferencial 2

Configurar um sistema de alerta se houver algum falha durante a sincronização dos artigos;

### Diferencial 3

Descrever a documentação da API utilizando o conceito de Open API 3.0;

### Diferencial 4

Escrever Unit Tests para os endpoints da API;

# 🎲 Pré-Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/pt-br/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

# 🎮 Rodando o Projeto

```bash
# Clone este repositório
$ git clone https://github.com/GabrielMarioto/space-flight-news.git

# Acesse a pasta do projeto no terminal
$ cd space-flight-news

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev
```

# 🛠️ Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [NodeJs](https://nodejs.org/pt-br/)
- [Express](https://expressjs.com/pt-br/)
- [Eslint](https://eslint.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/#/)

# 🙍 Autor

<h1 align="center">
<a href="https://www.linkedin.com/in/gabriel-marioto/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/50884596?v=4" width="100px;" alt=""/>
 <br/><br/>
 
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/gabrielmarioto)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/gabrielmarioto_)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-marioto/)

</h1>
