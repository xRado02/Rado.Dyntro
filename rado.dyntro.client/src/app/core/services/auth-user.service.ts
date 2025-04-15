import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../dashboard/models/user/user-model';
import { UserAuth } from '../interfaces/UserAuth';
import { TokenResponse } from '../interfaces/TokenResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private http: HttpClient) { }

  loginUser(userData: UserAuth): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`/api/Auth/login`, userData);
  }

  logout(): void {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
  }

  getUserRole(): string | null {
    const token = sessionStorage.getItem('accessToken')
    if (!token) {
      return null;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload['role'] || null;
  }

  getUserId(): string | null {
    const token = sessionStorage.getItem('accessToken')
    if (!token) {
      return null
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload['id'] || null;

  }

}
