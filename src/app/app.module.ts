import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import {WardComponent} from './ward/ward.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { PersonService } from './person/person.service';
import { AppBasicService } from './app.basicservice';
import { WardService } from './ward/ward.service';
import { PatientComponent } from './patient/patient.component';
import { PatientService } from './patient/patient.service';
import { AdmissionComponent } from './admission/admission.component';
import { AdmissionService } from './admission/admission.service';
import { BedComponent } from './bed/bed.component';
import { BedService } from './bed/bed.service';

 
const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Persons', component: PersonComponent },
  { path: 'Wards', component: WardComponent },
  { path: 'Beds', component: BedComponent },
  { path: 'Patients', component: PatientComponent },
  { path: 'Admissions', component: AdmissionComponent }, 
  { path: '', redirectTo:'Home',pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  
  declarations: [
    AppComponent,
    PersonComponent,
    WardComponent,
    PatientComponent,
    HomeComponent,
    BedComponent,
    AdmissionComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AppBasicService,PersonService,WardService,PatientService,AdmissionService,BedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
