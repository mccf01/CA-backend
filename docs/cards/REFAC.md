# 🔨 Refactor

## Objetivo

Utilize este template para registrar melhorias internas na estrutura do código sem alterar o comportamento esperado da aplicação.

O objetivo é aumentar a legibilidade, manutenibilidade, reutilização e qualidade do código.

---

## Descrição

Descreva qual parte do código será refatorada e qual problema a refatoração pretende resolver.

---

## Motivação

Explique por que a refatoração é necessária.

Exemplos:

- Código duplicado.
- Baixa legibilidade.
- Classe muito grande.
- Alto acoplamento.
- Melhor separação de responsabilidades.

---

## Estado Atual

Descreva como a implementação funciona atualmente e quais limitações existem.

---

## Objetivo

Descreva como a estrutura deverá ficar após a refatoração.

---

## Escopo

### ✅ Inclui

Liste tudo que faz parte desta refatoração.

### ❌ Não Inclui

Liste explicitamente o que não faz parte desta refatoração.

Exemplo:

- Alteração de regras de negócio.
- Implementação de novas funcionalidades.
- Correção de Bugs não relacionados.

---

## Restrições

Durante esta refatoração:

- O comportamento da aplicação não deve ser alterado.
- As regras de negócio devem permanecer exatamente as mesmas.
- A API pública não deve sofrer alterações (quando aplicável).

---

## Dependências

Liste outras tarefas relacionadas (caso existam).

---

## Como Validar

Descreva como verificar que a refatoração não alterou o comportamento esperado.

Exemplos:

- Executar testes existentes.
- Validar manualmente os principais fluxos.
- Comparar comportamento antes e depois da alteração.

---

## Definition of Done (DoD)

- [ ] Refatoração concluída.
- [ ] Comportamento da aplicação preservado.
- [ ] Build executando sem erros.
- [ ] Lint sem erros.
- [ ] Testes atualizados ou executados (quando aplicável).
- [ ] Pull Request aprovado.

---

## Observações

Informações adicionais relevantes para a refatoração.

---

## Exemplo

**Descrição**

Separar responsabilidades do `UserService`, extraindo regras de autenticação para um serviço específico.

**Motivação**

O `UserService` concentra responsabilidades de cadastro, autenticação e gerenciamento de usuários, tornando sua manutenção mais difícil.

**Objetivo**

Melhorar a organização do código mantendo exatamente o mesmo comportamento da aplicação.

**Escopo**

### ✅ Inclui

- Extração do serviço de autenticação.
- Atualização das dependências.

### ❌ Não Inclui

- Alteração das regras de autenticação.
- Implementação de novas funcionalidades.

**Como Validar**

Executar os testes de autenticação e validar manualmente o fluxo de login.