import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Auth, User } from '@angular/fire/auth';

export const configGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const auth: Auth = authService.getAuth();

  auth.onAuthStateChanged((user: User | null) => {
    user ? null: router.navigate(['/login']);
  });
  
};
