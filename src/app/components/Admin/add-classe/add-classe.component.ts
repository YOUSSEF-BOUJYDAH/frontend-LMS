import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Classe } from '../../../Models/classe.model';
import { ClasseService } from '../../../services/classe.service';
@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {
  addFormGroup!:FormGroup;
  classe=new Classe();
  constructor(private SC:ClasseService,private fb:FormBuilder, private route:Router) { }
  ngOnInit(): void {
    this.addFormGroup=this.fb.group({
      name : this.fb.control(""),
      nombre:this.fb.control(null),
      description:this.fb.control("")
    })
  }
  hundleAddClasse(){
   this.classe.id=null;
   this.classe=this.addFormGroup.value
   this.SC.addClasse(this.classe) ;
   alert("added succesfuly");
   this.route.navigateByUrl("/admin/classes");
  }
}
