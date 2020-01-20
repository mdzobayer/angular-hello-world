import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
   }

  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });

  ngOnInit() {
  }


  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));     // Abstract control
    topic.value = '';
  }

  get topics() {
    return (this.form.get('topics') as FormArray);
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

}
