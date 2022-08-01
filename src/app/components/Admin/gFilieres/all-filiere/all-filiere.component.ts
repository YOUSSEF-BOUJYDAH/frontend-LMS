import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Filiere } from 'src/app/Models/filiere';
import { FiliereService } from 'src/app/services/filiere.service';

@Component({
  selector: 'app-all-filiere',
  templateUrl: './all-filiere.component.html',
  styleUrls: ['./all-filiere.component.css']
})
export class AllFiliereComponent implements OnInit {
  panelOpenState = false;
  filieres!:Filiere[];
  constructor(private http:HttpClient,private FS:FiliereService) { }

  ngOnInit(): void {
      this.handleAllFiliere();
  }
  




  handleAllFiliere(){
         this.FS.getAllFilieres().subscribe({
                next:(data)=>{
                  console.log(data);
                  this.filieres=data;
                }
         });
  }
}
