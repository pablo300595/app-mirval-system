import { ResolveFn } from '@angular/router';
import { Observable, delay, of } from 'rxjs';


export const staticPageResolver: ResolveFn<boolean> = (): Observable<boolean> => {
  delay(500);
  console.log('aboutPage');
  return of(true);
}