import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario.model';

@Injectable({
  providedIn: 'root'
})
export class FormuserService {
  constructor(private http: HttpClient) {}

  altaUsuario(usuario: any): Observable<any> {
    const url = 'http://54.160.74.97:8000/api/usuario/registrar/';
    
    return this.http.post(url, usuario);
  }
}
