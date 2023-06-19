import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { CatState } from '../../../reducers/cat.reducer';
import { loadBreeds, loadCats, searchCats } from 'src/app/actions/cat.actions';
import { isLoading, selectBreeds } from 'src/app/selectors/cat.selectors';
import { Breed } from 'src/app/interfaces/breed.interface';

@Component({
  selector: 'app-cat-search',
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.scss'],
})
export class CatSearchComponent implements OnInit {
  searchForm!: FormGroup;
  breeds: Breed[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<CatState>
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      selectedBreeds: [],
      count: 10,
    });

    this.store.dispatch(loadCats({ count: this.searchForm.value.count }));
    this.store.dispatch(loadBreeds());

    this.store.select(selectBreeds).subscribe((breeds) => {
      this.breeds = breeds;
    });
  }

  resetFilters(): void {
    this.searchForm.reset({ selectedBreeds: [], count: 10 });
    this.store.dispatch(loadCats({ count: this.searchForm.value.count }));
  }

  searchCats() {
    if (this.searchForm?.value?.selectedBreeds?.length) {
      this.store.dispatch(searchCats(this.searchForm.value));
    } else {
      this.store.dispatch(loadCats({ count: this.searchForm.value.count }));
    }
  }
}
