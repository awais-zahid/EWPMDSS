import { Injectable } from "@angular/core";
import {RequestOptionsArgs,Http,Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import { HttpErrorResponse } from "@angular/common/http/src/response";

import 'rxjs/add/observable/throw';
@Injectable()
export class AppBasicService
{
    url:string = "http://localhost:8080/openmrs/ws/rest/v1/";
    
    options: RequestOptionsArgs;
    protected headers: Headers = new Headers();
    private username: string = "admin";
    private password: string = "Admin123";
    protected _http;
    
    
    constructor(http:Http)
    {   this._http=http;
        this.headers.append('Access-Control-Allow-Origin','*');
        this.headers.append("Authorization", "Basic " + btoa(this.username + ":" + this.password));
        this.headers.append("Content-Type","application/json");
        this.options = { headers: this.headers, withCredentials: false };
    }
    getData(methodName:string)
    {

        return this._http.get(this.url+methodName,this.options)
        .map(res => res.json())
        .do(data=>console.log('Yahoo !!! Got Data from API\n' + JSON.stringify(data) ))
        .catch(this.handleError);   
    }
    postData(methodName:string , data:any)
    {
        console.log('in app service');
        return this._http.post(this.url+methodName,data,this.options)
        .do(data=>console.log('Created: ' ))
        .catch(this.handleError);
    }
    postDataCustomUrl(url:string , data:any)
    {
        console.log('in app service');
        return this._http.post(url,data,this.options)
        .do(data=>console.log('Created: ' ))
        .catch(this.handleError);
    }
    deleteData(methodName:string , key:string)
    {
        return this._http.delete(this.url+methodName+key,this.options)
        .do(data=>console.log('Deleted: ' + JSON.stringify(data)))
        .catch(this.handleError);    
    }
    deleteDataCustomUrl(url:string , key:string)
    {
        return this._http.delete(url+key,this.options)
        .do(data=>console.log('Deleted: ' + JSON.stringify(data)))
        .catch(this.handleError);    
    }
    getCustomUrlData(url:String)
    {
        return this._http.get(url,this.options)
        .map(res => res.json())
        .do(data=>console.log('Yahoo !!! Got Data from API\n' + JSON.stringify(data) ))
        .catch(this.handleError); 
    }
    protected handleError(err:HttpErrorResponse)
    {
        return Observable.throw(err.message);
    }
}