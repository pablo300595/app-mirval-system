import { Injectable } from '@angular/core';
import { Observable, from, interval, merge, of, timer, zip } from 'rxjs';
import { skip, mergeMap, tap, map, filter, skipUntil, delay, combineLatest, combineLatestWith, toArray, distinct, distinctUntilChanged } from 'rxjs/operators';
import { Student } from 'src/app/models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PracticeObservableService {

  constructor(private http: HttpClient) { }

  getStudents(group: number): Observable<Student[]> {
    const studentsGroupA = [
      { id: '001', name: 'Pablo', age: 28, sex: 'H' },
      { id: '002', name: 'Luis', age: 28, sex: 'H' },
      { id: '003', name: 'Miguel', age: 28, sex: 'H' },
      { id: '004', name: 'Kevin', age: 29, sex: 'H' },
      { id: '005', name: 'Alexandra', age: 24, sex: 'M' }
    ];

    const studentsGroupB = [
      { id: '006', name: 'Estefania', age: 24, sex: 'M' },
      { id: '007', name: 'Francisco', age: 29, sex: 'H' },
      { id: '008', name: 'Julio', age: 28, sex: 'H' },
      { id: '009', name: 'Hernan', age: 27, sex: 'H' },
      { id: '010', name: 'Lisset', age: 26, sex: 'M' }
    ];

    if (group === 0) return of(studentsGroupA);
    return of(studentsGroupB);
  }

  createObsPromise() {
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(url, { headers });
  }

  createObsInterval() {
    const secondsCounter = interval(1000);
    return secondsCounter;
  }

  // [] to ({}, {}, ...)
  operation1() {
    console.log('operation #1: [] to ({}, {}, ...)');

    let studentsA$: Observable<Student[]> = this.getStudents(0);

    const removedArrayStudentsA$ = studentsA$.pipe(
      mergeMap(students => from(students)),
      tap(student => console.log(student))
    );

    return removedArrayStudentsA$;
  }

  // ([{},{}], [{},{}]) to ({},{},{},{})
  operation2() {
    console.log('operation #2: ([{},{}], [{},{}]) to ({},{},{},{})');

    let studentsA$: Observable<Student[]> = this.getStudents(0);
    let studentsB$: Observable<Student[]> = this.getStudents(1);

    const combinationOfStudents$ = merge(studentsA$, studentsB$).pipe(
      mergeMap(students => from(students)),
      tap(student => console.log('student data: ', student)),
    );

    return combinationOfStudents$;
  }

  operation3() {
    console.log('op3');
    let studentsA$: Observable<Student[]> = this.getStudents(0);
    let list: Student[] = [];

    const skipedStudents$ = studentsA$.pipe(
      mergeMap((students: Student[]) => of(students[1])),
      map((student: Student) => {
        const updatedList = [...list, student];
        list = updatedList;
        return list
      }),
      skip(1),
      mergeMap(student => from(student)),
      tap(student => console.log(student))
    );

    return skipedStudents$;
  }

  operation4() {
    let studentsA$: Observable<Student[]> = this.getStudents(0);
    let studentsB$: Observable<Student[]> = this.getStudents(1);
    let allStudents$ = (merge(studentsA$, studentsB$)).pipe(
      mergeMap(students => students),
      filter((student: Student) => student.sex === 'M')
    );
    // const women$ = allStudents$.pipe(
    //   tap(student => console.log(student))
    // );
    return allStudents$;
  }

  // combine observables
  operation5() {
    // const letters = of('a', 'b', 'c');
    // const result$ = letters.pipe(
    //   mergeMap(x => interval(5000).pipe(
    //     map(i => x + i)
    //   ))
    // );
    const result$ = of('a', 'b').pipe(
      mergeMap(letter => of('1', '2', '3').pipe(
        map(num => letter + num)
      ))
    );
    return result$;
  }

  operation6(): Observable<any> {
    const source$ = interval(1000);
    const trigger$ = timer(5000);
    const tri$ = of('a');

    const skippedSource$ = source$.pipe(
      skipUntil(tri$)
      // skipUntil(trigger$)
    );


    return skippedSource$;
  }

  operation7() {
    // Simulating delayed API response with data
    const apiResponse$ = of('API Response Data').pipe(delay(3000));

    // Source Observable emitting values every 1 second
    const source$ = interval(1000);

    // Skip values emitted by source$ until the delayed API response is received
    const skippedSource$ = source$.pipe(
      skipUntil(apiResponse$)
    );

    // Subscribe to the skippedSource$ Observable
    skippedSource$.subscribe(value => console.log(value));
  }

  operation8() {
    const obsA$ = of(1, 2, 3)
    console.log('zip:')
    const combination$ = obsA$.pipe(
      toArray()
    ).subscribe(res => {
      console.log(res)
    });
  }

  operation9() {
    const obsNumbers$ = of(1, 1, 1, 2, 2, 3, 3, 4, 4, 4);
    const unique$ = obsNumbers$.pipe(
      distinct()
    ).subscribe(res => console.log(res));
  }

  operation10() {
    const objA = { id: 1, name: 'John' };
    const objB = { id: 1, name: 'John' };
    const objC = { id: 2, name: 'Jane' };

    const obj = of(objA, objB, objC);

    const distinctObjects$ = obj.pipe(
      distinctUntilChanged((prev, curr) => prev.id === curr.id && prev.name === curr.name)
    ).subscribe(res => {
      console.log(res)
    });
  }
}
