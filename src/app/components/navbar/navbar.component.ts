import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router, RouterModule } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  standalone: true,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavbarComponent {
  user$: Observable<Auth> = this.userService.getCurrentUser();
  subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.subscription = this.userService.logout().subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }

}
