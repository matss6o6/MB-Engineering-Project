import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAuthPageComponent } from './un-auth-page.component';

describe('UnAuthPageComponent', () => {
  let component: UnAuthPageComponent;
  let fixture: ComponentFixture<UnAuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnAuthPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnAuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
