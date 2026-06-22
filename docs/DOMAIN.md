# Domain Model

## Objetivo

Este documento descreve o domínio de negócio do Projeto Carrinho, apresentando os principais conceitos, entidades, relacionamentos, regras de negócio e fluxos que compõem o sistema.

Seu objetivo é servir como referência para desenvolvedores, colaboradores e agentes de IA, permitindo que todos compreendam não apenas como o sistema foi implementado, mas principalmente **o problema que ele resolve**.

Enquanto o documento **ARCHITECTURE.md** descreve a arquitetura técnica do backend, este documento descreve a arquitetura do negócio.

---

# Visão Geral

O Projeto Carrinho é um sistema destinado ao gerenciamento de escalas de Testemunho Público.

Seu propósito é permitir que responsáveis pela organização das escalas administrem publicadores, locais, programações e participações de maneira simples, segura e organizada.

O sistema foi projetado para reduzir processos manuais, minimizar conflitos de agendamento e facilitar o gerenciamento das atividades da congregação.

---

# Objetivos do Domínio

O sistema possui os seguintes objetivos principais:

* Centralizar todas as escalas em um único sistema.
* Organizar programações recorrentes.
* Facilitar o gerenciamento de publicadores.
* Permitir controle de permissões administrativas.
* Registrar todas as informações necessárias para futuras consultas.
* Reduzir erros humanos durante a criação de escalas.

---

# Glossário

## Usuário

Pessoa cadastrada no sistema.

Todo acesso ao sistema ocorre através de um usuário autenticado.

Cada usuário possui um papel (Role), responsável por determinar suas permissões dentro da aplicação.

---

## Publicador

Usuário responsável por participar das escalas de Testemunho Público.

Pode consultar suas escalas, confirmar participação, cancelar participação quando permitido e manter seus dados atualizados.

Não possui permissões administrativas.

---

## Servo

Usuário com permissões administrativas intermediárias.

Seu papel é auxiliar na administração operacional do sistema, podendo gerenciar escalas e locais, mas sem alterar a estrutura das programações.

---

## Ancião

Administrador funcional do sistema.

Responsável pela criação e manutenção das Programações, definição de horários, recorrências e gerenciamento geral da operação.

---

## Root

Administrador técnico da plataforma.

Possui acesso às configurações globais do sistema e funcionalidades exclusivas de administração técnica.

Seu papel não está relacionado à operação diária do Testemunho Público.

---

## Local

Representa um ponto onde ocorre o Testemunho Público.

Exemplos:

* Praça
* Parque
* Avenida
* Feira
* Orla
* Centro Comercial

Um Local pode possuir diversas Programações.

---

## Programação

Representa um evento planejado para determinado Local.

Define quando determinada atividade ocorrerá.

Pode possuir regras de recorrência.

Uma Programação pode gerar diversas Escalas ao longo do tempo.

---

## Escala

Representa a distribuição dos publicadores para uma Programação específica.

Cada Escala pertence a uma única Programação.

Uma Programação pode gerar várias Escalas.

---

## Recorrência

Define padrões automáticos de repetição das Programações.

Exemplos:

* Toda semana
* Dias específicos da semana
* Primeiro sábado do mês
* Último domingo do mês
* Datas específicas

A recorrência reduz a necessidade de criar Programações manualmente.

---

# Papéis do Sistema

O sistema utiliza **RBAC (Role Based Access Control)**.

Atualmente existem quatro níveis de acesso.

```text
PUBLICADOR
    │
    ▼
SERVO
    │
    ▼
ANCIAO
    │
    ▼
ROOT
```

---

## PUBLICADOR

Representa o usuário comum do sistema.

Permissões:

* Visualizar suas escalas.
* Consultar programações.
* Atualizar informações do próprio perfil.
* Confirmar participação.
* Cancelar participação quando permitido.

Restrições:

* Não pode acessar funcionalidades administrativas.
* Não pode criar Programações.
* Não pode gerenciar usuários.
* Não pode alterar configurações do sistema.

---

## SERVO

Representa um administrador operacional.

Possui todas as permissões do PUBLICADOR.

Além disso pode:

* Criar Escalas.
* Editar Escalas.
* Remover Escalas.
* Gerenciar Locais.
* Executar tarefas administrativas delegadas.

Restrições:

* Não pode criar Programações.
* Não pode alterar recorrências.
* Não pode definir horários das Programações.

---

## ANCIAO

Representa o administrador funcional do sistema.

Possui todas as permissões do SERVO.

Além disso pode:

* Criar Programações.
* Editar Programações.
* Remover Programações.
* Definir horários das Programações.
* Configurar recorrências.
* Gerenciar usuários.

---

## ROOT

Representa o administrador técnico da plataforma.

Possui todas as permissões do ANCIAO.

Além disso pode:

* Gerenciar configurações globais.
* Alterar parâmetros do sistema.
* Configurar integrações.
* Executar tarefas de manutenção.
* Acessar funcionalidades exclusivas de administração.

O papel ROOT deve ser utilizado apenas para administração técnica da plataforma.

---

# Entidades do Sistema

## Usuário

Representa qualquer pessoa cadastrada na aplicação.

É responsável pela autenticação e autorização dentro do sistema.

Relacionamentos:

* Possui um Role.
* Pode participar de diversas Escalas.

---

## Local

Representa o espaço físico onde uma Programação ocorrerá.

Relacionamentos:

* Possui diversas Programações.

---

## Programação

Representa um evento planejado.

Uma Programação pertence a um único Local.

Pode possuir regras de recorrência.

Relacionamentos:

* Pertence a um Local.
* Possui diversas Escalas.

---

## Escala

Representa uma ocorrência de uma Programação.

Relacionamentos:

* Pertence a uma Programação.
* Possui diversos participantes.

---

# Relacionamentos do Domínio

```text
Usuário
    │
    └──────────────┐
                   │ participa
                   ▼
               Escala
                   │
                   │ pertence a
                   ▼
             Programação
                   │
                   │ ocorre em
                   ▼
                Local
```

---

# Fluxos de Negócio

## Cadastro de Usuário

```text
Administrador

↓

Cria Usuário

↓

Sistema valida dados

↓

Usuário é persistido

↓

Conta disponível para acesso
```

---

## Criação de Programação

```text
Ancião

↓

Seleciona Local

↓

Define horários

↓

Define recorrência

↓

Sistema valida informações

↓

Programação é criada
```

---

## Criação de Escala

```text
Servo ou Ancião

↓

Seleciona Programação

↓

Seleciona participantes

↓

Sistema valida regras

↓

Escala é criada
```

---

## Consulta de Escalas

```text
Usuário autenticado

↓

Sistema identifica permissões

↓

Escalas autorizadas são retornadas
```

---

# Regras de Negócio

As regras abaixo representam princípios fundamentais do sistema.

## Usuários

* Todo usuário deve estar autenticado para acessar recursos protegidos.
* Todo usuário possui exatamente um papel (Role).
* Usuários não podem acessar recursos sem autorização.

---

## Programações

* Toda Programação deve estar vinculada a um Local.
* Apenas usuários autorizados podem criar ou alterar Programações.
* Programações podem possuir recorrência.
* Programações não devem gerar conflitos de agenda.

---

## Escalas

* Toda Escala pertence a uma Programação.
* Uma Escala nunca existe de forma independente.
* Participantes devem respeitar as regras definidas pela Programação.

---

## Permissões

* Recursos administrativos devem respeitar os níveis de acesso definidos pelo RBAC.
* Funcionalidades técnicas e configurações globais são exclusivas do papel ROOT.
* Recursos protegidos devem validar autenticação e autorização.
* O sistema deve impedir acessos indevidos através de validações de propriedade (IDOR).

---

# Casos de Uso

O sistema deverá suportar, entre outros, os seguintes casos de uso.

### Autenticação

* Login.
* Logout.
* Renovação de sessão.

---

### Usuários

* Cadastro.
* Atualização de perfil.
* Consulta de informações.

---

### Locais

* Cadastro.
* Alteração.
* Remoção.
* Consulta.

---

### Programações

* Cadastro.
* Alteração.
* Exclusão.
* Consulta.
* Configuração de recorrência.

---

### Escalas

* Criação.
* Atualização.
* Remoção.
* Consulta.
* Associação de participantes.

---

### Administração

* Configuração de parâmetros globais.
* Gerenciamento de configurações da plataforma.
* Administração técnica do sistema (ROOT).

---

# Evolução do Domínio

Este documento descreve o domínio atual do sistema.

Novas funcionalidades poderão introduzir novas entidades, papéis e regras de negócio.

Sempre que houver alteração significativa no domínio, este documento deverá ser atualizado antes da implementação ou em conjunto com ela.

---

# Documentos Relacionados

* ARCHITECTURE.md
* SECURITY.md
* DATABASE.md
* API.md
* DECISIONS.md
* AGENTS.md
* README.md
