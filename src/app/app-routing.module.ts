import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivreComponent } from './livre/livre.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { DetailCategorieComponent } from './detail-categorie/detail-categorie.component';
import { DetailLivresComponent } from './detail-livres/detail-livres.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModifLivreComponent } from './modif-livre/modif-livre.component';


const routes: Routes = [
  {
    path :"livres",
    component: LivreComponent
   
  },
  {
    path :"login",
    component: LoginComponent
   
  },
  {
    path :"register",
    component: RegisterComponent
   
  },
  {
    path :"users",
    component: UsersComponent
   
  },
  
  {
    path :"categorie",
    component: CategorieComponent
   
  },
 
 
 {
   path:"liste-livres",
   component:ListeLivresComponent
 },
 
 {
  path:"liste-categorie",
  component:ListeCategorieComponent
},


{
  path:"modif-categorie",
  component:ModifCategorieComponent
},


{
  path:"detail-categorie",
  component:DetailCategorieComponent
},
{
  path:"modif-livre",
  component:ModifLivreComponent
},


{
  path:"modif-livre",
  component:ModifLivreComponent
},
{
  path:"detail-livres",
  component:DetailLivresComponent
},
{
  path:"home",
  component:HomeComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
