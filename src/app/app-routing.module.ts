import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './detail/detail.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FirstComponent } from './first/first.component';
import { ProductsComponent } from './gestion produit/products/products.component';

const r: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'first',component:FirstComponent},
  {path:'p',component:ProductsComponent},
  {path:'home',component:HomeComponent},
  {path:'add',component:AddproductComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'detail/:idt',component:DetailComponent},
  {path:'**',component:NotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(r)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
