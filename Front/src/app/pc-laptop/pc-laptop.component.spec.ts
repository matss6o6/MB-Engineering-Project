import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcLaptopComponent } from './pc-laptop.component';

describe('PcLaptopComponent', () => {
  let component: PcLaptopComponent;
  let fixture: ComponentFixture<PcLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcLaptopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
