import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filiere } from '../Models/filiere';
import { Teacher } from '../Models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:8080/Teacher";
  }

  getAllTeachers(): Observable<Teacher[]> {//pour travailler en mode asynchrone
    return this.http.get<Teacher[]>(this.baseUrl + "/getAll");//of(x) return an observable for the value passed in arguments
  }
 
  addTeacher(t: Teacher,name:string) {
    this.http.post<Teacher>(this.baseUrl + "/add/"+name, t).subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }

  deleteTeacher(id: number) {
    return this.http.delete(this.baseUrl+"/delete/"+id);
 }

 getTeacher(id:number):Observable<Teacher>{
      return this.http.get<Teacher>(this.baseUrl+"/get/"+id)
 }

 updateTeacher(f:Filiere){
  return this.http.put<Teacher>(this.baseUrl+"/update",f);
 }
}
