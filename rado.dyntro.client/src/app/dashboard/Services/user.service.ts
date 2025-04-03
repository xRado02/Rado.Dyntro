import { Injectable } from '@angular/core';
import { ApiHandlerService } from './api-handler.service';
import { User } from '../models/user/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[] = [];
  constructor(private apiHandlerService: ApiHandlerService) { }

  loadUsers(): void {
    this.apiHandlerService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  createNewUser(newUser: User): Observable<User> {
    return this.apiHandlerService.addNewUser(newUser);
  }

}
