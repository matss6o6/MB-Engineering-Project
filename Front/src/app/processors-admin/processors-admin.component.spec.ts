import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorsAdminComponent } from './processors-admin.component';

describe('ProcessorsAdminComponent', () => {
  let component: ProcessorsAdminComponent;
  let fixture: ComponentFixture<ProcessorsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessorsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessorsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
