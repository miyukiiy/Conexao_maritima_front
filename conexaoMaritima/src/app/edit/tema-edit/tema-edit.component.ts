import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private authService: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
      //alert('Sua sessão expirou, realize o Login novamente!')
    }

    let id = this.route.snapshot.params['id']
    this.postagemService.refreshToken()
    this.temaService.refreshToken()
    this.authService.refreshToken()
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  atualizar(){
    this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema atualizado com sucesso')
      this.router.navigate(['/tema'])
    })
  }

}
