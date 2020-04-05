import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FossilsDashboardComponent } from './fossils-dashboard.component';

describe('FossilsDashboardComponent', () => {
  let component: FossilsDashboardComponent;
  let fixture: ComponentFixture<FossilsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FossilsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FossilsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
