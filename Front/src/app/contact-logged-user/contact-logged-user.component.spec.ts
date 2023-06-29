import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLoggedUserComponent } from './contact-logged-user.component';

describe('ContactLoggedUserComponent', () => {
  let component: ContactLoggedUserComponent;
  let fixture: ComponentFixture<ContactLoggedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactLoggedUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactLoggedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
