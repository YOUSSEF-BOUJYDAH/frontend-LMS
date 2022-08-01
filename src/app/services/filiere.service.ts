import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Classe, PageClasse } from '../Models/classe.model';
import { Filiere } from '../Models/filiere';
import { Niveau } from '../Models/niveau';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {
  baseUrl: string;
  constructor(private http: HttpClient,private route:Router) {
    this.baseUrl = "http://localhost:8080/Filiere";
  }

  getAllFilieres(): Observable<Filiere[]> {//pour travailler en mode asynchrone
    return this.http.get<Filiere[]>(this.baseUrl + "/getAll");//of(x) return an observable for the value passed in arguments
  }
 
  addFiliere(filiere: Filiere) {
    this.http.post<Filiere>(this.baseUrl + "/add", filiere).subscribe({
      next: (data) => {
        console.log(data);
        this.route.navigateByUrl("/admin/filieres");
      }
    })
  }

  deleteFiliere(id: number) {
    return this.http.delete(this.baseUrl+"/delete/"+id);
 }

 getFiliere(id:number):Observable<Filiere>{
      return this.http.get<Filiere>(this.baseUrl+"/classes/"+id)
 }

 updateFiliere(f:Filiere){
  return this.http.put<Filiere>(this.baseUrl+"/update",f);
 }
 getNiveaux(id:number) :Observable<Niveau[]>{
  return this.http.get<Niveau[]>(this.baseUrl+"/get/"+id+"/Niveaux");
 }
}
