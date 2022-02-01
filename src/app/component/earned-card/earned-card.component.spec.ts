import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnedCardComponent } from './earned-card.component';

describe('EarnedCardComponent', () => {
  let component: EarnedCardComponent;
  let fixture: ComponentFixture<EarnedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
