import { Component } from "@angular/core";
import { PatientService } from "./patient.service";
import { IPatient } from "./patient";
import { IPerson } from '../person/person';
import { Console } from "@angular/core/src/console";
import { ok } from "assert";
import { PersonService } from "../person/person.service";
import { mergeMap } from 'rxjs/operators';

@Component({
    selector:'patient',
    templateUrl:'./patient.component.html'
})
export class PatientComponent
{
    constructor(private _patientService : PatientService, private _personService:PersonService)
    { }
    
    pageTitle:string="Patients";
    allPatients:IPatient[];


    ngOnInit() : void 
    {
        this.getAllPatients();
    }
    getAllPatients():void
    {
        this._patientService.getPatients()
        .subscribe(data => this.allPatients = data.results,error=>"hi there is an error");
    }
    createPatient():void
    {
        var identifier:string="";
        var person:any = {
            "names":[{"givenName":"Ali","familyName":"Haseeb"}],
            "gender":"Male"
        };

        this._patientService.getIdentifier()
        .subscribe
        (
            res => 
            { 
                let identifier = res.identifiers[0]
                console.log("patient.identifiers.identifier: " + identifier );
                this._personService.postPerson(person)
                .subscribe
                (
                    res => 
                    {
                        let personObj  = res.json();

                        this._patientService.postPatient
                        (
                            {
                                person: personObj.uuid,
                                identifiers:
                                [
                                    {
                                        identifierType: "8d793bee-c2cc-11de-8d13-0010c6dffd0f",
                                        location: "f230e26d-a1fb-4f06-95a4-29cf144fb51e",
                                        identifier: identifier
                                    }
                                ]
                            }
                        )
                        .subscribe(res => console.log('AlhamduLillah: ' + res.json().display));
                    }  
                );
            }

        );   
    }
    updatePatient(uuid:string)
    {
        console.clear();
        console.log('UPDATE: ' +uuid);
    }
    deletePatient(uuid:string)
    {
        console.clear();
        console.log('DELETE: ' +uuid);
        this._patientService.deletePatient(uuid).subscribe((ok)) ;   
    }

}