import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  user$: Observable<Auth> = this.userService.getCurrentUser();
  
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  goToLoginPage() {
    this.router.navigateByUrl('/auth/login');
  }

  goToRegisterPage() {
    this.router.navigateByUrl('/auth/register');
  }
}
