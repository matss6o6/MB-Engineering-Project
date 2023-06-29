import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardAdminComponent } from './graphic-card-admin.component';

describe('GraphicCardAdminComponent', () => {
  let component: GraphicCardAdminComponent;
  let fixture: ComponentFixture<GraphicCardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicCardAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicCardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
