
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://andresm94.pythonanywhere.com/api/1.0';

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

  deleteRegister(id: number, token): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${token}`
    });
    return this.http.delete<any>(`${this.apiUrl}/borrar_usuario/${id}/`, { headers });
  }
}
