import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    //template: '<h2>{{ "Title: " + getTitle() }}</h2>'
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent]="title"></h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <img src="{{ imageUrl }}"/>
        <img [src] = "imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>

        <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})
export class CoursesComponent {
    private title = "List of Courses";
    courses:string[] = [];
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = false;

    constructor(service: CoursesService) {
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    // Logic for calling an http service
}