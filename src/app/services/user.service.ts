import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(data: any) {
    return this.http.post(`${environment.apiUrl}/user/register`, data)
  }

  loginUser(data: any) {
    return this.http.post(`${environment.apiUrl}/user/login`, data)
  }

}
