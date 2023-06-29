import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarddiskAdminComponent } from './harddisk-admin.component';

describe('HarddiskAdminComponent', () => {
  let component: HarddiskAdminComponent;
  let fixture: ComponentFixture<HarddiskAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarddiskAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarddiskAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
