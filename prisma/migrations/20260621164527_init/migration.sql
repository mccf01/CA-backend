-- CreateEnum
CREATE TYPE "NivelPermissao" AS ENUM ('PUBLICADOR', 'SERVO', 'ANCIAO', 'ROOT');

-- CreateEnum
CREATE TYPE "StatusUsuarioCriado" AS ENUM ('INATIVO', 'PENDENTE', 'ATIVO');

-- CreateEnum
CREATE TYPE "DiaSemana" AS ENUM ('DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO');

-- CreateEnum
CREATE TYPE "AgendamentoStatus" AS ENUM ('PENDENTE', 'CONFIRMADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "AcompanhanteStatus" AS ENUM ('PENDENTE', 'ACEITO', 'REJEITADO');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT,
    "perfil" "NivelPermissao" NOT NULL DEFAULT 'PUBLICADOR',
    "status" "StatusUsuarioCriado" NOT NULL DEFAULT 'PENDENTE',
    "criadoPor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Local" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "criadoPor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Local_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ponto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "localId" TEXT NOT NULL,
    "criadoPor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ponto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HorariosDisponiveis" (
    "id" TEXT NOT NULL,
    "pontoId" TEXT NOT NULL,
    "recorrente" BOOLEAN NOT NULL DEFAULT false,
    "dataEspecifica" TIMESTAMP(3),
    "diaSemana" "DiaSemana",
    "horaInicio" TEXT NOT NULL,
    "horaFim" TEXT NOT NULL,
    "criadoPor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HorariosDisponiveis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agendamentos" (
    "id" TEXT NOT NULL,
    "publicadorId" TEXT NOT NULL,
    "horarioId" TEXT NOT NULL,
    "dataAgendada" TIMESTAMP(3) NOT NULL,
    "status" "AgendamentoStatus" NOT NULL DEFAULT 'PENDENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agendamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcompanhanteAgendamento" (
    "id" TEXT NOT NULL,
    "agendamentoId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "status" "AcompanhanteStatus" NOT NULL DEFAULT 'PENDENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AcompanhanteAgendamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AcompanhanteAgendamento_agendamentoId_usuarioId_key" ON "AcompanhanteAgendamento"("agendamentoId", "usuarioId");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_criadoPor_fkey" FOREIGN KEY ("criadoPor") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Local" ADD CONSTRAINT "Local_criadoPor_fkey" FOREIGN KEY ("criadoPor") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ponto" ADD CONSTRAINT "Ponto_localId_fkey" FOREIGN KEY ("localId") REFERENCES "Local"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ponto" ADD CONSTRAINT "Ponto_criadoPor_fkey" FOREIGN KEY ("criadoPor") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HorariosDisponiveis" ADD CONSTRAINT "HorariosDisponiveis_pontoId_fkey" FOREIGN KEY ("pontoId") REFERENCES "Ponto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HorariosDisponiveis" ADD CONSTRAINT "HorariosDisponiveis_criadoPor_fkey" FOREIGN KEY ("criadoPor") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamentos" ADD CONSTRAINT "Agendamentos_publicadorId_fkey" FOREIGN KEY ("publicadorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamentos" ADD CONSTRAINT "Agendamentos_horarioId_fkey" FOREIGN KEY ("horarioId") REFERENCES "HorariosDisponiveis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcompanhanteAgendamento" ADD CONSTRAINT "AcompanhanteAgendamento_agendamentoId_fkey" FOREIGN KEY ("agendamentoId") REFERENCES "Agendamentos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcompanhanteAgendamento" ADD CONSTRAINT "AcompanhanteAgendamento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
