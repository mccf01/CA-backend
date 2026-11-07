import { AuthenticateUserService } from '@/modules/auth/services/AuthenticateUserService';
import { IUsuarioRepository } from '@/modules/user/repository/IUserRepository';
import { StatusUsuarioCriado, NivelPermissao } from '@prisma/enums';
import { jest } from '@jest/globals';
import bcrypt from 'bcryptjs';

describe('AuthenticateUserService', () => {
    const findByEmailMock = jest.fn<IUsuarioRepository['findByEmail']>();

    const senha = "senha123";
    
    let usuarioMockValido: NonNullable<
        Awaited<ReturnType<IUsuarioRepository['findByEmail']>>
    >;

    let usuarioMockInativo: typeof usuarioMockValido;
    let usuarioMockSemSenha: typeof usuarioMockValido;

    const usuarioRepositoryMock = {
        findByEmail: findByEmailMock,
    } as unknown as IUsuarioRepository;

    let authService: AuthenticateUserService;

    beforeAll(async () => {
        const hashSenha = await bcrypt.hash(senha, 10);
        
        usuarioMockValido = {
        id: "1",
        nome: "Usuário Valido Teste",
        email: "emailvalido@gmail.com",
        senha: hashSenha,
        perfil: NivelPermissao.PUBLICADOR,
        status: StatusUsuarioCriado.ATIVO,
        criadoPor: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        };

        usuarioMockInativo= {
            ...usuarioMockValido,
            status: StatusUsuarioCriado.INATIVO,
        }

        usuarioMockSemSenha = {
            ...usuarioMockValido,
            senha: null,
        }
    });

    beforeEach(() => {
        jest.clearAllMocks();
        authService = new AuthenticateUserService(usuarioRepositoryMock);
    });

    //CENÁRIOS INVÁLIDOS (E-mail e senha)

    it('Deve rejeitar quando o usuário não for encontrado/não existir', async () => {
        findByEmailMock.mockResolvedValue(null);

        await expect(
            authService.execute({
                email: "usuarioinexistente@gmail.com",
                senha: "senha123",
            })
        ).rejects.toThrow("E-mail ou senha incorretos");

        expect(findByEmailMock).toHaveBeenCalledWith("usuarioinexistente@gmail.com");
    });

    it('Deve rejeitar quando a senha estiver incorreta', async () => {
        findByEmailMock.mockResolvedValue(usuarioMockValido);

        await expect(
            authService.execute({
                email: usuarioMockValido.email,
                senha: "senhaIncorreta",
            })
        ).rejects.toThrow("E-mail ou senha incorretos");

        expect(findByEmailMock).toHaveBeenCalledWith(usuarioMockValido.email);
    });

    it('Deve rejeitar quando o usuário não tiver senha definida', async () => {
        findByEmailMock.mockResolvedValue(usuarioMockSemSenha);

        await expect(
            authService.execute({
                email: usuarioMockSemSenha.email,
                senha: senha,
            })
        ).rejects.toThrow("E-mail ou senha incorretos");
    });

    //CENÁRIOS INVÁLIDOS (Status do usuário)

    it('Deve rejeitar quando o status do usuário não for ATIVO', async () => {
        findByEmailMock.mockResolvedValue(usuarioMockInativo);

        await expect(
            authService.execute({
                email: usuarioMockInativo.email,
                senha: senha,
            })
        ).rejects.toThrow("E-mail ou senha incorretos");

        expect(findByEmailMock).toHaveBeenCalledWith(usuarioMockInativo.email);
    });

    //CENÁRIOS INVÁLIDOS (JWT)

    it('Deve rejeitar quando a variável de ambiente JWT_SECRET não estiver definida', async () => {
        findByEmailMock.mockResolvedValue(usuarioMockValido);

        const jwtSecretOriginal = process.env.JWT_SECRET;
        delete process.env.JWT_SECRET;

        try {
            await expect(
                authService.execute({
                    email: usuarioMockValido.email,
                    senha: senha,
                })
            ).rejects.toThrow("JWT_SECRET não definido");
        } finally {
            if (jwtSecretOriginal !== undefined) {
                process.env.JWT_SECRET = jwtSecretOriginal; // Restaura a variável de ambiente JWT_SECRET para o valor original após o teste, pois não afeta outros testes, mas é uma boa prática restaurar o estado original.
            } else {
                delete process.env.JWT_SECRET; // Remove a variável de ambiente JWT_SECRET se ela não estava definida originalmente.
            }
        }
    });

    //CENÁRIO VÁLIDO

    it('Deve autenticar com sucesso quando o e-mail e senha estiverem corretos e o status do usuário for ATIVO', async () => {
        findByEmailMock.mockResolvedValue(usuarioMockValido);

        const result = await authService.execute({
            email: usuarioMockValido.email,
            senha: senha,
        });

        expect(result).toHaveProperty('token');
        expect(result.token).toEqual(expect.any(String));
        expect(result.token.length).toBeGreaterThan(0);
        expect(result).toHaveProperty('usuario');
        expect(result.usuario.email).toBe(usuarioMockValido.email);
        expect(result.usuario.id).toBe(usuarioMockValido.id);
        expect(result.usuario.perfil).toBe(usuarioMockValido.perfil);
    });

});