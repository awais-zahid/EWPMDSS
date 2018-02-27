import { Component } from "@angular/core";

@Component(
    {
        selector:'home',
        templateUrl:'./home.component.html'
    }
)
export class HomeComponent
{
    pageTitle:string = "Welcome to E-Ward Patient Monitoring and Management System";   
}