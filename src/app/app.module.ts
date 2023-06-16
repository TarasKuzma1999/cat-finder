import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { CatSearchComponent } from './components/catSearch/cat-search/cat-search.component';
import { CatResultsComponent } from './components/catResults/cat-results/cat-results.component';
import { CatService } from './services/cat.service';
import { StoreModule } from '@ngrx/store';
import { catReducer } from './reducers/cat.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CatEffects } from './effects/cat.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, CatSearchComponent, CatResultsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    StoreModule.forRoot({ cats: catReducer }),
    EffectsModule.forRoot([CatEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [CatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
