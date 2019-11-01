import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MatchState } from '../reducers/match.reducer';

// Option 1:
// export const selectMatchState = (state: any) => state.matchState;
// Option 2:
export const selectMatchState = createFeatureSelector('matchState');
export const selectHomeScore = createSelector(selectMatchState, (matchState: MatchState) => matchState.homeScore);
export const selectAwayScore = createSelector(selectMatchState, (matchState: MatchState) => matchState.awayScore);
