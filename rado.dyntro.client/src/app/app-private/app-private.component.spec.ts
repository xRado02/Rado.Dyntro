import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrivateComponent } from './app-private.component';

describe('AppPrivateComponent', () => {
  let component: AppPrivateComponent;
  let fixture: ComponentFixture<AppPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppPrivateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
