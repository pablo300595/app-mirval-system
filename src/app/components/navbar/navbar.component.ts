import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/state/app-state';
import { Image } from 'src/app/models/image';
import { UserService } from 'src/app/modules/shared/services/user.service';
import { environment } from 'src/app/environment';
import * as authActions from '../../modules/auth/store/actions/auth.actions';
import { RouterModule } from '@angular/router';

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
  brandLogo: Image = environment.logoImage;

  constructor(
    private userService: UserService,
    private store: Store<AppState>
  ) { }

  logout() {
    this.store.dispatch(authActions.logout());
  }

}
