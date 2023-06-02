// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { EMPTY } from 'rxjs';
// import { map, exhaustMap, catchError } from 'rxjs/operators';
// import { UserService } from './../../shared/services/user.service';
// import * as configActions from './config.actions';
// import { ModalService } from 'src/app/shared/services/modal.service';

// @Injectable()
// export class ConfigEffects {
//     getEvent$ = createEffect(() => {
//         ofType(configActions.setConfigModalType),
//         exhaustMap(()=> this.modalService.getEvent()
//             .pipe(
//                 map( () => console.log('')),
//                 catchError(() => EMPTY)
//             )
//         )
//     });

//     constructor(
//         private actions$: Actions,
//         private modalService: ModalService

//     ) { }
// }