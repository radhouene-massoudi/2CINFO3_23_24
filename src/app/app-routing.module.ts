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
import { AddpComponent } from './gestion produit/addp/addp.component';
import { RemoveproductComponent } from './gestion produit/removeproduct/removeproduct.component';
import { UpdateproductComponent } from './gestion produit/updateproduct/updateproduct.component';

const r: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'remove/:idofproduct',component:RemoveproductComponent},
  {path:'first',component:FirstComponent},
  {path:'updateproduct/:id',component:UpdateproductComponent},
  {path:'p',component:ProductsComponent},
  {path:'ajout',component:AddpComponent},
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
