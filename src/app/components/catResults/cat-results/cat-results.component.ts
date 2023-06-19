import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatState } from '../../../reducers/cat.reducer';
import { selectCats } from 'src/app/selectors/cat.selectors';
import { Cat } from 'src/app/interfaces/cat.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cat-results',
  templateUrl: './cat-results.component.html',
  styleUrls: ['./cat-results.component.scss'],
})
export class CatResultsComponent implements OnInit {
  selectedCats: Cat[] = [];

  private unsubscribe$: Subject<void> = new Subject();

  constructor(private store: Store<CatState>) {}

  ngOnInit(): void {
    this.store
      .select(selectCats)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((cats) => {
        this.selectedCats = cats;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
