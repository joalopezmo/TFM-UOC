import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../transversal/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MonthReportService {
  baseUrl = environment.baseUrl;

  constructor(protected http: HttpClient) {}

  getMonthReport(): Observable<object> {
    //informacion mensual de los reportes
    return this.http.get(`${this.baseUrl}` + '/ocupacion');
  }
}
