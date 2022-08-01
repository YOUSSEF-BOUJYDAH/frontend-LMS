import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Classe } from '../../../Models/classe.model';
import { ClasseService } from '../../../services/classe.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classes!:Classe[];
  errorMessage! :string;
  searchFormGroup!:FormGroup;
  addFormGroup!:FormGroup;
  CurrentPage:number=0;
  size:number=5;
  totalPages:number=0;
  list :string[]=["1","2","3"]
  constructor(private CS:ClasseService,private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {

     //this.searchFormGroup=this.fb.group({
     //  keyword : this.fb.control(null)
     //})
    
    
    //this.handleAllClasses();
    this.handleAllClasses();
    console.log("oninit ")
  }
  handleAllClasses(){
    this.CS.getAllClasses().subscribe({ //lorsque une methode retourne un observable on appel la fonction subscribe pour recuperer la resultat passe par observable
      next : (data)=>{ //si tout passe bien on fait notre traitement
        this.classes=data;
        console.log(data);
      } ,
      error :(err)=>{  // la fonction returne une erreur on la recupere ici 
             this.errorMessage=err;
    }
    })
  }
 goToPage(i:number){
    this.CurrentPage=i;
    this.handlePageClasse();
  }
  handlePageClasse(){
    this.CS.getPageClasses(this.CurrentPage,this.size).subscribe({ //lorsque une methode retourne un observable on appel la fonction subscribe pour recuperer la resultat passe par observable
      next : (data)=>{ //si tout passe bien on fait notre traitement
        this.classes=data.classes;
        this.totalPages=data.totalPages
      } ,
      error :(err)=>{  // la fonction returne une erreur on la recupere ici 
             this.errorMessage=err;
    }
    })
  }

  handleDeleteClasse(id:number):void{
       let con=confirm("etes vous sure de suppression");//pour la confirmation de la suppression 
       if(con!=true) return ;
        this.CS.deleteClasse(id).subscribe({
          next:(data)=>{
            this.ngOnInit();
          },
          error: (error)=>{console.log(error)}
        });
  }

}
