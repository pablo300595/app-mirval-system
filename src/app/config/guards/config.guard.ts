import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../shared/services/user.service';
import { Auth, User } from '@angular/fire/auth';

export const configGuard = () => {
  const router = inject(Router);
  const userService = inject(UserService);

  const auth: Auth = userService.getAuth();

  auth.onAuthStateChanged((user: User | null) => {
    user ? null: router.navigate(['/login']);
  });
  
};
