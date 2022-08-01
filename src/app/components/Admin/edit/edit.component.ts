import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from 'src/app/Models/classe.model';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!:number;
  classe!:Classe;
  editFormGroup!:FormGroup;
  constructor(private SC:ClasseService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router) {
    this.route.params.subscribe(params=>{this.id=params["id"]});

   }

  ngOnInit(): void {
    this.SC.getClasse(this.id).subscribe( data=>{
         console.log("here");
         this.classe=data;
         this.editFormGroup=this.fb.group({
           id:this.fb.control(this.id) ,
           name:this.fb.control(this.classe.name),
           nombre:this.fb.control(this.classe.nombre),
           description:this.fb.control(this.classe.description)
         })
       })
  }
  hundleEditClasse(){
    console.log(this.classe);
    this.classe=this.editFormGroup.value;
    this.SC.updateClasse(this.classe).subscribe(data=>{
          this.router.navigateByUrl("/admin/classes");
          console.log(data);
    });
  }
}
