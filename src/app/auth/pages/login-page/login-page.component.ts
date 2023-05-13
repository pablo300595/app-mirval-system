import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Environment } from 'src/app/environment';
import { Image } from 'src/app/models/image';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  users$: Observable<User[]> = of([]);
  cardImages: Image[] = Environment.images;

  constructor(private userService: UserService) {}

  ngOnInit() {
  }
}

