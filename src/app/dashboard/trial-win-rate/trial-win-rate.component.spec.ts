import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialWinRateComponent } from './trial-win-rate.component';

describe('TrialWinRateComponent', () => {
  let component: TrialWinRateComponent;
  let fixture: ComponentFixture<TrialWinRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrialWinRateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrialWinRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
