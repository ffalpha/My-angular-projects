import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelsitComponent } from './employeelsit.component';

describe('EmployeelsitComponent', () => {
  let component: EmployeelsitComponent;
  let fixture: ComponentFixture<EmployeelsitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeelsitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
