import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpSectionComponent } from './http-section.component';

describe('HttpSectionComponent', () => {
  let component: HttpSectionComponent;
  let fixture: ComponentFixture<HttpSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
