import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaecherComponent } from './add-taecher.component';

describe('AddTaecherComponent', () => {
  let component: AddTaecherComponent;
  let fixture: ComponentFixture<AddTaecherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaecherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaecherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
