import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/dtos/products/product.dto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  product: ProductDTO = {
    product: '',
    price: 0,
    max_parcelas: 0,
    description: '',
    link: ''
  }

  constructor(
    private produtoService: ProdutosService,
  ) { }

  ngOnInit(): void {
  }

  cadastrarProduto() {
    console.log(this.product)
    this.produtoService.createProduct(this.product).subscribe((resp) => {
      console.log(resp)
    }, error => {
      console.log(error)
    })
  }

}
