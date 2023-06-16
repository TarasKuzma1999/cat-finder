import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CatService } from '../services/cat.service';
import {
  loadCats,
  loadCatsSuccess,
  loadCatsFailure,
  loadBreedsSuccess,
  loadBreedsFailure,
  loadBreeds,
} from '../actions/cat.actions';

@Injectable()
export class CatEffects {
  constructor(private actions$: Actions, private catService: CatService) {}

  loadCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCats),
      mergeMap(() =>
        this.catService.loadCats().pipe(
          map((cats) => loadCatsSuccess({ cats })),
          catchError((error) => of(loadCatsFailure({ error })))
        )
      )
    )
  );

  loadBreeds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBreeds),
      mergeMap(() =>
        this.catService.loadBreeds().pipe(
          map((breeds) => loadBreedsSuccess({ breeds })),
          catchError((error) => of(loadBreedsFailure({ error })))
        )
      )
    )
  );
}
