import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryRamAdminComponent } from './memory-ram-admin.component';

describe('MemoryRamAdminComponent', () => {
  let component: MemoryRamAdminComponent;
  let fixture: ComponentFixture<MemoryRamAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryRamAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryRamAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
