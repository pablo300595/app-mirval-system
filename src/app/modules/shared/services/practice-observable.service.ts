import { Injectable } from '@angular/core';
import { Observable, from, interval, merge, of } from 'rxjs';
import { mergeMap, tap } from 'rxjs';
import { Student } from 'src/app/models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PracticeObservableService {

  constructor(private http: HttpClient) { }

  getStudents(group: number): Observable<Student[]> {
    const studentsGroupA = [
      { id: '001', name: 'Pablo', age: 28 },
      { id: '002', name: 'Luis', age: 28 }
    ];

    const studentsGroupB = [
      { id: '003', name: 'Miguel', age: 28 },
      { id: '004', name: 'Kevin', age: 29 }
    ];

    if(group === 0) return of(studentsGroupA);
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
}
