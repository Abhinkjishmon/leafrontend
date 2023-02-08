import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList = new BehaviorSubject([])
  cartItemArray:any = []
  constructor() { }

  addToCart(product:any){
    this.cartItemArray.push(product)
    this.cartItemList.next(this.cartItemArray)
    console.log(this.cartItemList);
    
  }

}
