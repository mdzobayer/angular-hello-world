import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    //template: '<h2>{{ "Title: " + getTitle() }}</h2>'
    template: `
        <h2>{{ title }}</h2>                                                            <!-- String Interpolation -->
        <h2 [textContent]="title"></h2>                                                 <!-- Property Buinding -->
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <img src="{{ imageUrl }}"/>                                                     <!-- Property Buinding -->
        <img [src] = "imageUrl" />                                                      <!-- Property Buinding -->
        <table>
            <tr>
                <td [attr.colspan]="colSpan">gray</td>                                  <!-- Attribute Buinding -->
                <td [attr.colspan]="colSpan">white</td>
            </tr>
            <tr>
            <td [attr.colspan]="colSpan">black</td>                                     <!-- Attribute Buinding -->
            
        </tr>
        </table>

        <button class="btn btn-primary" [class.active]="isActive">Save</button>         <!-- Class buinding -->
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save2 </button>   <!-- Style buinding --> 
        <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Click me</button>                              <!-- Event buinding --> 
        </div>
        <input (keyup.enter)="onKeyUp($event)" />                                             <!-- Taking value via Event Filtering -->
    `
})
export class CoursesComponent {
    private title = "List of Courses";
    courses:string[] = [];
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = true;

    constructor(service: CoursesService) {
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    onSave($event) {
        $event.stopPropagation()        // Handle Event Bubbling Problem
        console.log("Button was clicked : " + $event);
    }

    onDivClicked() {
        console.log("Div was clicked");
    }

    onKeyUp($event) {

        console.log($event.target.value);

    }

    // Logic for calling an http service
}