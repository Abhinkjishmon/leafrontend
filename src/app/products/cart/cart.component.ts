import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems:any = []
  grandTotal:number=0
  discount:number =0
  discountTotal:number =0
  checkOutMsg:any = ''

    constructor(private cart:CartService,private router:Router){

    }

    ngOnInit(): void {
      this.cart.cartItemList.subscribe(
        (data:any)=>{
          this.cartItems = data
        }
      )
      let total = this.cart.grandTotal()
      this.grandTotal =Number(total.toFixed(2))
      this.discountTotal = this.grandTotal
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
    //discount3percent()
    discount3percent(){
      this.discount = this.grandTotal * .03
      this.discountTotal -= this.discount
    }

    //discount10percent()
    discount10percent(){
      this.discount = this.grandTotal * .10
      this.discountTotal -= this.discount
    }

    //discount3percent()
    discount50percent(){
      this.discount = this.grandTotal * .50
      this.discountTotal -= this.discount
    }

    //checkOut()
    checkOut(){
      this.checkOutMsg = "successfully placed your order... Thank You"
      setTimeout(()=>{
        this.emptyCart();
        window.location.reload()
      }, 2000)
    }
}
