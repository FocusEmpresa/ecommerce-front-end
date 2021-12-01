import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProdutoDialogComponent } from '../delete-produto-dialog/delete-produto-dialog.component';
import { EditarProdutoDialogComponent } from '../editar-produto-dialog/editar-produto-dialog.component';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  displayedColumns: string[] = ['Produto', 'Preço', 'Max_parcelas', 'Ações'];
  dataSource = [
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
    {produto: 'Mouse gamer', preco: '25,00', max_parcelas: 4, descricao: 'blablabla'},
  ];

  constructor(public dialog: MatDialog) { }

  
  ngOnInit(): void {
  }

  openDialogEdit() {
    const dialogRef = this.dialog.open(EditarProdutoDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  openDialogDelete() {
    const dialogRef = this.dialog.open(DeleteProdutoDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
