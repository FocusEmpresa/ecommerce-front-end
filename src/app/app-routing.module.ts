import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutosComponent } from './components/cadastro-produtos/cadastro-produtos.component';
import { CadastroUsuarioComponent } from '../app/components/cadastro-usuario/cadastro-usuario.component';
import { CarrinhoComponent } from '../app/components/carrinho/carrinho.component';
import { ListaProdutosComponent } from '../app/components/lista-produtos/lista-produtos.component';
import { ListaVendasComponent } from '../app/components/lista-vendas/lista-vendas.component';
import { LoginComponent } from '../app/components/login/login.component';
import { DadosUsuarioComponent } from './components/dados-usuario/dados-usuario.component';
import { PainelUsuarioComponent } from './components/painel-usuario/painel-usuario.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastroUsuarioComponent },
  { path: 'admin/cadastro-produto', component: CadastroProdutosComponent },
  { path: 'admin/lista-produtos', component: ListaProdutosComponent },
  { path: 'admin/lista-vendas', component: ListaVendasComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'painel-usuario', component: PainelUsuarioComponent },
  { path: 'usuario', component: DadosUsuarioComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
