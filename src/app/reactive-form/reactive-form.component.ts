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

  get name() {
    return this.personForm.get('name');
  }

  private createForm() {
    this.personForm = this.formBuilder.group({
      name: ['', Validators.required],
      favoriteInstrument: ['', Validators.required]
    });
  }
}
