import { Component } from "@angular/core";
import { WardService } from "./ward.service";
import { IWard } from "./ward";
import { ok } from "assert";

@Component({
    selector:'ward',
    templateUrl:'./ward.component.html'
})
export class WardComponent
{
    constructor(private _wardService : WardService)
    { }
    
    pageTitle:string="Wards";
    allWards:IWard[];


    ngOnInit() : void 
    {
        this.getAllWards();
    }
    public getAllWards():void
    {
        this._wardService.getWards()
        .subscribe(data => this.allWards = data.results,error=>"hi there is an error");
    }
    createWard():void
    {
        var data = 
        {
            "name":"SHIFA ICU WARD"
        };
        this._wardService.postWard(data).subscribe(data=>this.allWards=data) ;
    }
    deleteWard(uuid:string)
    {
        console.log('DELETE: ' +uuid);
        this._wardService.deleteWard(uuid).subscribe(ok) ;   
    }
}