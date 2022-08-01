import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filiere } from '../Models/filiere';
import { Niveau } from '../Models/niveau';
import { Student } from '../Models/student';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
   filiereUrl!:string;
   studentUrl!:string;
   
  constructor(private http:HttpClient,) { 
       this.filiereUrl="http://localhost:8080/Filiere"
       this.studentUrl="http://localhost:8080/Student"
  }

  getAllFiliere():Observable<Filiere[]>{
        return this.http.get<Filiere[]>(this.filiereUrl+"/getAll");
     
  }

  getNiveax(id:number):Observable<Niveau[]>{
       return this.http.get<Niveau[]>(this.filiereUrl+"/get/"+id+"/Niveaux");
  }

  addStudent(s:Student,id?:number){
    return this.http.post<Student>(this.studentUrl+"/add/"+id,s);
  }


}
