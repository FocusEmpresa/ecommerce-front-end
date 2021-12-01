import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ListaVendasComponent } from './lista-vendas/lista-vendas.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastroUsuarioComponent },
  { path: 'admin/cadastro-produto', component: CadastroProdutosComponent },
  { path: 'admin/lista-produtos', component: ListaProdutosComponent },
  { path: 'admin/lista-vendas', component: ListaVendasComponent },
  { path: 'carrinho', component: CarrinhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
