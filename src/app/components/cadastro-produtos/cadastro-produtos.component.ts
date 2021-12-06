import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/dtos/products/product.dto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  product: ProductDTO = {
    product: '',
    price: 0,
    max_parcelas: 0,
    description: '',
    link: ''
  }

  constructor(
    private produtoService: ProdutosService,
    private _snackBar: MatSnackBar,
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
  }

  cadastrarProduto() {
    console.log(this.product)
    if(this.product.product != '' && this.product.price! > 0 && this.product.max_parcelas! > 0 && this.product.description != '' && this.product.link != '') {
      this.produtoService.createProduct(this.product).subscribe((resp) => {
        this._snackBar.open('Produto cadastrado com sucesso', 'Fechar', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 5000,
        });
        this.product = {
          product: '',
          price: 0,
          max_parcelas: 0,
          description: '',
          link: ''
        }
      }, error => {
        console.log(error)
      })
    } else {
      this._snackBar.open('Campo obrigatório não preenchido!', 'Fechar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 5000,
      });
    }
  }

}
