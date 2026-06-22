# Database

## Objetivo

Este documento descreve a arquitetura do banco de dados utilizada pelo Projeto Carrinho.

Seu objetivo é documentar as decisões relacionadas à persistência de dados, modelagem das entidades, convenções adotadas e boas práticas utilizadas durante o desenvolvimento.

Este documento complementa o `DOMAIN.md`, descrevendo **como o domínio é representado no banco de dados**.

---

# Tecnologias

O projeto utiliza as seguintes tecnologias para persistência de dados.

* PostgreSQL
* Prisma ORM

O PostgreSQL é responsável pelo armazenamento das informações.

O Prisma atua como camada de acesso ao banco de dados, abstraindo consultas SQL e fornecendo tipagem forte para toda a aplicação.

---

# Objetivos da Modelagem

A modelagem do banco foi construída considerando os seguintes princípios:

* Integridade referencial.
* Normalização dos dados.
* Facilidade de manutenção.
* Escalabilidade.
* Clareza nos relacionamentos.
* Compatibilidade com Prisma ORM.

Sempre que possível, evitar duplicação de informações.

---

# Convenções

## Identificadores

Todas as entidades utilizam UUID como chave primária.

Exemplo:

```text
id
```

O uso de UUID evita colisões entre registros e facilita futuras integrações.

---

## Datas

Toda entidade persistente deve possuir:

```text
createdAt
updatedAt
```

Esses campos permitem auditoria básica da aplicação.

---

## Nomenclatura

Utilizar nomes claros e consistentes.

Exemplos:

* usuario
* local
* programacao
* escala

Evitar abreviações desnecessárias.

---

# Entidades

Atualmente o domínio é composto pelas seguintes entidades principais.

## Usuario

Responsável pela autenticação e identificação dentro do sistema.

Relacionamentos esperados:

* Role
* Escalas

---

## Role

Representa o nível de acesso do usuário.

Papéis atualmente suportados:

* PUBLICADOR
* SERVO
* ANCIAO
* ROOT

Cada usuário possui exatamente um Role.

---

## Local

Representa um ponto físico onde ocorre uma Programação.

Relacionamentos:

* possui várias Programações.

---

## Programacao

Representa um evento planejado.

Relacionamentos:

* pertence a um Local.
* possui várias Escalas.

---

## Escala

Representa uma ocorrência de uma Programação.

Relacionamentos:

* pertence a uma Programação.
* possui diversos participantes.

---

# Relacionamentos

Modelo simplificado.

```text
Role
  │
  ▼
Usuario
  │
  ▼
Escala
  │
  ▼
Programacao
  │
  ▼
Local
```

---

# Integridade Referencial

Todos os relacionamentos devem utilizar Foreign Keys.

O banco de dados é responsável por impedir referências inválidas.

O backend nunca deve depender apenas de validações em código para garantir consistência.

---

# Prisma ORM

O Prisma é a única tecnologia autorizada para acesso ao banco.

Não utilizar consultas SQL diretamente nos Services ou Controllers.

Toda comunicação deve ocorrer através dos Repositories.

---

# Migrações

Alterações estruturais devem seguir o fluxo:

1. Atualizar `schema.prisma`.
2. Validar a modelagem.
3. Executar a migration.
4. Atualizar a documentação, quando necessário.

Nunca alterar o banco manualmente em produção.

---

# Índices

Índices devem ser criados apenas quando houver necessidade comprovada.

Priorizar:

* Chaves estrangeiras.
* Campos frequentemente utilizados em filtros.
* Campos utilizados em ordenações.

Evitar excesso de índices, pois impactam operações de escrita.

---

# Exclusão de Dados

Por padrão, exclusões devem preservar a integridade referencial.

Sempre avaliar se a exclusão física é realmente necessária.

Em funcionalidades futuras poderá ser adotado Soft Delete para determinadas entidades.

---

# Auditoria

Inicialmente o sistema utiliza auditoria básica através dos campos:

* createdAt
* updatedAt

Funcionalidades futuras poderão registrar:

* usuário responsável pela alteração;
* histórico de mudanças;
* logs administrativos.

---

# Boas Práticas

Ao criar novas entidades:

* Utilizar UUID como identificador.
* Definir relacionamentos explicitamente.
* Utilizar nomes consistentes.
* Evitar redundância.
* Documentar alterações relevantes.

---

# Evolução

A modelagem do banco deverá evoluir conforme novas funcionalidades forem incorporadas ao sistema.

Toda alteração estrutural deve ser refletida neste documento e no `DOMAIN.md`.

---

# Documentos Relacionados

* DOMAIN.md
* ARCHITECTURE.md
* SECURITY.md
* API.md
* DECISIONS.md
