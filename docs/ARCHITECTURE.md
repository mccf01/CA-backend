# Arquitetura do Sistema

## Objetivo

Este documento descreve a arquitetura adotada no backend do Projeto Carrinho, apresentando as responsabilidades de cada camada, o fluxo de uma requisição, os princípios arquiteturais utilizados e as boas práticas que devem ser seguidas durante o desenvolvimento.

O objetivo é garantir que o projeto permaneça organizado, escalável e de fácil manutenção conforme novas funcionalidades forem sendo implementadas.

---

# Visão Geral

O Projeto Carrinho utiliza uma arquitetura em camadas (Layered Architecture), organizada por responsabilidades.

Cada camada possui apenas uma função específica e não deve assumir responsabilidades pertencentes a outras partes do sistema.

A comunicação entre as camadas ocorre sempre de cima para baixo.

```text
Cliente

↓

Routes

↓

Middlewares

↓

Controllers

↓

Services

↓

Repositories

↓

Prisma ORM

↓

PostgreSQL
```

---

# Princípios da Arquitetura

A arquitetura foi construída seguindo alguns princípios fundamentais.

* Separação de responsabilidades
* Baixo acoplamento
* Alta coesão
* Código reutilizável
* Facilidade para testes
* Facilidade de manutenção
* Segurança desde a arquitetura

Cada componente do sistema deve possuir apenas uma responsabilidade.

---

# Organização do Projeto

A estrutura principal do backend será semelhante à seguinte:

```text
src/

├── modules/
│   ├── auth/
│   ├── users/
│   ├── locais/
│   ├── programacoes/
│   ├── escalas/
│   └── ...
│
├── middlewares/
│
├── shared/
│
├── config/
│
├── types/
│
└── index.ts
```

Cada módulo possui seus próprios arquivos internos.

Exemplo:

```text
modules/

usuarios/

├── controllers/
├── services/
├── repositories/
├── routes/
├── schemas/
├── types/
└── index.ts
```

Essa organização permite que novas funcionalidades sejam adicionadas sem impactar os demais módulos.

---

# Camadas da Aplicação

## Routes

As rotas são responsáveis apenas por definir os endpoints da API.

Também são responsáveis por aplicar os middlewares necessários.

As rotas não devem conter regras de negócio.

---

## Middlewares

Os middlewares executam tarefas comuns antes que a requisição alcance o Controller.

Exemplos:

* autenticação
* autorização
* validação
* tratamento de erros
* rate limiting
* logging

Cada middleware deve possuir apenas uma responsabilidade.

---

## Controllers

Controllers representam a entrada da regra de negócio.

Suas responsabilidades são:

* receber a requisição
* extrair parâmetros
* chamar Services
* devolver respostas HTTP

Controllers não devem:

* acessar o banco
* utilizar Prisma
* implementar regras de negócio
* validar permissões complexas

---

## Services

Os Services concentram toda a regra de negócio da aplicação.

Exemplos:

* autenticação
* cadastro
* login
* geração de escalas
* recorrência
* validações
* regras administrativas

Sempre que existir uma regra de negócio, ela deve ficar nesta camada.

Services nunca devem depender do Express.

---

## Repositories

Repositories são responsáveis pelo acesso aos dados.

Apenas esta camada pode utilizar o Prisma ORM.

Repositories não devem conter regras de negócio.

Sua única responsabilidade é persistência de dados.

---

## Prisma ORM

O Prisma atua como camada de comunicação com o PostgreSQL.

Nenhuma outra camada deve acessar diretamente o banco de dados.

Toda comunicação deve passar pelos Repositories.

---

## PostgreSQL

O PostgreSQL é o banco de dados principal do sistema.

Toda persistência permanente acontece nesta camada.

---

# Fluxo de uma Requisição

Quando um cliente realiza uma chamada para a API, o fluxo acontece da seguinte maneira:

```text
Cliente

↓

Express

↓

Routes

↓

Middlewares

↓

Controller

↓

Service

↓

Repository

↓

Prisma

↓

PostgreSQL

↓

Resposta
```

Cada camada executa apenas sua responsabilidade antes de encaminhar a execução para a próxima.

---

# Arquitetura Modular

O sistema é dividido em módulos independentes.

Exemplo:

* Auth
* Usuários
* Locais
* Programações
* Escalas

Cada módulo possui sua própria estrutura interna.

Isso reduz acoplamento e facilita manutenção.

---

# Gerenciamento de Dependências

As dependências devem seguir sempre o mesmo sentido.

```text
Routes

↓

Controllers

↓

Services

↓

Repositories
```

Nunca realizar chamadas no sentido contrário.

Por exemplo:

Repository nunca deve chamar Service.

Controller nunca deve chamar Repository diretamente.

---

# Tratamento de Erros

Erros devem ser tratados através de um Middleware Global.

Services podem lançar exceções.

Controllers não devem conter grandes blocos de tratamento de erro.

O Middleware Global será responsável por transformar exceções em respostas HTTP padronizadas.

---

# Segurança

A arquitetura foi projetada considerando segurança desde o início.

As principais estratégias incluem:

* autenticação via JWT
* cookies HttpOnly
* RBAC
* proteção contra IDOR
* validação de entrada
* rate limiting
* middleware global de erros

Cada camada participa da estratégia de segurança respeitando sua responsabilidade.

---

# Escalabilidade

A arquitetura permite crescimento gradual.

Novos módulos podem ser adicionados sem alterar os módulos existentes.

Novas regras de negócio permanecem concentradas nos Services.

Novas tabelas permanecem isoladas através dos Repositories.

---

# Boas Práticas

Durante o desenvolvimento devem ser seguidas as seguintes regras:

* Nunca acessar o Prisma fora dos Repositories.
* Nunca colocar regras de negócio em Controllers.
* Nunca acessar diretamente o banco de dados.
* Evitar duplicação de código.
* Criar funções pequenas e reutilizáveis.
* Manter tipagem forte em TypeScript.
* Cada classe ou arquivo deve possuir apenas uma responsabilidade.
* Favorecer composição em vez de duplicação.
* Manter baixo acoplamento entre módulos.

---

# Evolução da Arquitetura

A arquitetura foi planejada para evoluir de forma incremental.

Novas funcionalidades devem respeitar os padrões definidos neste documento.

Caso seja necessária uma alteração estrutural significativa, a decisão deve ser registrada no documento **DECISIONS.md** antes da implementação.

---

# Documentos Relacionados

* DOMAIN.md
* DATABASE.md
* SECURITY.md
* API.md
* DECISIONS.md
* AGENTS.md
* README.md
