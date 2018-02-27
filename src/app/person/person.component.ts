import { Component } from "@angular/core";
import { PersonService } from "./person.service";
import { IPerson } from "./person";
import { Console } from "@angular/core/src/console";
import { ok } from "assert";

@Component({
    selector:'person',
    templateUrl:'./person.component.html'
})
export class PersonComponent
{
    constructor(private _personService : PersonService)
    { }
    
    pageTitle:string="Persons";
    allPersons:IPerson[];


    ngOnInit() : void 
    {
        this.getAllPersons();
    }
    getAllPersons():void
    {
        this._personService.getPersons()
        .subscribe(data => this.allPersons = data.results,error=>"hi there is an error");
    }
    createPerson():void
    {
        var data = 
        {
            "names":[{"givenName":"Arham","familyName":"Faheem"}],
            "gender":"Male"
        };
        this._personService.postPerson(data).subscribe(data=>this.allPersons=data) ;
    }
    updatePerson(uuid:string)
    {
        console.clear();
        console.log('UPDATE: ' +uuid);
    }
    deletePerson(uuid:string)
    {
        console.clear();
        console.log('DELETE: ' +uuid);
        this._personService.deletePerson(uuid).subscribe((ok)) ;   
    }

}