import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/dtos/products/product.dto';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newProducts: any = []
  promotionsProducts: any = []
  allProducts: any = []

  constructor(private productService: ProdutosService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(async (resp) => {
      this.allProducts = resp
      this.promotionsProducts = this.allProducts.filter((item: { type: string; }) => item.type == 'PROMOÇÃO')
      this.newProducts = this.allProducts.filter((item: { type: string; }) => item.type == 'NOVO')
      console.log(this.allProducts)
    })
  }

}
