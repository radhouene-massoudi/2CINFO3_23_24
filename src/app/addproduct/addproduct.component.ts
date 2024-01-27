import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  
constructor(
  private s:FirstService
){

}
ngOnInit(){
  this.s.sayHello()
}

login=new FormControl('',Validators.required);
pwd=new FormControl('',Validators.minLength(3));
formLogin=new FormGroup(
  {
    loginfg: new FormControl('',[Validators.pattern("[0-9]*")]),
    pwdfg: new FormControl('',[Validators.required,Validators.minLength(3)])
  }
)
showFormControl(){
  console.log(this.login);
}
checkForm(){
  return !((this.login.valid) && (this.pwd.valid))
}
}
