import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { LoginCardComponent } from '../../components/login-card/login-card.component';
import { UserService } from 'src/app/modules/shared/services/user.service';

import { Auth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent, LoginCardComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        UserService,
        { provide: Auth, useValue: {} },
        { provide: Store, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
