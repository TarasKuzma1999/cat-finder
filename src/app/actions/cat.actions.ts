import { createAction, props } from '@ngrx/store';

export const loadCats = createAction('[Cat] Load Cats');
export const loadCatsSuccess = createAction(
  '[Cat] Load Cats Success',
  props<{ cats: any[] }>()
);
export const loadCatsFailure = createAction(
  '[Cat] Load Cats Failure',
  props<{ error: any }>()
);

export const loadBreeds = createAction('[Cat] Load Breeds');
export const loadBreedsSuccess = createAction(
  '[Cat] Load Breeds Success',
  props<{ breeds: any[] }>()
);
export const loadBreedsFailure = createAction(
  '[Cat] Load Breeds Failure',
  props<{ error: any }>()
);
