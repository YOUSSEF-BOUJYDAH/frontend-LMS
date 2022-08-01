import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './components/Admin/classes/classes.component';
import { AddClasseComponent } from './components/Admin/add-classe/add-classe.component';
import { EditComponent } from './components/Admin/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/Admin/admin/admin.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { NavebarComponent } from './components/Home/navebar/navebar.component';
import { HomeComponent } from './components/Home/home/home.component';
import { FiliereComponent } from './components/Home/filiere/filiere.component';
import { AboutComponent } from './components/Home/about/about.component';
import { WelcomeStudentComponent } from './components/Student/welcome-student/welcome-student.component';
import { WelcomeComponent } from './components/Teacher/welcome/welcome.component';
import { AllTeachersComponent } from './components/Admin/gTeachers/all-teachers/all-teachers.component';
import { AddTaecherComponent } from './components/Admin/gTeachers/add-taecher/add-taecher.component';
import { EditTeachersComponent } from './components/Admin/gTeachers/edit-teachers/edit-teachers.component';
import { AllFiliereComponent } from './components/Admin/gFilieres/all-filiere/all-filiere.component';
import { AddFiliereComponent } from './components/Admin/gFilieres/add-filiere/add-filiere.component';
import { EditFiliereComponent } from './components/Admin/gFilieres/edit-filiere/edit-filiere.component';
import { InscriptionComponent } from './components/Home/inscription/inscription.component';
import { DetailFiliereComponent } from './components/Admin/gFilieres/detail-filiere/detail-filiere.component';
import { AddNiveauComponent } from './components/Admin/gFilieres/add-niveau/add-niveau.component';
import { DetailNiveauComponent } from './components/Admin/gFilieres/detail-niveau/detail-niveau.component';
const routes: Routes = [
  {
    path: "", redirectTo: "index", pathMatch: 'full'
  },
  {
    path: "index", component: NavebarComponent, children: [
      {
        path: "", redirectTo: "home", pathMatch: 'full'
      },
      {
        path: "home", component: HomeComponent
      },
      { path: "filiere", component: FiliereComponent },
      { path: "about", component: AboutComponent },
      {
        path: "inscription", component: InscriptionComponent
      },
    ]
  },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: AdminComponent, canActivate: [AuthguardGuard], children: [
      {
        path: "classes", component: ClassesComponent
      },
      { path: "add", component: AddClasseComponent },
      { path: "edit/:id", component: EditComponent },
      {
        path: "profs", component: AllTeachersComponent
      },
      { path: "addProf", component: AddTaecherComponent},
      { path: "editProf/:id", component: EditTeachersComponent },
      {
        path: "filieres", component: AllFiliereComponent
      },
      { path: "addFiliere", component: AddFiliereComponent},
      { path: "editFiliere/:id", component: EditFiliereComponent },
      { path: "detailFiliere/:id", component: DetailFiliereComponent,children:[
        { path: "addNiveau", component: AddNiveauComponent},
        { path: "detailNiveau/:id", component: DetailNiveauComponent}
      ]},
    ]
  },
  {
    path: "Student", component: WelcomeStudentComponent, canActivate: [AuthguardGuard]

  },
  {
    path: "Teacher", component: WelcomeComponent, canActivate: [AuthguardGuard]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
