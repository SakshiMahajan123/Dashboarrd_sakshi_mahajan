import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrStatsByCountryComponent } from './mrr-stats-by-country.component';

describe('MrrStatsByCountryComponent', () => {
  let component: MrrStatsByCountryComponent;
  let fixture: ComponentFixture<MrrStatsByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MrrStatsByCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MrrStatsByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
