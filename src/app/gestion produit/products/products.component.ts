import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any;
  constructor(
    private s:ProductService
  ){

  }
  ngOnInit(){
 //console.log(this.s.fetchProducts()) 
 this.s.fetchProducts().subscribe(
  (result)=>{
    this.products=result;
    console.log( result);
  }
 );
  }
}
