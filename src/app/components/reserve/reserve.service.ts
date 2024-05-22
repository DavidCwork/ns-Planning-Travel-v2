import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class ReserveService {
    apiUrl = 'http://10.171.68.201:8000/planning_travel/api/1.0';

    constructor(private http: HttpClient) { }
  
    obtenerDisponibilidad() {
        return this.http.get<any>(`${this.apiUrl}/verificar_disponibilidad/`)
    }
  
    getRegisterById(id: number): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/hotel/${id}/`);
    }
  
    addRegister(post: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/hotel`, post);
    }
  
    updateRegister(id: number, post: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/hotel/${id}/`, post);
    }
  
    deleteRegister(id: number): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/hotel/${id}/`);
    }
}