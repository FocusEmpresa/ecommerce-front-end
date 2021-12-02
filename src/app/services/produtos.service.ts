import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(`${environment.apiUrl}/products`)
  }

  createProduct(data: any) {
    return this.http.post(`${environment.apiUrl}/products`, data)
  }

  deleteProduct(productId: String) {
    return this.http.delete(`${environment.apiUrl}/products/${productId}`)
  }

  updateProduct(productId: String, data: any) {
    return this.http.put(`${environment.apiUrl}/products/${productId}`, data)
  }

}
