import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFiliereComponent } from './all-filiere.component';

describe('AllFiliereComponent', () => {
  let component: AllFiliereComponent;
  let fixture: ComponentFixture<AllFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
