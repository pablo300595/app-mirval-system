import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, concat, from, fromEvent, merge, of } from 'rxjs';
import { concatMap, mergeMap, tap } from 'rxjs/operators';
import { Student } from './models/student';
import { AuthService } from './modules/shared/services/auth.service';
import { PracticeObservableService } from './modules/shared/services/practice-observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-mirval-system';
  realList: Student[] = [];
  @ViewChild('superText') supertext: ElementRef = new ElementRef('');

  constructor(private practiceObservableService: PracticeObservableService) {
    console.log('New version 0.0.1');
  }

  ngOnInit() {
    console.log('ngOnInit hook');
    // this.practiceObservableService.createObsPromise()
    //   .subscribe({
    //     next(pokemon) {
    //       console.log(pokemon);
    //     },
    //     error(err) { console.error('Error: ' + err); },
    //     complete() { console.log('Completed'); }
    //   }
    // );

    // const suscription = this.practiceObservableService.createObsInterval()
    //   .subscribe({
    //     next(res) {
    //       console.log(res)
    //     },
    //     error(err) { console.error('Error: ' + err); },
    //     complete() { console.log('Completed'); }
    //   });

    // setTimeout(() => {
    //   suscription.unsubscribe()
    // }, 4000);

    // this.practiceObservableService.operation1().subscribe();

    // this.practiceObservableService.operation2()
    //   .subscribe((student: Student) => {
    //     const updatedList = [...this.realList, student];
    //     this.realList = updatedList;
    //   }
    // );
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit hook');
    console.log(this.supertext.nativeElement);
    let mouseMoves = fromEvent<MouseEvent>(this.supertext.nativeElement, 'onclick');
    mouseMoves.subscribe(event => console.log(event));
  }
}
