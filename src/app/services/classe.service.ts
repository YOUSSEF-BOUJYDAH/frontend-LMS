import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { from, Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { Classe, PageClasse } from '../Models/classe.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private classes!: Classe[];
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:8080";
  }

  getAllClasses(): Observable<Classe[]> {//pour travailler en mode asynchrone
    return this.http.get<Classe[]>(this.baseUrl + "/classes");//of(x) return an observable for the value passed in arguments
  }
  getPageClasses(page: number, size: number): Observable<PageClasse> {//pour travailler en mode asynchrone
    let index = page * size;
    let totalPages = ~~(this.classes.length) / size;//~~ pour calculer la divion entiere de nombre des classe sur la taille de la page 
    if (this.classes.length % size != 0) {
      totalPages++;
    }
    let classes = this.classes.slice(index, index + size);
    return of({ classes: classes, Page: page, size: size, totalPages: totalPages });
  }
  addClasse(classe: Classe) {
    this.http.post<Classe>(this.baseUrl + "/add", classe).subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }

  deleteClasse(id: number) {
    return this.http.delete(this.baseUrl+"/delete/"+id);
 }

 getClasse(id:number):Observable<Classe>{
      return this.http.get<Classe>(this.baseUrl+"/classes/"+id)
 }

 updateClasse(c:Classe){
  return this.http.put<Classe>(this.baseUrl+"/update",c);
 }
}
