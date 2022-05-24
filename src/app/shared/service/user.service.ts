import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IUser, IUserPost } from '../model/user-app.model';

const URL_API = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${URL_API}/users`);
  }
  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${URL_API}/users/${id}`);
  }
  getPostsByUserId(id: number): Observable<IUserPost[]> {
    return this.http.get<IUserPost[]>(`${URL_API}/users/${id}/posts`);
  }
}
