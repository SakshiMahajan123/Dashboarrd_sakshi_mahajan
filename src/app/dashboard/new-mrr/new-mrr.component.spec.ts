import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMrrComponent } from './new-mrr.component';

describe('NewMrrComponent', () => {
  let component: NewMrrComponent;
  let fixture: ComponentFixture<NewMrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewMrrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewMrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
