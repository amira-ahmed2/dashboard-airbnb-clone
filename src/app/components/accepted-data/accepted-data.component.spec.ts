import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedDataComponent } from './accepted-data.component';

describe('AcceptedDataComponent', () => {
  let component: AcceptedDataComponent;
  let fixture: ComponentFixture<AcceptedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
