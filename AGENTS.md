# QWEN.md

# Projeto Carrinho - Instruções para Agentes de IA

## Objetivo

Este projeto é um sistema backend para gerenciamento de escalas de Testemunho Público.

O objetivo é manter uma arquitetura limpa, modular, segura e de fácil manutenção.

A IA deve priorizar qualidade, legibilidade, segurança e consistência arquitetural acima da velocidade de implementação.

Sempre respeite os padrões já existentes no projeto.

---

# Stack

## Backend

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Docker
- Jest

## Banco de Dados

- PostgreSQL
- Prisma ORM

## Infraestrutura

- Docker Compose
- MailHog para testes de e-mail

---

# Arquitetura

O projeto utiliza arquitetura em camadas.

Toda requisição deve seguir obrigatoriamente o fluxo abaixo.

```
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

Nunca pule camadas.

Nunca acesse Prisma fora dos Repositories.

Nunca implemente regras de negócio nos Controllers.

---

# Controllers

Responsabilidades:

- Receber Request
- Extrair parâmetros
- Chamar Services
- Retornar Response

Controllers NÃO devem:

- acessar Prisma
- conter regras de negócio
- realizar autenticação
- realizar autorização
- conter consultas SQL
- acessar banco diretamente

Controllers devem permanecer pequenos e objetivos.

---

# Services

Toda regra de negócio pertence aos Services.

Exemplos:

- cadastro
- login
- recuperação de senha
- regras de recorrência
- geração de escalas
- validação de datas
- verificação de conflitos
- autorização baseada em RBAC
- prevenção de IDOR

Sempre que possível, Services devem ser independentes do Express.

---

# Repositories

Repositories são a única camada autorizada a acessar o Prisma.

Nunca utilize Prisma diretamente em:

- Controllers
- Services
- Middlewares

Repositories devem conter apenas acesso aos dados.

Não coloque regras de negócio nesta camada.

---

# Middlewares

Cada Middleware deve possuir apenas uma responsabilidade.

Exemplos:

- auth.middleware.ts
- role.middleware.ts
- validation.middleware.ts
- error.middleware.ts
- rateLimit.middleware.ts

Evite Middlewares específicos para entidades.

---

# Prisma

Utilizar Prisma apenas através dos Repositories.

Sempre utilizar tipagem forte.

Evitar consultas duplicadas.

Priorizar métodos reutilizáveis.

Sempre preferir recursos nativos do Prisma antes de escrever SQL manual.

---

# Segurança

Este projeto prioriza segurança desde a arquitetura.

Sempre considerar:

- JWT
- Cookies HttpOnly
- SameSite
- Secure
- bcrypt
- RBAC
- Least Privilege
- IDOR
- SQL Injection
- XSS
- CSRF
- Rate Limiting

Nunca remover validações existentes.

Nunca enfraquecer autenticação.

Nunca armazenar senha em texto puro.

Nunca expor stack traces em produção.

---

# RBAC

O sistema utiliza Role Based Access Control.

Atualmente existem quatro papéis.

## PUBLICADOR

Responsável pela utilização comum do sistema.

Pode:

- consultar suas escalas
- consultar programações
- atualizar seu próprio perfil
- confirmar participação
- cancelar participação quando permitido

Não pode acessar funcionalidades administrativas.

---

## SERVO

Possui todas as permissões do PUBLICADOR.

Além disso pode:

- criar escalas
- editar escalas
- remover escalas
- gerenciar locais
- executar tarefas administrativas delegadas

Não pode:

- criar programações
- alterar recorrências
- definir horários das programações

---

## ANCIAO

Possui todas as permissões do SERVO.

Além disso pode:

- criar programações
- editar programações
- remover programações
- definir horários
- configurar recorrências
- gerenciar usuários

---

## ROOT

Possui acesso total ao sistema.

Destina-se exclusivamente à administração técnica da plataforma.

Pode:

- acessar telas de configuração
- alterar parâmetros globais
- gerenciar configurações do sistema
- executar tarefas administrativas exclusivas

A IA nunca deve conceder permissões acima do necessário para cada Role.

Sempre aplicar o princípio do menor privilégio.

---

# IDOR

Sempre verificar propriedade dos recursos.

Nunca confiar apenas no ID enviado pelo cliente.

Sempre validar:

- usuário autenticado
- role
- dono do recurso

PUBLICADOR acessa apenas recursos autorizados.

SERVO possui acesso administrativo limitado.

ANCIAO possui acesso administrativo completo sobre o domínio.

ROOT possui acesso exclusivo às configurações globais do sistema.

---

# Código

Priorizar:

- simplicidade
- reutilização
- legibilidade
- baixo acoplamento
- alta coesão

Evitar:

- código duplicado
- funções gigantes
- arquivos enormes
- comentários desnecessários
- lógica repetida

Preferir funções pequenas.

---

# TypeScript

Sempre utilizar tipagem explícita.

Evitar:

```
any
```

Preferir:

- interfaces
- types
- enums

Utilizar strict mode.

---

# Organização

Cada módulo deve possuir estrutura semelhante.

```
module/

controllers/
services/
repositories/
routes/
schemas/
types/
```

Manter organização consistente entre todos os módulos.

---

# Dependências

Antes de adicionar uma nova biblioteca:

- verificar se existe solução nativa
- verificar se o projeto já utiliza biblioteca equivalente
- evitar dependências desnecessárias

Não instalar bibliotecas sem necessidade.

---

# Banco de Dados

Nunca alterar modelos Prisma sem necessidade.

Caso seja necessário:

- atualizar schema.prisma
- executar prisma generate
- criar migration quando apropriado

Nunca apagar dados automaticamente.

---

# Qualidade

Antes de finalizar qualquer tarefa:

Executar:

```
npm run build
```

Corrigir todos os erros de compilação.

Sempre verificar:

- imports
- tipagem
- lint
- arquivos órfãos

Caso existam testes:

```
npm test
```

---

# Docker

Assumir que o ambiente utiliza Docker Compose.

Caso os containers não estejam iniciados:

```
docker compose up -d
```

Banco utilizado:

- PostgreSQL

Ferramenta de e-mail:

- MailHog

Nunca assumir instalação local do PostgreSQL.

---

# Implementações

Ao criar novas funcionalidades:

1. Criar Repository
2. Criar Service
3. Criar Controller
4. Criar Routes
5. Criar validações
6. Atualizar documentação quando necessário

Sempre seguir o padrão arquitetural existente.

---

# Refatorações

Ao modificar código existente:

- preservar comportamento
- evitar breaking changes
- reutilizar código existente
- manter padrão arquitetural
- manter compatibilidade com os demais módulos

---

# Consistência Arquitetural

Ao implementar novas funcionalidades:

- respeitar a arquitetura existente
- reutilizar componentes antes de criar novos
- evitar duplicação de lógica
- manter nomenclaturas consistentes
- seguir os padrões adotados pelo projeto

Caso uma alteração estrutural significativa seja necessária, explicar o motivo antes de implementá-la.

Nunca introduzir um novo padrão quando já existir um padrão consolidado no projeto.

---

# Estilo

Priorizar código limpo.

Quando houver duas soluções equivalentes:

Escolher sempre a mais simples, mais legível e mais consistente com a arquitetura do projeto.

---

# Em caso de dúvida

Nunca invente regras de negócio.

Caso alguma informação esteja ausente ou ambígua:

- explique o problema
- proponha alternativas
- aguarde confirmação antes de realizar alterações estruturais

Nunca tome decisões arquiteturais importantes automaticamente.