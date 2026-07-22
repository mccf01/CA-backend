# 🚀 Feature

## Objetivo

Utilize este template para registrar a implementação de uma nova funcionalidade no sistema.

O objetivo é definir claramente o que será desenvolvido, quais regras fazem parte da entrega e quais limites devem ser respeitados durante a implementação.

---

## Descrição

Descreva a funcionalidade que será implementada e o problema que ela pretende resolver.

---

## Estado Atual

Explique como o sistema funciona atualmente em relação a esta funcionalidade.

---

## Objetivo

Descreva o resultado esperado após a implementação.

---

## Escopo

### ✅ Inclui

Liste tudo que faz parte desta Feature.

Exemplo:

- Criar endpoint de login.
- Validar credenciais.
- Gerar JWT.
- Retornar usuário autenticado.

### ❌ Não Inclui

Liste explicitamente tudo que **não** faz parte desta implementação.

Exemplo:

- Recuperação de senha.
- Login com Google.
- Refresh Token.
- Controle de permissões (RBAC).

---

## Regras de Negócio

Liste as regras que deverão ser respeitadas durante a implementação.

Exemplo:

- Apenas usuários ativos podem realizar login.
- O e-mail deve ser único.
- A senha deve possuir hash utilizando bcrypt.

---

## Dependências

Liste outras Features, Tasks ou Bugs que precisam estar concluídos antes desta implementação (caso existam).

---

## Critérios de Aceite

- [ ] Funcionalidade implementada.
- [ ] Todas as regras de negócio respeitadas.
- [ ] Escopo atendido.
- [ ] Sem regressões conhecidas.
- [ ] Documentação atualizada (quando necessário).

---

## Definition of Ready (DoR)

- [ ] Requisitos definidos.
- [ ] Escopo validado.
- [ ] Dependências identificadas.
- [ ] Regras de negócio documentadas.

---

## Definition of Done (DoD)

- [ ] Implementação concluída.
- [ ] Código revisado.
- [ ] Build executando sem erros.
- [ ] Lint sem erros.
- [ ] Testes criados ou atualizados (quando aplicável).
- [ ] Documentação atualizada (quando necessário).
- [ ] Pull Request aprovado.

---

## Observações

Informações adicionais relevantes para a implementação.

---

## Exemplo

**Descrição**

Implementar autenticação utilizando JWT.

**Estado Atual**

O sistema ainda não possui mecanismo de autenticação.

**Objetivo**

Permitir que usuários autenticados recebam um Token JWT para acessar recursos protegidos.

**Escopo**

### ✅ Inclui

- Endpoint de Login.
- Validação de credenciais.
- Geração do JWT.

### ❌ Não Inclui

- Refresh Token.
- Recuperação de senha.
- Login Social.

**Regras de Negócio**

- Apenas usuários ativos podem autenticar.
- A senha deve ser comparada utilizando bcrypt.

**Dependências**

- User Repository implementado.
- Prisma configurado.