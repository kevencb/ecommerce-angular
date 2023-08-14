import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  
  private myCart = new BehaviorSubject<Product[]>([])
  myCart$ = this.myCart.asObservable()

  private myShoppingCart: Product[] = []
  getMyShoppinCart(){
    return this.myShoppingCart;
  }

  addProduct(product: Product){
    this.myShoppingCart.push(product)
    this.myCart.next(this.myShoppingCart)
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)
  }


}
