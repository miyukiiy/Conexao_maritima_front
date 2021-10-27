import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

/* a */

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUser: string


  constructor(private authService: AuthService, private router: Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any) {
    this.tipoUser = event.target.value
  }

  cadastrar() {
    this.usuario.tipo = this.tipoUser
    if(this.usuario.foto == null || this.usuario.foto == ''){
      this.usuario.foto = 'https://i.imgur.com/3PcU6T5.jpg'
      }
    if(this.usuario.senha != this.confirmarSenha){
      alert('As senhas não confirmam!!')
    }else{
      console.log(this.usuario)
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        alert('Usuário cadastrado com SUCESSO!')
        this.router.navigate(['/entrar'])
      })
    }
  }

  // logar(){
  //   if(this.usuario.foto = ''){
  //     this.usuario.foto = 'https://i.imgur.com/tfcDSn8.png'
  //     }
  // }
}  
