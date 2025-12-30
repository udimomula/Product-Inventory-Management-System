import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products: Product[] = [];
  product: Product = { productCode: '', productName: '', category: '', price: 0 };
  isEdit = false;
  selectedId = '';

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.service.getProducts().subscribe(data => this.products = data);
  }

  addProduct() {
    this.service.addProduct(this.product).subscribe(() => {
      this.resetForm();
      this.loadProducts();
    });
  }

  editProduct(p: Product) {
    this.product = { ...p };
    this.selectedId = p._id!;
    this.isEdit = true;
  }

  updateProduct() {
    this.service.updateProduct(this.selectedId, this.product).subscribe(() => {
      this.resetForm();
      this.loadProducts();
    });
  }

  deleteProduct(id: string) {
    this.service.deleteProduct(id).subscribe(() => this.loadProducts());
  }

  resetForm() {
    this.product = { productCode: '', productName: '', category: '', price: 0 };
    this.isEdit = false;
  }
}
