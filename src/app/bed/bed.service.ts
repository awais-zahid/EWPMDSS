import { Injectable } from "@angular/core";
import { RequestOptionsArgs,Http,Headers,Response } from "@angular/http";
import { AppBasicService } from "../app.basicservice";


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { IBed } from "./bed";

@Injectable()
export class BedService extends AppBasicService
{
    constructor(protected _http:Http)
    {
        super(_http);
    }
    getBeds()  
    {
        return this.getCustomUrlData("http://localhost:8081/fileapi/rest/v1/bed/getbed");    
    }
    postBed(data:any)
    {
        return this.postDataCustomUrl("http://localhost:8081/fileapi/rest/v1/bed/addbed",data);    
    }
    deleteBed(uuid:string)
    {
        return this.deleteDataCustomUrl("http://localhost:8081/fileapi/rest/v1/bed/deletebed/",uuid);     
    }
}