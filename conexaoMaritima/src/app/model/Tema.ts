import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public descricao:string
    public palavrasChaves:string
    public nomeTema:string
    public postagem: Postagem[]
}