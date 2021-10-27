import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  usuario: Usuario = new Usuario()
  idUsuario = environment.id


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    
    this.postagemService.refreshToken()
    this.temaService.refreshToken()
    this.authService.refreshToken()
    this.getAllTemas()
    this.getAllPostagens()
  }
  
  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }


  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }


  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  
  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    if(this.postagem.fotoPostagem == null || this.postagem.fotoPostagem == ''){
      this.postagem.fotoPostagem = 'https://i.imgur.com/wzLaNQF.png'
    }

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens() 
    })

  }

  logado() {
    let ok: boolean = false;

    if(environment.token != ''){
      ok = true
    }

    return ok
  }
  
}
