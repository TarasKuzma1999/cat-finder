import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatState } from './reducers/cat.reducer';
import { isLoading } from './selectors/cat.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(private store: Store<CatState>) {}

  ngOnInit(): void {
    this.store.select(isLoading).subscribe((isLoading) => {
      this.loading = isLoading;
    });
  }
}
