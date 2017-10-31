import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpatialIndexComponent } from './spatial-index.component';

describe('SpatialIndexComponent', () => {
  let component: SpatialIndexComponent;
  let fixture: ComponentFixture<SpatialIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpatialIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpatialIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
