import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AeropuertoModel } from '../modelos/aeropuerto.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) { 
      this.token = this.seguridadService.getToken();
    }
    url = "http://localhost:3000"
    token: string = ''


    store(aeropuerto: AeropuertoModel): Observable<AeropuertoModel> {
      return this.http.post<AeropuertoModel>(`${this.url}/aeropuertos`, {
        nombre: aeropuerto.nombre,
        ciudad: aeropuerto.ciudad,
        pais: aeropuerto.pais,
        coordenada_x: aeropuerto.coordenada_x,
        coordenada_y: aeropuerto.coordenada_y,
        siglas: aeropuerto.siglas
        
      });
    }
    
    getAll(): Observable<AeropuertoModel[]>{
      return this.http.get<AeropuertoModel[]>(`${this.url}/aeropuertos`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

    update(aeropuerto: AeropuertoModel): Observable<AeropuertoModel> {
      return this.http.patch<AeropuertoModel>(`${this.url}/aeropuertos/${aeropuerto.id}`, {
        nombre: aeropuerto.nombre,
        ciudad: aeropuerto.ciudad,
        pais: aeropuerto.pais,
        coordenada_x: aeropuerto.coordenada_x,
        coordenada_y: aeropuerto.coordenada_y,
        siglas: aeropuerto.siglas
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }

    delete(id: string): Observable<AeropuertoModel[]>{
      return this.http.delete<AeropuertoModel[]>(`${this.url}/aeropuertos/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

    getWithId(id: string): Observable<AeropuertoModel>{
      return this.http.get<AeropuertoModel>(`${this.url}/aeropuertos/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

    getCount(): Observable<AeropuertoModel[]>{
      return this.http.get<AeropuertoModel[]>(`${this.url}/aeropuertos/count`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }


}
