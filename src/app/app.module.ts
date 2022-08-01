import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './components/Admin/classes/classes.component';
import {HttpClientModule} from '@angular/common/http';
import { AddClasseComponent } from './components/Admin/add-classe/add-classe.component';
import { EditComponent } from './components/Admin/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/Admin/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NavebarComponent } from './components/Home/navebar/navebar.component';
import { HomeComponent } from './components/Home/home/home.component';
import { FiliereComponent } from './components/Home/filiere/filiere.component';
import { AboutComponent } from './components/Home/about/about.component';
import { WelcomeStudentComponent } from './components/Student/welcome-student/welcome-student.component';
import { AddFiliereComponent } from './components/Admin/gFilieres/add-filiere/add-filiere.component';
import { EditFiliereComponent } from './components/Admin/gFilieres/edit-filiere/edit-filiere.component';
import { AllFiliereComponent } from './components/Admin/gFilieres/all-filiere/all-filiere.component';
import { AddTaecherComponent } from './components/Admin/gTeachers/add-taecher/add-taecher.component';
import {AllTeachersComponent} from './components/Admin/gTeachers/all-teachers/all-teachers.component';
import { InscriptionComponent } from './components/Home/inscription/inscription.component';
import {MatStepperModule} from '@angular/material/stepper';
import { DetailFiliereComponent } from './components/Admin/gFilieres/detail-filiere/detail-filiere.component';
import { AddNiveauComponent } from './components/Admin/gFilieres/add-niveau/add-niveau.component';
import { DetailNiveauComponent } from './components/Admin/gFilieres/detail-niveau/detail-niveau.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    AddClasseComponent,
    EditComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    NavebarComponent,
    HomeComponent,
    FiliereComponent,
    AboutComponent,
    WelcomeStudentComponent,
    AddFiliereComponent,
    EditFiliereComponent,
    AllFiliereComponent,
    AddTaecherComponent,
    AllTeachersComponent,
    InscriptionComponent,
    DetailFiliereComponent,
    AddNiveauComponent,
    DetailNiveauComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
