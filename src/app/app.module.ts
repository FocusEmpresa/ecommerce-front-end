import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/login/login.component';
import { CadastroUsuarioComponent } from '../app/components/cadastro-usuario/cadastro-usuario.component';
import { EsqueciSenhaDialogComponent } from '../app/components/esqueci-senha-dialog/esqueci-senha-dialog.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { CadastroProdutosComponent } from './components/cadastro-produtos/cadastro-produtos.component';
import { CarrinhoComponent } from '../app/components/carrinho/carrinho.component';
import { ListaProdutosComponent } from '../app/components/lista-produtos/lista-produtos.component';
import { EditarProdutoDialogComponent } from './components/editar-produto-dialog/editar-produto-dialog.component';
import { DeleteProdutoDialogComponent } from './components/delete-produto-dialog/delete-produto-dialog.component';
import { ListaVendasComponent } from '../app/components/lista-vendas/lista-vendas.component';
import { DadosUsuarioComponent } from './components/dados-usuario/dados-usuario.component';
import { AlterarUsuarioDialogComponent } from './alterar-usuario-dialog/alterar-usuario-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    EsqueciSenhaDialogComponent,
    HeaderComponent,
    CadastroProdutosComponent,
    CarrinhoComponent,
    ListaProdutosComponent,
    EditarProdutoDialogComponent,
    DeleteProdutoDialogComponent,
    ListaVendasComponent,
    DadosUsuarioComponent,
    AlterarUsuarioDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatStepperModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
