import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigsMenuComponent } from './configs-menu.component';

describe('ConfigsMenuComponent', () => {
  let component: ConfigsMenuComponent;
  let fixture: ComponentFixture<ConfigsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
