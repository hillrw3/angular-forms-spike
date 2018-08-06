import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {TemplateFormComponent} from './template-form.component'
import {FormsModule} from '@angular/forms'

describe('TemplateFormComponent', () => {
  let component: TemplateFormComponent
  let fixture: ComponentFixture<TemplateFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateFormComponent],
      imports: [FormsModule]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
