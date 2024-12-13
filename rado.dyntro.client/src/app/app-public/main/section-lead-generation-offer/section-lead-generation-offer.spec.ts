import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLeadGenerationOfferComponent } from './section-lead-generation-offer.component';

describe('SectionLeadGenerationOfferComponent', () => {
  let component: SectionLeadGenerationOfferComponent;
  let fixture: ComponentFixture<SectionLeadGenerationOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionLeadGenerationOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionLeadGenerationOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
