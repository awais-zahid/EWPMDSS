import { Injectable } from "@angular/core";
import { RequestOptionsArgs,Http,Headers,Response } from "@angular/http";
import { AppBasicService } from "../app.basicservice";


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { IAdmission } from "./admission";

@Injectable()
export class AdmissionService extends AppBasicService
{
    constructor(protected _http:Http)
    {
        super(_http);
    }
    getAdmissions()  
    {
        return this.getData("visit");    
    }
    postAdmission(data:any)
    {
        return this.postData("visit",data);    
    }
    deleteAdmission(uuid:string)
    {
        return this.deleteData("visit/",uuid);     
    }
}