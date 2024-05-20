import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisFavoritosService {
  constructor(private http: HttpClient) {}

  obtenerPublicacionesFavoritas(): Observable<any> {
    return this.http.get(`http://54.160.74.97:8000/api/favoritos/`);
  }
  obtenerPublicaciones(): Observable<any> {
    return this.http.get(`http://54.160.74.97:8000/api/publicaciones/`);
  }
}