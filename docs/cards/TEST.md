# 🧪 Test

## Objetivo

Utilize este template para registrar a criação, atualização ou melhoria de testes automatizados da aplicação.

O objetivo é aumentar a confiabilidade do sistema, prevenir regressões e garantir o correto funcionamento das funcionalidades.

---

## Descrição

Descreva quais testes serão criados ou alterados.

---

## Estado Atual

Explique como a cobertura de testes se encontra atualmente para esta funcionalidade.

---

## Objetivo

Descreva o resultado esperado após a implementação dos testes.

---

## Escopo

### ✅ Inclui

Liste tudo que faz parte desta implementação.

Exemplo:

- Criar testes unitários.
- Criar testes de integração.
- Atualizar mocks.
- Validar cenários de sucesso e erro.

### ❌ Não Inclui

Liste explicitamente tudo que não faz parte desta implementação.

Exemplo:

- Implementação de novas funcionalidades.
- Refatorações não relacionadas.
- Correção de Bugs.

---

## Cenários de Teste

Liste os principais cenários que deverão ser cobertos.

Exemplo:

- Login com credenciais válidas.
- Login com senha inválida.
- Usuário inexistente.
- Usuário inativo.

---

## Dependências

Liste outras Features, Tasks ou funcionalidades necessárias antes da implementação dos testes (caso existam).

---

## Critérios de Aceite

- [ ] Todos os cenários definidos foram implementados.
- [ ] Os testes executam com sucesso.
- [ ] Não existem testes quebrados.
- [ ] Cobertura atualizada (quando aplicável).

---

## Definition of Ready (DoR)

- [ ] Funcionalidade implementada.
- [ ] Cenários de teste definidos.
- [ ] Dependências identificadas.

---

## Definition of Done (DoD)

- [ ] Testes implementados.
- [ ] Todos os testes executando com sucesso.
- [ ] Build executando sem erros.
- [ ] Lint sem erros.
- [ ] Pull Request aprovado.

---

## Observações

Informações adicionais relevantes para os testes.

---

## Exemplo

**Descrição**

Criar testes unitários para o `UserService`.

**Estado Atual**

O serviço ainda não possui testes automatizados.

**Objetivo**

Garantir que as regras de negócio do `UserService` estejam protegidas contra regressões.

**Escopo**

### ✅ Inclui

- Testes para cadastro.
- Testes para atualização.
- Testes para exclusão.

### ❌ Não Inclui

- Testes End-to-End.
- Testes do Front-end.

**Cenários de Teste**

- Cadastro válido.
- E-mail duplicado.
- Usuário inexistente.
- Atualização bem-sucedida.