import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  constructor(private http: HttpClient) { }
    createAdress(data: any) {
    return this.http.post(`${environment.apiUrl}/adress/register-adress`, data)
  }
}





