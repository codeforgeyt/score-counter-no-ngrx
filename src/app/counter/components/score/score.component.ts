import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrementForAway, decrementForHome, incrementForAway, incrementForHome, resetScoreboard } from '../../store/actions/match.actions';
import { MatchState } from '../../store/reducers/match.reducer';
import { selectAwayScore, selectHomeScore } from '../../store/selectors/match.selectors';

@Component({
  selector: 'cf-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  home$: Observable<number>;
  away$: Observable<number>;
  scoreboard$: Observable<MatchState>;

  private readonly HOME = 'home';

  constructor(private store: Store<MatchState>) {
    // Option 1:
    // this.home$ = store.pipe(select('matchState', 'homeScore'));
    // this.away$ = store.pipe(select('matchState', 'awayScore'));

    // Option 2: Selectors
    this.home$ = store.pipe(select(selectHomeScore));
    this.away$ = store.pipe(select(selectAwayScore));
  }

  ngOnInit() {
  }

  increment(team: string) {
    (team === this.HOME) ? this.store.dispatch(incrementForHome()) : this.store.dispatch(incrementForAway());
  }

  decrement(team: string) {
    (team === this.HOME) ? this.store.dispatch(decrementForHome()) : this.store.dispatch(decrementForAway());
  }

  reset() {
    this.store.dispatch(resetScoreboard());
  }
}
