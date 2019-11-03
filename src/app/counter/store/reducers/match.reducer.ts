import { Action, createReducer, on } from '@ngrx/store';
import * as MatchAction from '../actions/match.actions';

export interface MatchState {
    awayScore: number;
    homeScore: number;
}

export const initialState: MatchState = {
    awayScore: 0,
    homeScore: 0,
};

const matchReducer = createReducer(initialState,
    on(MatchAction.incrementForHome, state => ({
        ...state,
        awayScore: state.awayScore,
        homeScore: state.homeScore + 1
    })),
    on(MatchAction.decrementForHome, state => ({
        ...state,
        awayScore: state.awayScore,
        homeScore: state.homeScore - 1
    })),
    on(MatchAction.incrementForAway, state => ({
        ...state,
        awayScore: state.awayScore + 1,
        homeScore: state.homeScore
    })),
    on(MatchAction.decrementForAway, state => ({
        ...state,
        awayScore: state.awayScore - 1,
        homeScore: state.homeScore
    })),
    on(MatchAction.resetScoreboard, state => ({
        ...state,
        homeScore: state.homeScore = 0,
        awayScore: state.awayScore = 0
    })),
);

export function createMatchReducer(state: MatchState, action: Action) {
    return matchReducer(state, action);
}
