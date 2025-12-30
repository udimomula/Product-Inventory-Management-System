import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: string, product: Product) {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}