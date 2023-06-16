import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatState } from '../../../reducers/cat.reducer';
import { selectCats } from 'src/app/selectors/cat.selectors';

@Component({
  selector: 'app-cat-results',
  templateUrl: './cat-results.component.html',
  styleUrls: ['./cat-results.component.scss'],
})
export class CatResultsComponent implements OnInit {
  constructor(private store: Store<CatState>) {}

  ngOnInit(): void {
    this.store.select(selectCats).subscribe((cats) => {
      console.log(cats);
    });
  }
}
