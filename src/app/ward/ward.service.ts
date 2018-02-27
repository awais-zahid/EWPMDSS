import { Injectable } from "@angular/core";
import { RequestOptionsArgs,Http,Headers,Response } from "@angular/http";
import { AppBasicService } from "../app.basicservice";


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { IWard } from "./ward";

@Injectable()
export class WardService extends AppBasicService
{
    constructor(protected _http:Http)
    {
        super(_http);
    }
    getWards()  
    {
        return this.getData("location?q&v=full");    
    }
    postWard(data:any)
    {
        console.log('in service');
        return this.postData("location",data);    
    }
    deleteWard(uuid:string)
    {
        console.log('in service');
        return this.deleteData("location/",uuid);     
    }
}