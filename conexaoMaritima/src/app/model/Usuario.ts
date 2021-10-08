import { Postagem } from "./Postagem"

export class Usuario{
    public id : number
    public nome: string
    public senha:string
    public tipo: string
    public usuario: string
    public foto: string
    // public dataNascimento: Date;
    public postagem: Postagem[]

}