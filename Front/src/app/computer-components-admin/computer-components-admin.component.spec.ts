import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerComponentsAdminComponent } from './computer-components-admin.component';

describe('ComputerComponentsAdminComponent', () => {
  let component: ComputerComponentsAdminComponent;
  let fixture: ComponentFixture<ComputerComponentsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerComponentsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerComponentsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
