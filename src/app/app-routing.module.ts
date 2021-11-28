import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  // { path: 'login', component: PostListComponent },
  { path: 'cadastrar', component: CadastroUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
