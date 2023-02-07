import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchKey:string = ""

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
}
