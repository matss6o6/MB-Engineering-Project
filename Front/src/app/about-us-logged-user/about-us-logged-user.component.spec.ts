import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsLoggedUserComponent } from './about-us-logged-user.component';

describe('AboutUsLoggedUserComponent', () => {
  let component: AboutUsLoggedUserComponent;
  let fixture: ComponentFixture<AboutUsLoggedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsLoggedUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsLoggedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
