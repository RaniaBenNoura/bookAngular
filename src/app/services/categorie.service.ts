import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../models/Categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }
 
  getAll(): Observable<Array<Categorie>>{
    return this.http.get<Categorie[]>("http://localhost:8000/api/categories").pipe()
  }
  getOne(id:number){
    return this.http.get<Categorie>("http://localhost:8000/api/categories/" + id).pipe()
  }

  addnew(categorie: Categorie) {
    return this.http.post("http://localhost:8000/api/categories", categorie).pipe()
}
updateOne(id:number, categorie:Categorie){
  return this.http.put ("http://localhost:8000/api/categories/"+id,categorie).pipe();
}
deleteOne(id:number){
  return this.http.delete("http://localhost:8000/api/categories/"+id).pipe();
}
}
