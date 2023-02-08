import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{

  productId:any;
  viewProduct:any
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){

  }

  ngOnInit(): void {
    //fetch pathparameter from url
    this.activatedRoute.params
    .subscribe((data:any)=>{
      console.log(data['id']);
      this.productId = data['id']
    })

    //to get details of requested product
    this.api.viewProduct(this.productId)
    .subscribe((result:any)=>{
      console.log(result.products);
      this.viewProduct = result.products
      
    })
    
  }

  //addtowishlist(viewProduct)
  addtowishlist(product:any){
    this.api.addtowishlist(product)
    .subscribe((result:any)=>{
      alert(result.message)
    },
    (result:any)=>{
      alert(result.error.message)
    }
    )
  }
}
