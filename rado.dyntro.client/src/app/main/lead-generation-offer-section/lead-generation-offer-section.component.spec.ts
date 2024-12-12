import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadGenerationOfferSectionComponent } from './lead-generation-offer-section.component';

describe('LeadGenerationOfferSectionComponent', () => {
  let component: LeadGenerationOfferSectionComponent;
  let fixture: ComponentFixture<LeadGenerationOfferSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadGenerationOfferSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadGenerationOfferSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
