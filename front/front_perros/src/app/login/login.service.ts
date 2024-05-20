import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://54.160.74.97:8000/api/usuario/login/'; 

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
    const body = { email: email, password: password };
    return this.http.post(this.loginUrl, body);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

