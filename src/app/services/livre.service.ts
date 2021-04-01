import { Injectable } from '@angular/core';
import { Livre } from '../models/Livre';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Livre[]>("http://localhost:8000/api/livres").pipe()
  }
  getLivre(idLivre: number) {
    return this.http.get<Livre>("http://localhost:8000/api/livres/" + idLivre).pipe()
  }

  addnew(livre: Livre) {
    return this.http.post("http://localhost:8000/api/livres", livre).pipe()
  }
  updateOne(id: number, livre: Livre) {
    return this.http.put("http://localhost:8000/api/livres/" + id, livre).pipe();
  }
  deleteOne(id:number){
    return this.http.delete("http://localhost:8000/api/livres/"+id).pipe();
  }
  getOne(id: number) {
    return this.http.get<Livre>("http://localhost:8080/livres/" + id).pipe()
  }

}
