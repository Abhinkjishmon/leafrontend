import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems:any = []
  grandTotal:number=0

    constructor(private cart:CartService){

    }

    ngOnInit(): void {
      this.cart.cartItemList.subscribe(
        (data:any)=>{
          this.cartItems = data
        }
      )

      this.grandTotal = this.cart.grandTotal()
    }

    //removeItem(product)
    removeItem(product:any){
      this.cart.removeCartItem(product)
      this.grandTotal = this.cart.grandTotal()
    }
    //emptyCart
    emptyCart(){
      this.cart.removeCart()
    }
}
