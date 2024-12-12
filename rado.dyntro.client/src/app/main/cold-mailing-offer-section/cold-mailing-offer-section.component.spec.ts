import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdMailingOfferSectionComponent } from './cold-mailing-offer-section.component';

describe('ColdMailingOfferSectionComponent', () => {
  let component: ColdMailingOfferSectionComponent;
  let fixture: ComponentFixture<ColdMailingOfferSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColdMailingOfferSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdMailingOfferSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
