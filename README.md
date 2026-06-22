# Projeto Carrinho - Backend

Sistema backend para gerenciamento de escalas de Testemunho Público.

O projeto foi desenvolvido com foco em boas práticas de desenvolvimento, arquitetura limpa, segurança e manutenibilidade, servindo tanto como ferramenta de estudo quanto como projeto de portfólio.

---

# Objetivos

O Projeto Carrinho tem como objetivo facilitar o gerenciamento das escalas de Testemunho Público de uma congregação, permitindo que administradores organizem programações, locais e voluntários de forma simples, segura e eficiente.

Além das funcionalidades do sistema, o projeto busca demonstrar conhecimentos em:

* Arquitetura em Camadas
* Repository Pattern
* TypeScript
* Express
* Prisma ORM
* PostgreSQL
* Docker
* Segurança de APIs REST
* Boas práticas de desenvolvimento Backend

---

# Stack

## Backend

* Node.js
* TypeScript
* Express

## Banco de Dados

* PostgreSQL
* Prisma ORM

## Infraestrutura

* Docker
* Docker Compose
* MailHog

## Testes

* Jest

---

# Arquitetura

O projeto utiliza uma arquitetura em camadas:

```text
Routes
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

Cada camada possui uma responsabilidade única, facilitando manutenção, testes e evolução do sistema.

---

# Funcionalidades Planejadas

* Autenticação com JWT
* Cookies HttpOnly
* Controle de acesso (RBAC)
* Cadastro de Usuários
* Cadastro de Locais
* Cadastro de Programações
* Escalas recorrentes
* Controle de permissões
* Recuperação de senha
* Envio de e-mails
* Auditoria de ações
* API REST

---

# Segurança

O projeto considera diversas práticas modernas de segurança:

* JWT
* Cookies HttpOnly
* bcrypt
* RBAC
* Rate Limiting
* Proteção contra SQL Injection
* Proteção contra XSS
* Proteção contra CSRF
* Validação contra IDOR
* Middleware global de erros

---

# Estrutura do Projeto

```text
src/
prisma/
docs/
tests/

README.md
AGENTS.md
docker-compose.yml
package.json
```

---

# Executando o Projeto

## 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
```

## 2. Instalar dependências

```bash
npm install
```

## 3. Iniciar os containers

```bash
docker compose up -d
```

## 4. Gerar o Prisma Client

```bash
npx prisma generate
```

## 5. Aplicar o banco

```bash
npx prisma db push
```

## 6. Executar em desenvolvimento

```bash
npm run dev
```

---

# Scripts

| Script                | Descrição                             |
| --------------------- | ------------------------------------- |
| `npm run dev`         | Executa o servidor em desenvolvimento |
| `npm run build`       | Compila o projeto                     |
| `npm run start`       | Executa a versão compilada            |
| `npm run test`        | Executa os testes                     |
| `npm run applyPrisma` | Aplica o schema ao banco              |
| `npm run resetPrisma` | Reseta o banco via Prisma             |
| `npm run resetDB`     | Reinicia os containers Docker         |

---

# Documentação

A documentação completa encontra-se na pasta `docs`.

* Arquitetura
* Regras de Negócio
* Banco de Dados
* API
* Segurança
* Deploy
* Docker

---

# Agentes de IA

Este projeto possui um arquivo `AGENTS.md` contendo instruções específicas para assistentes de IA, incluindo padrões arquiteturais, convenções de código e boas práticas de desenvolvimento.

---

# Licença

Projeto desenvolvido para fins educacionais e de portfólio.
