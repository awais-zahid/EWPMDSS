import { Component } from "@angular/core";
import { AdmissionService } from "./admission.service";
import { IAdmission } from "./admission";
import { ok } from "assert";

@Component({
    selector:'admission',
    templateUrl:'./admission.component.html'
})
export class AdmissionComponent
{
    constructor(private _admissionService : AdmissionService)
    { }
    
    pageTitle:string="Admissions";
    allAdmissions:IAdmission[];


    ngOnInit() : void 
    {
        this.getAllAdmissions();
    }
    public getAllAdmissions():void
    {
        this._admissionService.getAdmissions()
        .subscribe(data => this.allAdmissions = data.results,error=>"hi there is an error");
    }
    createAdmission():void
    {
        var data = {
            "patient": {"uuid":"7e66105f-3170-4710-859a-048563f26449"},
            "visitType": {"uuid": "9579bc2f-38e8-45e1-a09e-b21d12563992","display":"Follow UP"}
          };
        this._admissionService.postAdmission(data).subscribe(data=>this.allAdmissions=data) ;
    }
    deleteAdmission(uuid:string)
    {
        console.log('DELETE: ' +uuid);
        this._admissionService.deleteAdmission(uuid).subscribe(ok) ;   
    }
}