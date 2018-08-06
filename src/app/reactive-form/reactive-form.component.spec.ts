import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {ReactiveFormComponent} from './reactive-form.component'
import {ReactiveFormsModule} from '@angular/forms'

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent
  let fixture: ComponentFixture<ReactiveFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('validations', () => {
    it('requires and validates pattern of email', () => {
      expect(component.email.errors.required).toEqual(true)

      component.email.setValue('notAnEmail')

      expect(component.email.errors.email).toEqual(true)

      component.email.setValue('some@email.com')

      expect(component.email.errors).toBeNull()
    })
  })
})
