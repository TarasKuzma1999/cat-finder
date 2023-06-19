import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CatState } from '../reducers/cat.reducer';

export const selectCatState = createFeatureSelector<CatState>('cats');

export const selectCats = createSelector(
  selectCatState,
  (state: CatState) => state.cats
);

export const selectBreeds = createSelector(
  selectCatState,
  (state: CatState) => state.breeds
);

export const isLoading = createSelector(
  selectCatState,
  (state: CatState) => state.loading
);
