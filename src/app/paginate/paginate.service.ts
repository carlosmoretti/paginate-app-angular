import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaginateService {

  constructor(private http: HttpClient) { }

  get(scope: string, page: number, size: number, params?: HttpParams) {
    const service = environment.API_URL;
    const context = `/${scope}/page/${page}/size/${size}`

    return this.http.get(service + context, { params })
  }
}
