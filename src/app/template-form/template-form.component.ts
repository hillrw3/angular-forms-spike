import {Component, OnInit} from '@angular/core';
import {INSTRUMENTS, Person} from '../person';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  person = new Person('billy template', INSTRUMENTS[0]);
  instruments = INSTRUMENTS;

  constructor() {
  }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.person);
  }
}
