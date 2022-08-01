import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/Models/role';
import { Teacher } from 'src/app/Models/teacher';
import { RoleService } from 'src/app/services/role.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-taecher',
  templateUrl: './add-taecher.component.html',
  styleUrls: ['./add-taecher.component.css']
})
export class AddTaecherComponent implements OnInit {
  role!:Role;
  teacher=new Teacher();
  addForm!:FormGroup;
  
  constructor(private fb:FormBuilder,private ts:TeacherService,private rs:RoleService,private route:Router) {
    this.addForm=this.fb.group({
      username:this.fb.control(""),
      password:this.fb.control(""),
      cin:this.fb.control(""),
    })
   }

  ngOnInit(): void {
              
  }
 handleAddTeacher(){
   
      this.teacher.id=null;
       this.teacher=this.addForm.value;
       this.ts.addTeacher(this.teacher,"Prof");
       this.route.navigateByUrl("/admin/profs");
   
      
   
 }
}
