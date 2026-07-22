# 🔬 Research / Spike

## Objetivo

Utilize este template para registrar estudos, pesquisas ou provas de conceito (Proof of Concept - PoC) que auxiliem na tomada de decisão antes da implementação de uma funcionalidade.

O objetivo é reduzir incertezas, comparar alternativas e documentar os resultados obtidos.

---

## Problema

Descreva qual dúvida ou problema motivou esta pesquisa.

---

## Objetivo da Pesquisa

Explique quais perguntas deverão ser respondidas ao final desta Spike.

Exemplos:

- Qual biblioteca utilizar?
- Qual arquitetura adotar?
- Vale a pena utilizar determinada tecnologia?
- Quais são as limitações da solução?

---

## Escopo

### ✅ Inclui

Liste tudo que faz parte desta pesquisa.

Exemplo:

- Estudo da documentação oficial.
- Comparação entre alternativas.
- Desenvolvimento de uma Proof of Concept (PoC).

### ❌ Não Inclui

Liste explicitamente tudo que não faz parte desta Spike.

Exemplo:

- Implementação definitiva.
- Refatoração do projeto.
- Desenvolvimento da funcionalidade final.

---

## Alternativas Avaliadas

Liste as tecnologias, bibliotecas ou abordagens avaliadas.

Exemplo:

- JWT
- OAuth 2.0
- Clerk
- Auth.js

---

## Critérios de Avaliação

Defina quais critérios serão utilizados para comparar as alternativas.

Exemplos:

- Facilidade de implementação.
- Documentação.
- Performance.
- Segurança.
- Manutenibilidade.
- Compatibilidade com o projeto.

---

## Resultado da Pesquisa

Documente a conclusão obtida.

Caso nenhuma alternativa seja adequada, explique os motivos.

---

## Próximos Passos

Descreva quais ações deverão ser realizadas após a conclusão da pesquisa.

Exemplo:

- Criar Feature para implementação.
- Abrir Task para configuração.
- Realizar novos estudos.

---

## Definition of Done (DoD)

- [ ] Pesquisa concluída.
- [ ] Alternativas avaliadas.
- [ ] Decisão documentada.
- [ ] Próximos passos definidos.

---

## Observações

Informações adicionais relevantes para esta pesquisa.

---

## Exemplo

**Problema**

Definir qual solução será utilizada para autenticação da API.

**Objetivo da Pesquisa**

Comparar JWT, Auth.js e Clerk considerando o contexto do Projeto Carrinho.

**Alternativas Avaliadas**

- JWT
- Auth.js
- Clerk

**Critérios de Avaliação**

- Facilidade de implementação.
- Segurança.
- Compatibilidade com Prisma.
- Curva de aprendizado.

**Resultado da Pesquisa**

JWT foi escolhido por oferecer maior controle sobre a autenticação, simplicidade de integração com Express e excelente compatibilidade com a arquitetura atual do projeto.

**Próximos Passos**

Criar uma Feature para implementar autenticação utilizando JWT.