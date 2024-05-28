import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'http://192.168.56.1:8000/planning_travel/api/1.0/token-auth/';
  constructor(private http: HttpClient) {}

  login(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, datos);
  }
}
