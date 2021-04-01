import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/Categorie';
import { Livre } from '../models/Livre';
import {Observable} from 'rxjs';
import { CategorieService } from '../services/categorie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css']
})
export class ListeCategorieComponent implements OnInit {
 //categ: Categorie= {};
//listCategorie: Array<Categorie> =[];
listCategorie: Categorie[];

  constructor(private categorieService:CategorieService , private router: Router) { }

  ngOnInit() {
  this.categorieService.getAll().subscribe(
    res=>{
      console.log(res)
      this.listCategorie=res;
    });
  }
  supprimerCategorie(id:number){
   this.categorieService.deleteOne(id).subscribe(
     res=>{
       this.ngOnInit();

     }
   );
  }

  onViewCategorie(id: number) {
    this.router.navigate(['/categories', 'view', id]);
  }
  
}
