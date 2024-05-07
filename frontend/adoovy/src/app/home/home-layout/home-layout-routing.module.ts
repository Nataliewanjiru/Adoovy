import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';
import { AddWebsiteComponent } from 'src/app/seller/seller-layout/add-website/add-website.component';


const routes: Routes = [
  {path: "",component: LandingpageComponent},
  {path: "signup",component: SignupComponent},
  {path: "signin",component: SigninComponent},
  {path: "seller/add-website",component: AddWebsiteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class homeLayoutRoutingModule { }