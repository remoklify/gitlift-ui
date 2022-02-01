import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnedPageComponent } from './earned-page.component';

describe('EarnedPageComponent', () => {
  let component: EarnedPageComponent;
  let fixture: ComponentFixture<EarnedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
