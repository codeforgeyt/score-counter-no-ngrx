import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScoreComponent } from './components/score/score.component';
import { CounterRoutingModule } from './counter-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { createMatchReducer } from './store/reducers/match.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [ScoreComponent],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    CounterRoutingModule,
    StoreModule.forRoot({matchState: createMatchReducer})
  ],
  exports: [ScoreComponent]
})
export class CounterModule { }
