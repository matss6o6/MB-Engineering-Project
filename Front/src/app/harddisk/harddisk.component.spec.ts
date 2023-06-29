import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarddiskComponent } from './harddisk.component';

describe('HarddiskComponent', () => {
  let component: HarddiskComponent;
  let fixture: ComponentFixture<HarddiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarddiskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarddiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
