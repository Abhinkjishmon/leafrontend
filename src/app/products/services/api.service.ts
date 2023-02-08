import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //to hold search key from header component
  searchKey = new BehaviorSubject('')

  constructor(private http: HttpClient) {
    
   }

  //all-products api
  getAllProducts() {
    return this.http.get('http://localhost:3000/all-products')
  }
  //view-product api
  viewProduct(productId: any) {
    return this.http.get('http://localhost:3000/view-products/' + productId)
  }
  //add-to-wishlist api call
  addtowishlist(product:any){
    return this.http.post('http://localhost:3000/add-to-wishlist/',product)
  }

  //get-wishlist api call
  getWishlist(){
    return this.http.get('http://localhost:3000/get-wishlist')
  }

  //remove-item-wishlist/:productId api call
  removeItemFromWishlist(productId:any){
    return this.http.delete('http://localhost:3000/remove-item-wishlist/' +productId)
  }
}
