import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsAPIService } from 'src/app/services/products-api.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  myShoppingCart: Product[] = []
  total: number = 0

  productDetail: boolean = false

  productChosen: Product = {
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

  constructor( 
    private storeService: StoreService, 
    private productsService: ProductsAPIService
    ){
    this.myShoppingCart = this.storeService.getMyShoppinCart()
  }

  ngOnInit(){
    this.productsService.getAllProducts()
    .subscribe( data => {
      this.products = data;
    })
  }

  products: Product[] = []

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal()
  }

  onshowDetailProduct(id:string){
    this.productsService.getProduct(id)
    .subscribe( data => {
      this.productDetail = !this.productDetail
      this.productChosen = data
      // console.log('product:', data)
    })
  }

  toogleProductDetail(){
    this.productDetail = !this.productDetail
  }

}
