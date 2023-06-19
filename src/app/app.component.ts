import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatState } from './reducers/cat.reducer';
import { isLoading } from './selectors/cat.selectors';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading = false;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(private store: Store<CatState>) {}

  ngOnInit(): void {
    this.store
      .select(isLoading)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoading) => {
        this.loading = isLoading;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
