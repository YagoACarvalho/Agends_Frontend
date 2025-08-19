import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDadosComponent } from './dashboard_dados.component';

describe('DashboardDadosComponent', () => {
  let component: DashboardDadosComponent;
  let fixture: ComponentFixture<DashboardDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
