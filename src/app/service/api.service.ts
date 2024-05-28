import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://192.168.56.1:8000/planning_travel/api/1.0';

  constructor(private http: HttpClient) { }

  getData(table: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${table}/`);
  }

  getDataById(table: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${table}/${id}/`);
  }

  addRegister(table: string, post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${table}/`, post);
  }

  updateData(table: string, id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${table}/${id}/`, post);
  }

  deleteRegister(table: string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${table}/${id}/`);
  }

  login(datos: any): Observable<any> {
    const tokenAuthUrl = 'token-auth';
    return this.http.post<any>(`${this.apiUrl}/${tokenAuthUrl}/`, datos);
  }

  registrarse(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registrar_usuario/`, data);
  }
}
