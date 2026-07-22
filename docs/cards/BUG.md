# 🐞 Bug

## Objetivo

Utilize este template para registrar defeitos, comportamentos inesperados ou funcionalidades que não estejam funcionando conforme o esperado.

O objetivo é fornecer informações suficientes para reproduzir, corrigir e validar o problema.

---

## Estrutura

### Descrição

Descreva de forma objetiva qual é o problema encontrado.

---

### Comportamento Atual

Explique o comportamento observado durante a execução da aplicação.

---

### Comportamento Esperado

Descreva como o sistema deveria se comportar.

---

### Passos para Reproduzir

Liste os passos necessários para reproduzir o problema.

Exemplo:

1. Acesse a tela de Login.
2. Informe um usuário válido.
3. Informe uma senha inválida.
4. Clique em **Entrar**.

---

### Evidências

Adicione evidências que auxiliem na identificação do problema, como:

- Screenshots
- GIFs
- Vídeos
- Logs
- Stack Traces
- Respostas da API
- Mensagens de erro

---

### Ambiente

Sempre que aplicável, informe:

- Sistema Operacional
- Navegador
- Versão da aplicação
- Node.js
- Banco de Dados
- Docker (se relevante)

---

### Como Validar a Correção

Descreva como confirmar que o problema foi resolvido.

Exemplo:

- O erro não ocorre mais.
- O comportamento esperado foi restaurado.
- Não houve regressão em funcionalidades relacionadas.

---

### Observações

Informações adicionais que possam auxiliar durante a investigação ou correção do problema.

---

## Exemplo

**Descrição**

Ao cadastrar um usuário com um e-mail já existente, a API retorna erro **500 Internal Server Error**.

**Comportamento Atual**

A requisição falha com erro interno.

**Comportamento Esperado**

A API deve retornar **409 Conflict**, informando que o e-mail já está cadastrado.

**Passos para Reproduzir**

1. Cadastrar um usuário.
2. Repetir o cadastro utilizando o mesmo e-mail.

**Evidências**

- Screenshot do erro.
- Log da aplicação.
- Resposta da API.

**Como Validar a Correção**

Repetir o fluxo acima e verificar se a API retorna **409 Conflict**.