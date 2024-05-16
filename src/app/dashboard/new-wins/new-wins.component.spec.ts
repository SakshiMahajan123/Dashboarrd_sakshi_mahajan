import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWinsComponent } from './new-wins.component';

describe('NewWinsComponent', () => {
  let component: NewWinsComponent;
  let fixture: ComponentFixture<NewWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewWinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
