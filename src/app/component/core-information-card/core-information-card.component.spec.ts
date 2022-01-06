import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreInformationCardComponent } from './core-information-card.component';

describe('CoreInformationCardComponent', () => {
  let component: CoreInformationCardComponent;
  let fixture: ComponentFixture<CoreInformationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreInformationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreInformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
