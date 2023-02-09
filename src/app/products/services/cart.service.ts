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
    this.grandTotal()
    
  }

  //grandTotal
  grandTotal(){
    let total = 0
    this.cartItemArray.map((item:any)=>{
      total += item.price
      console.log(total)
    })
    return total
  }

  //remove a particular item from cart
  removeCartItem(product:any){
    this.cartItemArray.map((item:any,index:any)=>{
      if(product.id==item.id){
        this.cartItemArray.splice(index,1)
      }
    })
    this.cartItemList.next(this.cartItemArray)
  }

  //removeCart
  removeCart(){
    this.cartItemArray = []
    this.cartItemList.next(this.cartItemArray)
  }

}
