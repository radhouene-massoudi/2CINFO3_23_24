import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-addp',
  templateUrl: './addp.component.html',
  styleUrls: ['./addp.component.css']
})
export class AddpComponent {
formadd= new FormGroup({
name:new FormControl(''),
price:new FormControl(''),
})
constructor(private s:ProductService){

}
saveproduct(){
this.s.addProduct(this.formadd.value).subscribe()
}
}
