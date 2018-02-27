import { Injectable } from "@angular/core";
import { RequestOptionsArgs,Http,Headers,Response } from "@angular/http";
import { AppBasicService } from "../app.basicservice";


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { IPerson } from "./person";

@Injectable()
export class PersonService extends AppBasicService
{
    constructor(protected _http:Http)
    {
        super(_http);
    }
    getPersons()  
    {
        return this.getData("person?q");    
    }
    postPerson(data:any)
    {
        return this.postData("person",data);
    }
    deletePerson(uuid:string)
    {
        return this.deleteData("person/",uuid);     
    }
}