import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/Models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.css']
})
export class AllTeachersComponent implements OnInit {
  teachers!:Teacher[];
  constructor(private ts:TeacherService) { }

  ngOnInit(): void {
    this.handleAllClasses();
  }
  handleAllClasses(){
    this.ts.getAllTeachers().subscribe({ //lorsque une methode retourne un observable on appel la fonction subscribe pour recuperer la resultat passe par observable
      next : (data)=>{
        //si tout passe bien on fait notre traitement
        this.teachers=data;
        console.log(data); 
      } ,
     
    })
  }
  handleDeleteTeacher(id:number){}
}
