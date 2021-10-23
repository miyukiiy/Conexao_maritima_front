import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MinhasPostagensComponent } from './minhas-postagens/minhas-postagens.component';
import { PostarComponent } from './postar/postar.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path:'sobre', component: SobreComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
  {path: 'user-edit/:id', component: UserEditComponent},
<<<<<<< HEAD
  {path: 'postar/:id', component: PostarComponent},
  {path: 'minhas-postagens', component: MinhasPostagensComponent}
=======
  {path: 'postar/:id', component: PostarComponent}

>>>>>>> 50f67f4a1c2a2c1fd54cda56fbcb2bbc638fa0fc
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
