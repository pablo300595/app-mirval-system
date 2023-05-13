import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  standalone: true,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule]
})
export class NavbarComponent {
  isAuthenticated = false;
  user$: Observable<Auth> = this.userService.getCurrentUser();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

}
