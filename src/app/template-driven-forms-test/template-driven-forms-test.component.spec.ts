import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsTestComponent } from './template-driven-forms-test.component';

describe('TemplateDrivenFormsTestComponent', () => {
  let component: TemplateDrivenFormsTestComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
