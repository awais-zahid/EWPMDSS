import { Injectable } from "@angular/core";
import { RequestOptionsArgs,Http,Headers,Response } from "@angular/http";
import { AppBasicService } from "../app.basicservice";


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { IPatient } from "./patient";
import { IPerson } from "../person/person";

@Injectable()
export class PatientService extends AppBasicService
{
    constructor(_http:Http)
    {
        super(_http);
    }
    getPatientbyUuid(uuid:string)  
    {
        return this.getData("patient/"+uuid);    
    }
    getPatients()  
    {
        return this.getData("patient?q=ha");    
    }
    postPatient(patient:any)
    {
        return this.postData("patient",patient);
    }
    getIdentifier()
    {
        return this.getCustomUrlData("http://localhost:8080/openmrs/module/idgen/generateIdentifier.form?source=1&username=admin&password=Admin123");
    }
    deletePatient(uuid:string)
    {
        return this.deleteData("patient/",uuid);     
    }
    
}