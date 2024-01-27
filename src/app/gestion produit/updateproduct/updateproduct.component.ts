import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
constructor(
  private s: ProductService,
  private ac:ActivatedRoute,
  private router:Router
  ){}
  formadd= new FormGroup({
    name:new FormControl(''),
    price:new FormControl(''),
    })
  ngOnInit(){
    this.s.findById(this.ac.snapshot.params['id']).subscribe(
      (result)=>{
this.formadd.patchValue(result);
      }
    )
  }

  updateproduct(){
  this.s.updateproduct(this.ac.snapshot.params['id'],this.formadd.value).subscribe(
    ()=>{
this.router.navigate(['p'])
    }
  )
}
}
