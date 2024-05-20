import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogCerrarSesionService {
  private logoutUrl = 'http://54.160.74.97:8000/api/usuario/logout/'; 
  constructor(private http: HttpClient) { }
  logout() {
    return this.http.post(this.logoutUrl, {}).pipe(
      tap(() => {
        localStorage.removeItem('token');
      })
    );
  }
}