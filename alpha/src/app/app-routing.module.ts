import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';

const routes: Routes = [
  {
    path : "home",
    component: HomeComponent
  },
  {
    path : "who-we-are",
    component: WhoWeAreComponent
  },
  {
    path : "what-we-do",
    component: WhatWeDoComponent
  },
  {
    path : "services",
    component: ServicesComponent
  },
  {
    path : "testimonials",
    component: TestimonialsComponent
  },
  {
    path : "contact",
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: "home",
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
