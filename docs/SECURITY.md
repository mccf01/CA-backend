# Segurança

## Objetivo

Este documento descreve a arquitetura de segurança adotada pelo Projeto Carrinho.

Seu objetivo é documentar as estratégias utilizadas para proteger a aplicação, seus usuários e seus dados, além de estabelecer diretrizes para futuras implementações.

Segurança é considerada um requisito funcional do projeto e não uma funcionalidade opcional.

---

# Filosofia de Segurança

O Projeto Carrinho adota o princípio de **Security by Design**.

Isso significa que mecanismos de segurança são considerados desde a arquitetura da aplicação e não apenas adicionados após a implementação das funcionalidades.

Toda nova funcionalidade deve responder às seguintes perguntas antes de ser implementada:

* Quem poderá acessar?
* Quais dados serão manipulados?
* Existe risco de exposição de informações?
* Existe risco de alteração indevida?
* Existe risco de abuso da funcionalidade?

---

# Princípios

As decisões de segurança seguem os seguintes princípios:

* Menor privilégio possível (Least Privilege)
* Defesa em profundidade (Defense in Depth)
* Falha segura (Fail Secure)
* Validação de toda entrada de dados
* Autorização explícita
* Não confiar em dados enviados pelo cliente

---

# Autenticação

O sistema utiliza autenticação baseada em JWT.

Após um login bem-sucedido, o servidor gera um Token JWT contendo apenas as informações necessárias para identificação do usuário.

O token é enviado ao cliente através de um Cookie HttpOnly.

Essa abordagem reduz significativamente riscos relacionados a ataques XSS.

---

# Cookies

Os cookies utilizados para autenticação devem possuir configurações adequadas de segurança.

Em produção:

* HttpOnly
* Secure
* SameSite
* Expiração controlada

O cliente nunca deve manipular diretamente o conteúdo do JWT.

---

# Autorização

O controle de acesso é baseado em RBAC (Role Based Access Control).

Cada usuário possui um papel definido.

Exemplo:

* PUBLICADOR
* SERVO
* ANCIAO
* ROOT

As permissões são verificadas antes da execução das regras de negócio.

Nenhum recurso protegido deve depender apenas da interface do usuário para restringir acesso.

Toda validação deve ocorrer no backend.

---

# Proteção contra IDOR

O sistema deve impedir acessos indevidos a recursos pertencentes a outros usuários.

Toda consulta baseada em identificadores deve validar:

* usuário autenticado
* permissões
* propriedade do recurso

Nunca confiar apenas no ID enviado pelo cliente.

---

# Validação de Entrada

Toda informação recebida pelo servidor deve ser validada.

A validação deve ocorrer antes da execução das regras de negócio.

Campos obrigatórios, formatos, limites e tipos devem ser verificados.

Dados inválidos nunca devem alcançar a camada de persistência.

---

# SQL Injection

O acesso ao banco de dados ocorre exclusivamente através do Prisma ORM.

Essa abordagem reduz significativamente riscos relacionados à construção manual de consultas SQL.

Sempre que possível, utilizar os mecanismos seguros disponibilizados pelo ORM.

Evitar consultas SQL manuais.

---

# Cross Site Scripting (XSS)

O backend não deve confiar em qualquer informação enviada pelo cliente.

Sempre considerar que entradas podem conter conteúdo malicioso.

Como o sistema utiliza autenticação baseada em Cookies HttpOnly, reduz-se significativamente o impacto de ataques XSS relacionados ao roubo de tokens.

---

# Cross Site Request Forgery (CSRF)

Como o sistema utiliza autenticação baseada em Cookies, mecanismos adicionais de proteção poderão ser utilizados conforme a evolução do projeto.

Toda operação sensível deverá considerar estratégias adequadas de mitigação.

---

# Rate Limiting

Rotas sensíveis devem possuir limitação de requisições.

Especial atenção para:

* Login
* Recuperação de senha
* Alteração de senha
* Cadastro

O objetivo é reduzir ataques automatizados e tentativas de força bruta.

---

# Senhas

Senhas nunca devem ser armazenadas em texto puro.

Todo armazenamento deverá utilizar algoritmos de hash apropriados.

O sistema nunca deverá registrar senhas em logs.

---

# Tratamento de Erros

Mensagens de erro não devem revelar detalhes internos da aplicação.

Em ambiente de produção:

* Não expor stack traces.
* Não retornar consultas SQL.
* Não retornar detalhes internos do servidor.

Logs detalhados devem permanecer disponíveis apenas para desenvolvimento e administração.

---

# Middleware de Segurança

A arquitetura prevê a utilização de Middlewares específicos para segurança.

Exemplos:

* Autenticação
* Autorização
* Rate Limiting
* Validação
* Tratamento global de erros

Cada Middleware possui apenas uma responsabilidade.

---

# Registro de Logs

Eventos relevantes poderão ser registrados para fins de auditoria.

Exemplos:

* Login
* Logout
* Alterações administrativas
* Erros críticos

Logs nunca devem conter informações sensíveis.

---

# Variáveis de Ambiente

Informações sensíveis nunca devem ser armazenadas diretamente no código-fonte.

Exemplos:

* JWT Secret
* Credenciais do Banco
* Configurações SMTP
* Chaves de API

Todas essas informações devem ser obtidas através de variáveis de ambiente.

---

# Dependências

As dependências do projeto devem permanecer atualizadas.

Novas bibliotecas devem ser avaliadas considerando:

* manutenção
* comunidade
* histórico de vulnerabilidades
* necessidade real

Evitar dependências desnecessárias reduz a superfície de ataque da aplicação.

---

# Ambientes

O projeto diferencia ambientes de desenvolvimento e produção.

## Desenvolvimento

Prioriza produtividade.

Permite maior nível de detalhamento de erros.

## Produção

Prioriza segurança.

Mensagens de erro são reduzidas.

Logs sensíveis permanecem internos.

Cookies utilizam configurações de segurança mais restritivas.

---

# Responsabilidade das Camadas

## Middlewares

* Autenticação
* Autorização
* Validação inicial

---

## Services

* Regras de autorização
* Validação de propriedade
* Regras de negócio

---

## Repositories

* Persistência segura
* Comunicação com Prisma

---

## Prisma

* Comunicação com PostgreSQL

---

# Checklist de Segurança

Antes de concluir qualquer funcionalidade, verificar:

* O usuário está autenticado?
* O usuário possui permissão?
* Existe risco de IDOR?
* Todos os dados foram validados?
* Existem informações sensíveis sendo expostas?
* Há possibilidade de abuso por força bruta?
* Os erros estão sendo tratados corretamente?
* As variáveis sensíveis estão protegidas?

---

# Evolução

A segurança é um processo contínuo.

Novas funcionalidades devem revisar este documento sempre que introduzirem novos riscos ou mecanismos de proteção.

---

# Documentos Relacionados

* ARCHITECTURE.md
* DOMAIN.md
* DATABASE.md
* AUTHENTICATION.md
* API.md
* AGENTS.md
