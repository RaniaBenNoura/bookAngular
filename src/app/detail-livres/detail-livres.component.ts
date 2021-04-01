import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/Livre';
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-livres',
  templateUrl: './detail-livres.component.html',
  styleUrls: ['./detail-livres.component.css']
})
export class DetailLivresComponent implements OnInit {
  private idLivre: number;
  private livre: Livre = new Livre();
  constructor(private livreService:LivreService, private route: Router) { }

  ngOnInit() {
  }

  detailLivre(idLivre:number){
    

    this.livreService.getLivre(this.idLivre).subscribe(
      res => {
        this.livre = res;
      },
      res => {
        console.log(res);
      }
    );
    
  
  }
}
