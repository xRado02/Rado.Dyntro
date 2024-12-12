import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInformationSectionComponent } from './business-information-section.component';

describe('BusinessInformationSectionComponent', () => {
  let component: BusinessInformationSectionComponent;
  let fixture: ComponentFixture<BusinessInformationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessInformationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessInformationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
