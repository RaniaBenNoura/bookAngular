import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/Livre';
import { LivreService } from '../services/livre.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent implements OnInit {
//livres: Livre = {};
  listLivres: Array <Livre> =[];

  constructor(private livreService:LivreService) { }

  ngOnInit() {
  
    this.livreService.getAll().subscribe(
      res=>{
        this.listLivres=res;
      }
    );
  }
supprimerLivre(id:number){
  this.livreService.deleteOne(id).subscribe(
    data=>{
      this.ngOnInit()
    }
  )
}

/*onViewBook(id: number) {
  this.LivreService.getOne(id)._subscribedata=>{
        this.viewLivre=data;
      }
    );
}*/



}
