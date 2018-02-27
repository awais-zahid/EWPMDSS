import { Component } from "@angular/core";
import { BedService } from "./bed.service";
import { IBed } from "./bed";
import { ok } from "assert";

@Component({
    selector:'bed',
    templateUrl:'./bed.component.html'
})
export class BedComponent
{
    constructor(private _bedService : BedService)
    { }
    
    pageTitle:string="Beds";
    allBeds:IBed[];


    ngOnInit() : void 
    {
        this.getAllBeds();
    }
    public getAllBeds():void
    {
        this._bedService.getBeds()
        .subscribe(data => this.allBeds = data,error=>"hi there is an error");
    }
    createBed():void
    {
        var data = 
        {
            "location": "8d6c993e-c2cc-11de-8d13-0010c6dffd0f",
            "status": "Empty"
        };
        this._bedService.postBed(data).subscribe(data=>this.allBeds=data) ;
    }
    deleteBed(uuid:string)
    {
        console.log('DELETE: ' +uuid);
        this._bedService.deleteBed(uuid).subscribe(ok) ;   
    }
}