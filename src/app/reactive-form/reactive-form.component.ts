import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {INSTRUMENTS} from '../person';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  personForm: FormGroup;
  instruments = INSTRUMENTS;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.personForm.value);
  }

  private createForm() {
    this.personForm = this.formBuilder.group({
      name: 'Jimmy Reactive',
      favoriteInstrument: INSTRUMENTS[0]
    });
  }
}
