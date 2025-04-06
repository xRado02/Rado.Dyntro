import { Injectable } from '@angular/core';
import { User } from '../models/user/user-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[] = [];
  constructor(private http: HttpClient) { }

  // GET

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/user');
  } 
  
  // POST 

  addNewUser(newUser: Partial<User>): Observable<User> {
    return this.http.post<User>('/api/user', newUser)
  }

  // DELETE

  deleteUsers(deleteUserIds: number[]): Observable<any> {
    return this.http.delete(`/api/user/delete-multiple`, { body: deleteUserIds });
  }


  
  // Loading users and save them in "this.users"

  loadUsers(): void {
    this.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  
}
