import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorSectionComponent } from './major-section.component';

describe('MajorSectionComponent', () => {
  let component: MajorSectionComponent;
  let fixture: ComponentFixture<MajorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MajorSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
