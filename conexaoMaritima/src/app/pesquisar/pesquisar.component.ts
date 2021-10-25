import { Component, OnInit } from '@angular/core';
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

  stringPesquisa: string;
  postagem1 = Postagem;
  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  idPostagem = environment.id;
  listaPostagemMaisCurtidas: Postagem[];

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService
  ) { }

  

  ngOnInit() {
    window.scroll(0, 0)

    this.postagemService.refreshToken()
    this.temaService.refreshToken()
    this.authService.refreshToken()
  }

/*   BuscarPostagem(titulo: string) {
   this.stringPesquisa != undefined 
      this.postagemService
        .getByTituloPostagem()
        .subscribe((resp: Postagem[]) => {
          this.listaPostagens = resp;
        });

        findByTituloPostagem() 
          this.postagemService
          .getByTituloPostagem(this.titulo)
          .subscribe((resp: Postagem[]) => {
            this.listaPostagens = resp;
          });

} */

}
