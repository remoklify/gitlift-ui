import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInformationCardComponent } from './personal-information-card.component';

describe('PersonalInformationCardComponent', () => {
  let component: PersonalInformationCardComponent;
  let fixture: ComponentFixture<PersonalInformationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInformationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
