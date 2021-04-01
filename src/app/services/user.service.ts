import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>("http://localhost:8000/api/users");
    }

    register(user: User) {
        return this.http.post("http://localhost:8000/api/users", user);
    }

    delete(id: number) {
        return this.http.delete("http://localhost:8000/api/users/${id}");
    }
}
