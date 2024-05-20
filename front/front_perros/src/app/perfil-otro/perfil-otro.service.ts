import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilOtroService {

  constructor(private http: HttpClient) { }

  obtenerPerfilOtroUsuario(userId: number): Observable<any> {
    const url = `http://54.160.74.97:8000/api/ver-perfil/${userId}`; 

    return this.http.get(url);
  }
}
