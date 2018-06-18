import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  }

  ngOnInit() {
    this.createForm();
  }

  submitForm() {
    console.log(this.personForm.value);
  }

  get email() {
    return this.personForm.get('email');
  }

  get name() {
    return this.personForm.get('name');
  }

  get primaryInstrument() {
    return this.personForm.get('primaryInstrument');
  }

  private createForm() {
    this.personForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      primaryInstrument: ['', Validators.required]
    });
  }
}
