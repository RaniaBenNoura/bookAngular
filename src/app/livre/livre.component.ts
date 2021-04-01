import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livre} from '../models/Livre';
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';
import { Categorie } from '../models/Categorie';
//import { Auteurs } from '../models/Auteurs';
import { CategorieService } from '../services/categorie.service';
//import { AuteursService } from '../services/auteurs.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  newLivres: Livre=new Livre();
  idCategorie: number;
  listCategorie: Categorie[]=[];
  //url = "http://localhost:8000/api/livres";

  //listAuteur: Auteurs[]=[];

  constructor(private livreService:LivreService, private route:Router, private categorieService:CategorieService,
    //private AuteursService: AuteursService
    ) { }

  ngOnInit() {
    this.categorieService.getAll().subscribe(
      data=>{
        this.listCategorie=data;
        console.log(data);
      }
    );


 /*this.AuteursService.getAll().subscribe(
   data=>{
     this.listAuteur=data;
     console.log(data);
   }
 );*/
 
  }


  AjouterLivres(){
    console.log(this.newLivres)
    this.livreService.addnew(this.newLivres).subscribe(
      res=>{    console.log(res);


      }
    );

  }

  
}
