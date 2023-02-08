import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit{

  wishlist:any;
  wishlistStatusMsg = ''

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getWishlist()
    .subscribe((result:any)=>{
      this.wishlist = result.wishlist
      if(this.wishlist.length==0){
        this.wishlistStatusMsg='wishlist empty'
      }
    },
    (result:any)=>{
      if(result.error.message){
        this.wishlistStatusMsg = 'wishlist empty'
      }
    }
    )
  }
  removeItem(productId:any){
    this.api.removeItemFromWishlist(productId)
    .subscribe(
      (result:any)=>{
        this.wishlist =result.wishlist
        console.log(this.wishlist);
        if(this.wishlist.length==0){
          this.wishlistStatusMsg = 'wishlist empty'
        }
        
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }
}
