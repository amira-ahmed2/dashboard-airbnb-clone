import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdatesComponent } from './user-updates.component';

describe('UserUpdatesComponent', () => {
  let component: UserUpdatesComponent;
  let fixture: ComponentFixture<UserUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
