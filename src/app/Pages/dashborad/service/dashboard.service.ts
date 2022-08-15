import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { Observable, Observer, fromEvent, merge, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  baseUrl: string = environment.backend;
  constructor(private http: HttpClient) {}

  getMoviesList(): Observable<any> {
    return this.http.get(
      this.baseUrl + 'api/v1/maya/movies/',

      this.getAuthHeaders()
    );
  }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders({
      Authorization: '' + token,
    });
    return { headers: httpHeaders };
  }
}
