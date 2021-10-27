import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  titulo: string
  tituloPost: string
  listaPostagens: Postagem[]
  stringPesquisa: string

  
  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private route : ActivatedRoute,
    private router: Router
  ) { 
    router.events.subscribe((e) => {

      if (e instanceof NavigationEnd) {
        route.params.subscribe(p => {
          this.stringPesquisa = p.nome
        })

        this.BuscarPostagem(this.stringPesquisa)
      }
    })
  }

  ngOnInit() {
    window.scroll(0, 0)
    
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
      alert('Faça login ou cadastre-se para buscar o evento!')
    }

    this.postagemService.refreshToken()
    this.temaService.refreshToken()
    this.authService.refreshToken()
    this.stringPesquisa = ""
    this.getPostagensByTitulo()
  }

  getPostagensByTitulo(){
    this.postagemService.getPostagemByTitulo(this.titulo).subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp

      console.log(this.listaPostagens)
    })
  }

  
  getAllPostagem(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  BuscarPostagem(nome: string) {
    if (this.stringPesquisa != undefined) {
      this.postagemService.getPostagemByTitulo(nome).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    } else {
      this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
}

findByTituloPostagem(){
  if(this.tituloPost == ''){
    this.getAllPostagem()
  }else{
  this.postagemService.getPostagemByTitulo(this.tituloPost).subscribe((resp: Postagem[])=> {
    this.listaPostagens = resp
  })
}
}

}