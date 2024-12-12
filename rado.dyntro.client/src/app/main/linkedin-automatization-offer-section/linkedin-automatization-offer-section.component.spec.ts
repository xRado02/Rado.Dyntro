import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinAutomatizationOfferSectionComponent } from './linkedin-automatization-offer-section.component';

describe('LinkedinAutomatizationOfferSectionComponent', () => {
  let component: LinkedinAutomatizationOfferSectionComponent;
  let fixture: ComponentFixture<LinkedinAutomatizationOfferSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkedinAutomatizationOfferSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinAutomatizationOfferSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
