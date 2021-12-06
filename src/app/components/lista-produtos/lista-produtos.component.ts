import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProdutoDialogComponent } from '../../components/delete-produto-dialog/delete-produto-dialog.component';
import { ProductDTO } from '../../dtos/products/product.dto';
import { EditarProdutoDialogComponent } from '../editar-produto-dialog/editar-produto-dialog.component';
import { ProdutosService } from '../../services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  displayedColumns: string[] = ['Produto', 'Preço', 'Max_parcelas', 'Ações'];
  products: ProductDTO[] | any;

  constructor(
    public dialog: MatDialog,
    private produtoService: ProdutosService,
    private router: Router
    ) { }

  
  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('user')!)
    if(!userData) {
      this.router.navigateByUrl('/')
    }
    if(userData.typeAccess != 'ADMIN'){
      this.router.navigateByUrl('/')
    }
    this.findAllProducts()
  }

  async findAllProducts() {
    this.produtoService.getAllProducts().subscribe(resp => {
      this.products = resp;
    })
  }

  openDialogEdit(data: any) {
    const dialogRef = this.dialog.open(EditarProdutoDialogComponent, {
      data: data,
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.produtoService.updateProduct(data._id, result).subscribe((resp) => {})
      }
    });
  }
  
  openDialogDelete(productId: string) {
    const dialogRef = this.dialog.open(DeleteProdutoDialogComponent, {
      
    });

    dialogRef.afterClosed().subscribe(async result => {
      if(result) {
        this.produtoService.deleteProduct(productId).subscribe((resp) => {
          this.products = this.products.filter((product: { _id: string; }) => product._id !== productId)
        })
      }
    });
  }

}
