import { Usuario } from "@generated"


export interface IUserRepository {
    findById(id: string): Promise<Usuario | null>

}