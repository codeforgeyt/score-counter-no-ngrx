import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as MatchAction from '../../store/actions/match.actions';
import { MatchState } from '../../store/reducers/match.reducer';
import * as MatchSelector from '../../store/selectors/match.selectors';

@Component({
  selector: 'cf-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  home$: Observable<number>;
  away$: Observable<number>;

  private readonly HOME = 'home';

  constructor(private store: Store<MatchState>) {
    // Option 1:
    // this.home$ = store.pipe(select('matchState', 'homeScore'));
    // this.away$ = store.pipe(select('matchState', 'awayScore'));

    // Option 2: Selectors
    this.home$ = store.pipe(select(MatchSelector.selectHomeScore));
    this.away$ = store.pipe(select(MatchSelector.selectAwayScore));
  }

  ngOnInit() { }

  increment(team: string) {
    (team === this.HOME) ?
      this.store.dispatch(MatchAction.incrementForHome()) : this.store.dispatch(MatchAction.incrementForAway());
  }

  decrement(team: string) {
    (team === this.HOME) ?
      this.store.dispatch(MatchAction.decrementForHome()) : this.store.dispatch(MatchAction.decrementForAway());
  }

  reset() {
    this.store.dispatch(MatchAction.resetScoreboard());
  }
}
