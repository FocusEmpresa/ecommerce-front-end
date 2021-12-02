import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProdutoDialogComponent } from '../../components/delete-produto-dialog/delete-produto-dialog.component';
import { ProductDTO } from '../../dtos/products/product.dto';
import { EditarProdutoDialogComponent } from '../editar-produto-dialog/editar-produto-dialog.component';
import { ProdutosService } from '../../services/produtos.service';

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

  products: ProductDTO = {
    name: ''
  }

  constructor(
    public dialog: MatDialog,
    private produtoService: ProdutosService
    ) { }

  
  ngOnInit(): void {
    this.findAllProducts()
  }

  async findAllProducts() {
    await this.produtoService.getAllProducts().subscribe(resp => {
      this.products = resp
      console.log(this.products)
    })
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
