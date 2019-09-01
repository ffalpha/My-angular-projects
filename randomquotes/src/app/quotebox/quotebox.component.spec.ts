import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteboxComponent } from './quotebox.component';

describe('QuoteboxComponent', () => {
  let component: QuoteboxComponent;
  let fixture: ComponentFixture<QuoteboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
