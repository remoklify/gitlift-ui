import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeInfoCardComponent } from './badge-info-card.component';

describe('BadgeInfoCardComponent', () => {
  let component: BadgeInfoCardComponent;
  let fixture: ComponentFixture<BadgeInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
