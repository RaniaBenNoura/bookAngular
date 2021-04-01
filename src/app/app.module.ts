import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormGroup, FormsModule} from '@angular/forms'
import{ HttpClientModule }from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { DetailLivresComponent } from './detail-livres/detail-livres.component';
import { DetailCategorieComponent } from './detail-categorie/detail-categorie.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { FormControl} from '@angular/forms';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ModifLivreComponent } from './modif-livre/modif-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    CategorieComponent,
    ListeLivresComponent,
    ListeCategorieComponent,
    ModifCategorieComponent,
    DetailLivresComponent,
    DetailCategorieComponent,
    HomeComponent,
    HeaderComponent,
    UsersComponent,
    AdduserComponent,
    LoginComponent,
    RegisterComponent,
    ModifLivreComponent,
    
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   // FormControl,
    //FormGroup,
    HttpClientModule
    //FormGroup

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
