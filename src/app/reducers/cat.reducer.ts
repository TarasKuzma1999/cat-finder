import { createReducer, on } from '@ngrx/store';
import {
  loadCats,
  loadCatsSuccess,
  loadCatsFailure,
  loadBreeds,
  loadBreedsSuccess,
  loadBreedsFailure,
} from '../actions/cat.actions';

export interface CatState {
  cats: any[];
  breeds: any[];
  loading: boolean;
  error: any;
}

export const initialState: CatState = {
  cats: [],
  breeds: [],
  loading: false,
  error: null,
};

export const catReducer = createReducer(
  initialState,
  on(loadCats, (state) => ({ ...state, loading: true, error: null })),
  on(loadCatsSuccess, (state, { cats }) => ({
    ...state,
    cats,
    loading: false,
  })),
  on(loadCatsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(loadBreeds, (state) => ({ ...state, loading: true, error: null })),
  on(loadBreedsSuccess, (state, { breeds }) => ({
    ...state,
    breeds,
    loading: false,
  })),
  on(loadBreedsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
