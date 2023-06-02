import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  user$ = this.activatedRoute.data;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  goToLoginPage() {
    this.router.navigateByUrl('/auth/login');
  }

  goToRegisterPage() {
    this.router.navigateByUrl('/auth/register');
  }
}
