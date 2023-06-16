import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { CatState } from '../../../reducers/cat.reducer';
import { loadBreeds, loadCats } from 'src/app/actions/cat.actions';
import { selectBreeds } from 'src/app/selectors/cat.selectors';

@Component({
  selector: 'app-cat-search',
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.scss'],
})
export class CatSearchComponent implements OnInit {
  searchForm!: FormGroup;
  breeds: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<CatState>
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      selectedBreeds: [],
      resultCount: 10,
    });

    this.store.dispatch(loadCats());
    this.store.dispatch(loadBreeds());

    this.store.select(selectBreeds).subscribe((breeds) => {
      console.log(breeds);
      this.breeds = breeds;
    });
  }

  searchCats(): void {
    // this.catService.getAllBreeds().subscribe((res) => {
    //   this.breeds = res;
    // });
    // this.catService.loadCats().subscribe((res) => {
    //   console.log(res);
    // });
  }

  resetFilters(): void {
    this.searchForm.reset({ resultCount: 10 });
  }

  onSubmit() {
    console.log(this.searchForm);
  }
}
