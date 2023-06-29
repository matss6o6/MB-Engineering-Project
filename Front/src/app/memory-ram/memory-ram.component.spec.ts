import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryRamComponent } from './memory-ram.component';

describe('MemoryRamComponent', () => {
  let component: MemoryRamComponent;
  let fixture: ComponentFixture<MemoryRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryRamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
