import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedDataComponent } from './rejected-data.component';

describe('RejectedDataComponent', () => {
  let component: RejectedDataComponent;
  let fixture: ComponentFixture<RejectedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
