import {TestBed, async} from '@angular/core/testing'
import {AppComponent} from './app.component'
import {TemplateFormComponent} from './template-form/template-form.component'
import {ReactiveFormComponent} from './reactive-form/reactive-form.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TemplateFormComponent,
        ReactiveFormComponent
      ],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
