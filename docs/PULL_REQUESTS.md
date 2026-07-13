# Pull Requests

## Objetivo

Este documento define o padrão para criação, revisão e aprovação de Pull Requests do Projeto Carrinho.

Todo Pull Request deve representar uma entrega pequena, objetiva e alinhada com a arquitetura do projeto.

Este documento deve ser seguido antes de qualquer merge na branch principal.

---

# Princípios

Todo Pull Request deve seguir os seguintes princípios:

- Resolver apenas um problema ou funcionalidade.
- Manter consistência arquitetural.
- Não introduzir débito técnico desnecessário.
- Priorizar legibilidade ao invés de complexidade.
- Manter compatibilidade com o restante do projeto.
- Respeitar todas as regras de negócio existentes.

Sempre que possível:

```
1 Card
↓
1 Branch
↓
1 Pull Request
↓
1 Merge
```

Evite Pull Requests gigantes.

Quanto menor o PR, mais fácil será revisar, testar e corrigir.

---

# Convenções

## Branch

Utilizar nomes descritivos.

Exemplos:

```
feature/ISSUE-{id da issue}
```

---

## Título do Pull Request

Utilizar títulos curtos e objetivos.

Exemplos:

```
Implementa autenticação JWT

Cria Repository de Usuários

Adiciona validação de Login

Corrige regra de RBAC

Refatora UserService
```

---

## Descrição do Pull Request

Todo Pull Request deve informar:

- Objetivo
- Alterações realizadas
- Como testar
- Observações importantes

Modelo:

```
## Objetivo

Implementar autenticação utilizando JWT.

## Alterações

- AuthController
- AuthService
- AuthRepository
- Middleware JWT
- Testes

## Como testar

npm run build
npm test

Executar login utilizando usuário válido.

## Observações

Nenhuma.
```

---

# Checklist do Desenvolvedor

Antes de solicitar revisão, confirme todos os itens abaixo.

---

## Funcionalidade

- [ ] Todos os critérios de aceite da Issue foram atendidos.
- [ ] A funcionalidade está completa.
- [ ] Não existem funcionalidades parcialmente implementadas.
- [ ] Não existem TODOs pendentes.
- [ ] Não existem códigos comentados.

---

## Arquitetura

- [ ] O fluxo da aplicação respeita a arquitetura.

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
Prisma
↓
PostgreSQL
```

- [ ] Controllers apenas recebem requisições e retornam respostas.
- [ ] Toda regra de negócio está nos Services.
- [ ] Apenas Repositories acessam o Prisma.
- [ ] Nenhuma camada foi ignorada.

---

## Organização

- [ ] O módulo segue o padrão do projeto.

```
module/

controllers/
middlewares/
repositories/
routes/
schemas/
services/
types/
```

- [ ] Arquivos foram organizados corretamente.
- [ ] Não existem arquivos órfãos.
- [ ] Não existem imports não utilizados.

---

## Código

- [ ] O código é legível.
- [ ] Não existe duplicação desnecessária.
- [ ] Métodos possuem apenas uma responsabilidade.
- [ ] Variáveis possuem nomes claros.
- [ ] Não utilizei "any".
- [ ] Não utilizei código morto.
- [ ] Não deixei console.log desnecessários.

---

## Segurança

- [ ] As permissões RBAC foram respeitadas.
- [ ] Entradas do usuário são validadas.
- [ ] Não existem riscos evidentes de IDOR.
- [ ] Nenhuma senha é manipulada em texto puro.
- [ ] Nenhum segredo foi commitado.
- [ ] Nenhuma informação sensível é retornada pela API.
- [ ] Middlewares de autenticação continuam funcionando.

---

## Banco de Dados

Caso aplicável.

- [ ] Schema Prisma atualizado.
- [ ] Migration criada quando necessário.
- [ ] Prisma Client regenerado.
- [ ] Relacionamentos foram revisados.
- [ ] Nenhuma alteração destrutiva foi realizada sem justificativa.

---

## Testes

- [ ] Projeto compila.

```
npm run build
```

- [ ] Todos os testes passaram.

```
npm test
```

- [ ] Novos testes foram adicionados quando necessário.
- [ ] Casos de sucesso foram testados.
- [ ] Casos de erro foram testados.

---

## Documentação

Caso aplicável.

- [ ] README atualizado.
- [ ] Documentação da API atualizada.
- [ ] ARCHITECTURE.md atualizado.
- [ ] DOMAIN.md atualizado.
- [ ] SECURITY.md atualizado.
- [ ] DECISIONS.md atualizado quando houve mudança arquitetural.

---

## Pull Request

- [ ] O PR possui título adequado.
- [ ] A descrição foi preenchida.
- [ ] O PR referencia a Issue.
- [ ] O escopo do PR é pequeno.
- [ ] Não existem commits desnecessários.

---

# Checklist do Revisor

O revisor deve verificar todos os itens antes da aprovação.

---

## Funcionalidade

- [ ] Resolve completamente a Issue.
- [ ] Critérios de aceite foram atendidos.
- [ ] Não existem regressões aparentes.

---

## Arquitetura

- [ ] A arquitetura foi respeitada.
- [ ] Não existem regras de negócio em Controllers.
- [ ] Services permanecem independentes do Express.
- [ ] Repositories apenas acessam dados.
- [ ] Nenhuma camada foi ignorada.

---

## Código

- [ ] O código é simples.
- [ ] O código é legível.
- [ ] Não existe duplicação.
- [ ] O código segue o padrão do projeto.
- [ ] Não existe complexidade desnecessária.

---

## Segurança

- [ ] RBAC está correto.
- [ ] Não existem falhas óbvias de autenticação.
- [ ] Não existem riscos de IDOR.
- [ ] Nenhuma informação sensível pode ser exposta.
- [ ] Não existem segredos versionados.

---

## Banco de Dados

Caso aplicável.

- [ ] Alterações fazem sentido.
- [ ] Migrations estão corretas.
- [ ] Relacionamentos permanecem consistentes.

---

## Testes

- [ ] Build executado com sucesso.
- [ ] Testes aprovados.
- [ ] Casos críticos continuam funcionando.

---

## Documentação

- [ ] A documentação continua consistente.
- [ ] Novas funcionalidades foram documentadas quando necessário.

---

## Aprovação

O Pull Request somente poderá ser aprovado quando:

- [ ] Todos os itens deste documento estiverem atendidos.
- [ ] Não existirem comentários pendentes.
- [ ] Não existirem conflitos.
- [ ] O código estiver pronto para produção.

---

# O que NÃO deve entrar em um Pull Request

Evite incluir no mesmo PR:

- Novas funcionalidades e refatorações sem relação.
- Alterações de formatação em arquivos não relacionados.
- Mudanças de arquitetura sem documentação.
- Dependências não justificadas.
- Código experimental.
- Código comentado.
- Arquivos temporários.
- Logs de depuração.

---

# Filosofia do Projeto

Este projeto prioriza:

- Código limpo.
- Arquitetura consistente.
- Segurança.
- Simplicidade.
- Baixo acoplamento.
- Alta coesão.
- Evolução incremental.

Sempre prefira um Pull Request pequeno, bem documentado e fácil de revisar do que uma grande entrega difícil de entender.

A qualidade do código possui prioridade sobre a velocidade de implementação.