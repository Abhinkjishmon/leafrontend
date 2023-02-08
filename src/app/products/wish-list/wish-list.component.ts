import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit{

  wishlist:any;
  wishlistStatus = false

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getWishlist()
    .subscribe((result:any)=>{
      this.wishlist = result.wishlist
      this.wishlistStatus = true
    },
    (result:any)=>{
      if(result.error.message){
        this.wishlistStatus = false
      }
    }
    )
  }
}
