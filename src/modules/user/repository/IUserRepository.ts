import type { Usuario, NivelPermissao, StatusUsuarioCriado } from '@prisma/client';

export interface ICreateUsuarioDTO {
    nome: string;
    email: string;
    senha?: string;
    perfil?: NivelPermissao;
    criadoPor?: string;
};

export interface IUpdateUsuarioDTO {
    nome?: string;
    perfil?: NivelPermissao;
    status?: StatusUsuarioCriado;
};

export interface IFindAllUsuarioDTO {
    nome?: string;
    perfil?: NivelPermissao;
    status?: StatusUsuarioCriado;
    take?: number,
    skip?: number,
};

export interface IUsuarioRepository {
    create(data: ICreateUsuarioDTO): Promise<Usuario>;
    update(id: string, data: IUpdateUsuarioDTO): Promise<Usuario>;
    delete(id: string): Promise<Usuario>;
    findByEmail(email: string): Promise<Usuario | null>;
    findById(id: string): Promise<Usuario | null>;
    findAll(filters?: IFindAllUsuarioDTO): Promise<Usuario[]>;
};