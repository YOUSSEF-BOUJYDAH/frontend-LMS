import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Filiere } from '../Models/filiere';
import { Niveau } from '../Models/niveau';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {
  baseUrl: string;
  constructor(private http: HttpClient,private route:Router) {
    this.baseUrl = "http://localhost:8080/Niveau";
  }

  getAllClasses(): Observable<Niveau[]> {//pour travailler en mode asynchrone
    return this.http.get<Niveau[]>(this.baseUrl + "/getAll");//of(x) return an observable for the value passed in arguments
  }

  addFiliere(filiere: Filiere,id:number) {
    this.http.post<Filiere>(this.baseUrl + "/add/"+id, filiere).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl("/admin/filieres");
      }
    })
  }



}
