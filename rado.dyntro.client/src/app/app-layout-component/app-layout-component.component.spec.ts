import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutComponentComponent } from './app-layout-component.component';

describe('AppLayoutComponentComponent', () => {
  let component: AppLayoutComponentComponent;
  let fixture: ComponentFixture<AppLayoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppLayoutComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
