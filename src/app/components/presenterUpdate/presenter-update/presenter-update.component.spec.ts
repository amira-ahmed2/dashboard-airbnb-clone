import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenterUpdateComponent } from './presenter-update.component';

describe('PresenterUpdateComponent', () => {
  let component: PresenterUpdateComponent;
  let fixture: ComponentFixture<PresenterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenterUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
