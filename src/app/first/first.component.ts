import { Component } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  constructor(private s:FirstService){

  }

  ngOnInit(){
    this.s.sayHello();
  }
klass='2cinfo3 sjfsjfsf';
color="yellow"
search="";
Products=[
  {name:"hp",price:1500,like:0,dislike:5,quantity:5},
  {name:"lennovo",price:500,like:0,dislike:5,quantity:0},
  {name:"asus",price:450,like:0,dislike:5,quantity:5},
]
showMsg(){
  alert('bonjour');
}
changeColor(){
 this.color='green' 
}
IncreaseLike(pro:any){
  let index=this.Products.indexOf(pro)
//console.log(pro)

this.Products[index].like++
}
dislike(index:any){
this.Products[index].dislike--
}
}
