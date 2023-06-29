import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcLaptopAdminComponent } from './pc-laptop-admin.component';

describe('PcLaptopAdminComponent', () => {
  let component: PcLaptopAdminComponent;
  let fixture: ComponentFixture<PcLaptopAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcLaptopAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcLaptopAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
