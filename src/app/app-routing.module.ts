import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user-management/user/user.component';
import { ProductComponent } from './product-management/product/product.component';
import { EnquiryComponent } from './enquiry-management/enquiry/enquiry.component';
import { FaqComponent } from './faq-management/faq/faq.component';
import { CreateEditComponent } from './product-management/create-edit/create-edit.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
  { path:'product', component:ProductComponent},
  { path:'enquiry',component:EnquiryComponent},
  { path:'faq', component:FaqComponent},

  { path:'create-product',component:CreateEditComponent},
  { path:'create-product/:id',component:CreateEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
