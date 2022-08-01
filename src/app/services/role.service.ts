import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../Models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  baseUrl!:string;

  constructor(private http:HttpClient) {
    this.baseUrl = "http://localhost:8080/Role";
   }

   get(name:string):Observable<Role>{
       return this.http.get<Role>(this.baseUrl+"/get/"+name);
   }


}
