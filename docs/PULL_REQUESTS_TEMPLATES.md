ID da ISSUE: 

Objetivo da alteracao: 

# 👨‍💻 Checklist do Desenvolvedor

## 📋 Funcionalidade

- [ ] Todos os critérios de aceite da Issue foram atendidos.
- [ ] A funcionalidade está completa.
- [ ] Não existem funcionalidades parcialmente implementadas.
- [ ] Não existem TODOs pendentes.
- [ ] Não existem códigos comentados.

---

## 🏛️ Arquitetura

- [ ] O fluxo da aplicação respeita a arquitetura do projeto.
- [ ] Controllers apenas recebem requisições e retornam respostas.
- [ ] Toda regra de negócio está nos Services.
- [ ] Apenas Repositories acessam o Prisma ORM.
- [ ] Nenhuma camada da arquitetura foi ignorada.

---

## 📁 Organização

- [ ] O módulo segue a estrutura padrão do projeto.
- [ ] Arquivos foram organizados corretamente.
- [ ] Não existem arquivos órfãos.
- [ ] Não existem imports não utilizados.

---

## 💻 Código

- [ ] O código é legível.
- [ ] Não existe duplicação desnecessária.
- [ ] Métodos possuem apenas uma responsabilidade.
- [ ] Variáveis possuem nomes claros e consistentes.
- [ ] Não utilizei `any`.
- [ ] Não existe código morto.
- [ ] Não deixei `console.log` desnecessários.

---

## 🔒 Segurança

- [ ] As permissões RBAC foram respeitadas.
- [ ] Todas as entradas do usuário são validadas.
- [ ] Não existem riscos evidentes de IDOR.
- [ ] Nenhuma senha é manipulada em texto puro.
- [ ] Nenhum segredo foi commitado.
- [ ] Nenhuma informação sensível é retornada pela API.
- [ ] Os middlewares de autenticação continuam funcionando corretamente.

---

## 🗄️ Banco de Dados *(quando aplicável)*

- [ ] O `schema.prisma` foi atualizado.
- [ ] A migration foi criada quando necessário.
- [ ] O Prisma Client foi regenerado.
- [ ] Relacionamentos foram revisados.
- [ ] Nenhuma alteração destrutiva foi realizada sem justificativa.

---

## 🧪 Testes

- [ ] O projeto compila com sucesso (`npm run build`).
- [ ] Todos os testes passaram (`npm test`).
- [ ] Novos testes foram adicionados quando necessário.
- [ ] Casos de sucesso foram testados.
- [ ] Casos de erro foram testados.

---

## 📚 Documentação *(quando aplicável)*

- [ ] README atualizado.
- [ ] Documentação da API atualizada.
- [ ] ARCHITECTURE.md atualizado.
- [ ] DOMAIN.md atualizado.
- [ ] SECURITY.md atualizado.
- [ ] DECISIONS.md atualizado quando houve mudança arquitetural.

---

## 🔀 Pull Request

- [ ] O PR possui um título adequado.
- [ ] A descrição foi preenchida corretamente.
- [ ] O PR referencia a Issue correspondente.
- [ ] O escopo do PR é pequeno e objetivo.
- [ ] Não existem commits desnecessários.

---

# 👀 Checklist do Revisor

## 📋 Funcionalidade

- [ ] Resolve completamente a Issue.
- [ ] Todos os critérios de aceite foram atendidos.
- [ ] Não existem regressões aparentes.

---

## 🏛️ Arquitetura

- [ ] A arquitetura do projeto foi respeitada.
- [ ] Não existem regras de negócio nos Controllers.
- [ ] Os Services permanecem independentes do Express.
- [ ] Os Repositories apenas acessam dados.
- [ ] Nenhuma camada da arquitetura foi ignorada.

---

## 💻 Código

- [ ] O código é simples e legível.
- [ ] Não existe duplicação desnecessária.
- [ ] O código segue o padrão do projeto.
- [ ] Não existe complexidade desnecessária.
- [ ] A nomenclatura está consistente.

---

## 🔒 Segurança

- [ ] As permissões RBAC estão corretas.
- [ ] Não existem falhas evidentes de autenticação.
- [ ] Não existem riscos aparentes de IDOR.
- [ ] Nenhuma informação sensível pode ser exposta.
- [ ] Não existem segredos versionados.

---

## 🗄️ Banco de Dados *(quando aplicável)*

- [ ] As alterações fazem sentido.
- [ ] As migrations estão corretas.
- [ ] Os relacionamentos permanecem consistentes.
- [ ] Não existem impactos inesperados no banco.

---

## 🧪 Testes

- [ ] O projeto compila com sucesso.
- [ ] Todos os testes passaram.
- [ ] Os cenários críticos continuam funcionando.
- [ ] Os testes cobrem adequadamente as alterações.

---

## 📚 Documentação *(quando aplicável)*

- [ ] A documentação permanece consistente.
- [ ] Novas funcionalidades foram documentadas quando necessário.
- [ ] As alterações arquiteturais foram registradas quando aplicável.

---

## ✅ Aprovação

- [ ] Todos os itens deste checklist foram atendidos.
- [ ] Não existem comentários pendentes.
- [ ] Não existem conflitos de merge.
- [ ] O código está pronto para produção.