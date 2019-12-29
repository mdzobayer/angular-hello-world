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
        <input type="text" #Email (keyup.enter)="onKeyUp1(Email.value)" />                                             <!-- View to component with Template varibale -->

        <input type="text" [value]="email" (keyup.enter)="onKeyUp()" />                                             <!-- Component to view with property buinding [one direction] -->
        <input type="text" [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />                                             <!-- Component to view and View to component with property buinding [both direction] -->
        <input type="text" [(ngModel)]="email" (keyup.enter)="onKeyUp()" />                                             <!-- Banana in box Angular syntax [both direction] -->
        <br/> <br/>
        {{ course.title | uppercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'2.5-8' }} <br/>
        {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
        {{ course.releaseDate | date:'shortDate' }} <br/>
        <br />
        <p>Summary</p>
        {{ dummyText | summary:10 }}
        `
})
export class CoursesComponent {
    private title = "List of Courses";
    courses:string[] = [];
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = true;
    dummyText:string = "klsdjfiosdhjoiewnndvklnsdokfhksdjflksdjfolkewjhijhnsdlkfjsdklfjlksdjflksdjflksdnfgvklnsdjflkesjfkljsdlkflkhnvoisadhfgoidhfiodsfoijsopiuewior yweuioryhjkwndfklsadflkasd hjklashfoipsdjhiuohihkjshfksjhkhkjlhfklsdahjklsdshdf kljhkjsadhfoiaehrfshiuofewroiuweporijsdlkfjsdlkfjslkdf";

    email:string = "me@someone.somewhere" ;

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

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

    onKeyUp() {

        console.log("onKeyUp log: " + this.email);

    }

    onKeyUp1(Email) {
        console.log("onKeyUp1 log: " + Email);
    }

    // Logic for calling an http service
}