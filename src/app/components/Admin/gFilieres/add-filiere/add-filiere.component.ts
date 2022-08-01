import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filiere } from 'src/app/Models/filiere';
import { Niveau } from 'src/app/Models/niveau';
import { Teacher } from 'src/app/Models/teacher';
import { FiliereService } from 'src/app/services/filiere.service';
import { NiveauService } from 'src/app/services/niveau.service';
@Component({
  selector: 'app-add-filiere',
  templateUrl: './add-filiere.component.html',
  styleUrls: ['./add-filiere.component.css']
})
export class AddFiliereComponent implements OnInit {
   addGroup!:FormGroup;
   niveaux!:Niveau[];
   Teachers!:Teacher[];
   filiere:Filiere=new Filiere();
  constructor(private NS:NiveauService,private FS:FiliereService,private fb:FormBuilder) {
    this.addGroup=this.fb.group({
      id:this.fb.control(null),
      titre:this.fb.control(""),
      diplome:this.fb.control("")
    })
   }

  ngOnInit(): void {
   this.NS.getAllClasses().subscribe({
     next:(data)=>{
       this.niveaux=data;
       console.log(this.niveaux);
     }
   })
  }

  handleAddFiliere(){
      this.filiere.id=this.addGroup.value["id"];
      this.filiere.titre=this.addGroup.value["titre"];
      this.filiere.diplome=this.addGroup.value["diplome"];
      console.log(this.filiere);
      this.FS.addFiliere(this.filiere);

  }

}
