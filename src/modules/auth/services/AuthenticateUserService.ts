import { IUsuarioRepository } from "@/modules/user/repository/IUserRepository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

interface IRequestDTO {
    email: string;
    senha: string;
};

export class AuthenticateUserService {
    constructor(private usuarioRepository: IUsuarioRepository) {}

    async execute({ email, senha }: IRequestDTO) {
        const usuario = await this.usuarioRepository.findByEmail(email);
        
        if (!usuario|| !usuario.senha) {
            throw new Error("E-mail ou senha incorretos");
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            throw new Error("E-mail ou senha incorretos");
        }

        if (usuario.status === "INATIVO" || usuario.status === "PENDENTE") {
            throw new Error("E-mail ou senha incorretos");
        }

        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new Error("JWT_SECRET não definido");
        }
        
        const token = jwt.sign(
            { perfil: usuario.perfil },
            secret,
            {
                subject: usuario.id,
            }
        );

        return {
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                perfil: usuario.perfil,
            },
            token,
        }
    }

}