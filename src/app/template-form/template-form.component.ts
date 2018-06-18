import {Component, OnInit} from '@angular/core';
import {INSTRUMENTS, Person} from '../person';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  person = new Person('', '', '');
  instruments = INSTRUMENTS;

  constructor() {
  }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.person);
  }
}
