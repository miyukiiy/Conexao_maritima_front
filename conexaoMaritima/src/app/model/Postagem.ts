import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
     public id : number
     public titulo: string
     public texto: string
     public data: Date
     public usuario: Usuario
     public tema: Tema
     public dataEvento: Date
     public fotoPostagem: string
     public curtir: number
     public descurtir: number
     public participar: number
}