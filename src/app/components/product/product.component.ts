import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
      id: '',
      images: [],
      // image: '',
      title: '',
      category: {
        id: '0',
        name: ''
      },
      price: 0,
      description: ''
    }

  @Output() addedProduct = new EventEmitter<Product>();
  onAddToCart(){
    this.addedProduct.emit(this.product)
  }
  
  @Output() detailProduct = new EventEmitter<string>();
  showDetailProduct(){
    this.detailProduct.emit(this.product.id)
  }

}
 