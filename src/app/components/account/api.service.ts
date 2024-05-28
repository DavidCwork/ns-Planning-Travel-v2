
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://192.168.56.1:8000/planning_travel/api/1.0';

  constructor(private http: HttpClient) { }

  getRegisters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuario/`);
  }

  getRegisterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usuario/${id}/`);
  }

  addRegister(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuario`, post);
  }

  updateRegister(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/usuario/${id}/`, post);
  }

  deleteRegister(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/usuario/${id}/`);
  }
}
