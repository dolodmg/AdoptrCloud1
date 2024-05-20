import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisPublicacionesService {
  constructor(private http: HttpClient) {}

  obtenerPublicaciones(): Observable<any> {
    return this.http.get('http://54.160.74.97:8000/api/publicaciones/');
  }
  editarPublicacion(id: number, datosEditados: any) {
    const url = `http://54.160.74.97:8000/api/publicaciones/${id}/`;
    return this.http.put(url, datosEditados);
  }
  eliminarPublicacion(id: number) {
    const url = `http://54.160.74.97:8000/api/publicaciones/eliminar/${id}/`;

    return this.http.delete(url);
  }
  
}
