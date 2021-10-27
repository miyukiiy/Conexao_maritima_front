import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-postar',
  templateUrl: './postar.component.html',
  styleUrls: ['./postar.component.css']
})
export class PostarComponent implements OnInit {

  postagem: Postagem = new Postagem()
  usuario: Usuario = new Usuario()
  idUsuario = environment.id
  idPostagem: Postagem;
  listaPostagens: Postagem[];
  postagemCurtir: Postagem = new Postagem()
  postagemDescurtir: Postagem = new Postagem()
  postagemParticipar: Postagem = new Postagem()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private authService: AuthService,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
      alert('Faça login ou cadastre-se para visualizar o evento completo!')
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.findByIdUsuario()
    this.authService.refreshToken()
    this.temaService.refreshToken()
    this.postagemService.refreshToken()
    this.postagemService.getAllPostagens()
    this.postagemService.getByIdPostagem(id)
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

  getPostagemById(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) =>{
    this.idPostagem = resp
    })  }
  
  curtida(id: number) {
    this.postagemService.putCurtir(id).subscribe((resp: Postagem) => {
    this.postagem = resp
    this.getPostagemById(id)
    this.postagemCurtir = new Postagem()
  })
  
  }
  
  descurtida(id: number) {
        this.postagemService.putDescurtir(id).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.getAllPostagens()
        this.postagemDescurtir = new Postagem()
  })
  }
  
  participar(id: number) {
    this.postagemService.putParticipar(id).subscribe((resp: Postagem) => {
    this.postagem = resp
    this.getAllPostagens()
    this.postagemParticipar = new Postagem()
  })
  
  }

}
