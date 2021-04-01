import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from '../models/Categorie';
import { Livre } from '../models/Livre';
import { LivreService } from '../services/livre.service';
//import { Observable } from "rxjs/Observable";
//import "rxjs/add/operator/map";
//import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-modif-livre',
  templateUrl: './modif-livre.component.html',
  styleUrls: ['./modif-livre.component.css']
})
export class ModifLivreComponent implements OnInit {

  idLivres:number;
  modifLivres:Livre=new Livre();
  idCategorie: number;
  listCategorie: Categorie[]=[];
  constructor(private livreService:LivreService, private route:ActivatedRoute ) { 
    this.idLivres=parseInt(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit() {
    this.livreService.getOne(this.idLivres).subscribe(
      data=>{
        this.modifLivres=data;
        console.log(data)
      }
    );
  }
ModifierLivre(){
  console.log(this.modifLivres)
  this.livreService.updateOne(this.idLivres,this.modifLivres).subscribe(
    data=>{
      console.log(data)

    }
  );

}
}
