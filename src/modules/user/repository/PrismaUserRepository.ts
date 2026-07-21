import { PrismaClient } from "@prisma/client";
import type { Usuario } from '@prisma/client';
import { ICreateUsuarioDTO, IUpdateUsuarioDTO, IFindAllUsuarioDTO, IUsuarioRepository } from './IUserRepository';

export class PrismaUserRepository implements IUsuarioRepository {

    constructor(private prisma: PrismaClient) {}
    
    async findById(id: string): Promise<Usuario | null> {
        return this.prisma.usuario.findUnique({
            where: {id},
        });
    };

    async findByEmail(email: string): Promise<Usuario | null> {
        return this.prisma.usuario.findUnique({
            where: {email},
        });
    };
    
    async create(data: ICreateUsuarioDTO): Promise<Usuario> {
        return this.prisma.usuario.create({
            data: {
                nome: data.nome,
                email: data.email,
                senha: data.senha,
                perfil: data.perfil,
                criadoPor: data.criadoPor,
            },
        });
    };

    async update(id: string, data: IUpdateUsuarioDTO): Promise<Usuario> {
        return this.prisma.usuario.update({
            where: {id},
            data: {
                nome: data.nome,
                perfil: data.perfil,
                status: data.status,
            },
        });
    };

    async delete(id: string): Promise<Usuario> {
        return this.prisma.usuario.delete({
            where: {id},
        });
    };

    async findAll(filters?: IFindAllUsuarioDTO): Promise<Usuario[]> {
        return this.prisma.usuario.findMany({
            where: {
                nome: filters?.nome ? { contains: filters.nome, mode: 'insensitive' } : undefined,
                perfil: filters?.perfil,
                status: filters?.status,
            },
            take: filters?.take ?? 100,
            skip: filters?.skip ?? 0,
            orderBy: { createdAt: 'desc' },
        });
    }
    
};