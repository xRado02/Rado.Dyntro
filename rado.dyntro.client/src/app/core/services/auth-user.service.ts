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

}
