import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCardComponent } from './register-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterCardComponent', () => {
  let component: RegisterCardComponent;
  let fixture: ComponentFixture<RegisterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCardComponent ],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
