import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });
  baseUrl: string = environment.backend;
  constructor(private http: HttpClient) {}

  loginUser(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'api/v1/usermodule/login/', userData, {
      headers: this.httpHeaders,
    });
  }
}
