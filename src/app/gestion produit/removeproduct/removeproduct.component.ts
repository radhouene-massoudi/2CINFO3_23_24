import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})
export class RemoveproductComponent {
  id:any;
constructor(private s: ProductService,
  private ac:ActivatedRoute,
  private router:Router
  ){}


ngOnInit(){
  this.id=this.ac.snapshot.params['idofproduct'];
  this.s.removeproduct(this.id).subscribe(
    ()=>{
this.router.navigate(['p'])
    }
  );
}

}
