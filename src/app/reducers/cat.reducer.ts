import { createReducer, on } from '@ngrx/store';
import {
  loadCats,
  loadCatsSuccess,
  loadCatsFailure,
  loadBreeds,
  loadBreedsSuccess,
  loadBreedsFailure,
  searchCats,
  searchCatsSuccess,
  searchCatsFailure,
} from '../actions/cat.actions';
import { Cat } from '../interfaces/cat.interface';
import { Breed } from '../interfaces/breed.interface';

export interface CatState {
  cats: Cat[];
  breeds: Breed[];
  loading: boolean;
  error: string | null;
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
  })),

  on(searchCats, (state) => ({ ...state, loading: true, error: null })),
  on(searchCatsSuccess, (state, { cats }) => ({
    ...state,
    cats,
    loading: false,
  })),
  on(searchCatsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
