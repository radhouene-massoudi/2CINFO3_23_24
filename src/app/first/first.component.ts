import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
klass='2cinfo3 sjfsjfsf';
color="yellow"
showMsg(){
  alert('bonjour');
}
changeColor(){
 this.color='green' 
}
}
