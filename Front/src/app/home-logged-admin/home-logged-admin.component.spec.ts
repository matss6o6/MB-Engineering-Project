import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoggedAdminComponent } from './home-logged-admin.component';

describe('HomeLoggedAdminComponent', () => {
  let component: HomeLoggedAdminComponent;
  let fixture: ComponentFixture<HomeLoggedAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLoggedAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLoggedAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
