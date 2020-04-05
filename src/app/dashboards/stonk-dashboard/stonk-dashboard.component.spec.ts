import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StonkDashboardComponent } from './stonk-dashboard.component';

describe('StonkDashboardComponent', () => {
  let component: StonkDashboardComponent;
  let fixture: ComponentFixture<StonkDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonkDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StonkDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
