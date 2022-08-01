
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Filiere } from 'src/app/Models/filiere';
import { Niveau } from 'src/app/Models/niveau';
import { FiliereService } from 'src/app/services/filiere.service';

@Component({
  selector: 'app-detail-filiere',
  templateUrl: './detail-filiere.component.html',
  styleUrls: ['./detail-filiere.component.css']
})
export class DetailFiliereComponent implements OnInit {
  id!:number;
  filiere!:Filiere;
  niveaux!:Niveau[];
  constructor(private route:ActivatedRoute,private FS:FiliereService,private router:Router) {
    this.route.params.subscribe(params=>{this.id=params["id"]});
   }

  ngOnInit(): void {
    this.getFiliere(this.id);
  }

  getFiliere(id:number){
       this.FS.getFiliere(this.id).subscribe({
         next:(data)=>{
           this.filiere=data;
         }
       })
  }

  getNiveaux(id:number){
    this.FS.getNiveaux(id).subscribe({
      next:(data)=>{
        this.niveaux=data;
      }
    })
}

}
