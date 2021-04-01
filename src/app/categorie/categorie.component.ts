import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/Categorie';
import { CategorieService } from '../services/categorie.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  newCategorie: Categorie = new Categorie();
  url = "http://localhost:8000/api/categories";
  constructor(private categorieService: CategorieService, private Route: Router) { }
  ngOnInit() {
  }

  ajouterCategorie() {
    console.log(this.newCategorie)
    this.categorieService.addnew(this.newCategorie).subscribe(
      res=>{    console.log(res);

      }
    )

  }
}
