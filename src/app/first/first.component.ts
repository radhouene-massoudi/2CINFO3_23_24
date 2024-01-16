import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
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
