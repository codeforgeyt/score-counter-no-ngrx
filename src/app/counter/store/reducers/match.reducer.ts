import { Action, createReducer, on } from '@ngrx/store';
import { decrementForAway, decrementForHome, incrementForAway, incrementForHome, resetScoreboard } from '../actions/match.actions';


export interface MatchState {
    awayScore: number;
    homeScore: number;
}


export const initialState: MatchState = {
    awayScore: 0,
    homeScore: 0,
};

const matchReducer = createReducer(initialState,
    on(incrementForHome, state => ({
        ...state,
        awayScore: state.awayScore,
        homeScore: state.homeScore + 1
    })),
    on(decrementForHome, state => ({
        ...state,
        awayScore: state.awayScore,
        homeScore: state.homeScore - 1
    })),
    on(incrementForAway, state => ({
        ...state,
        awayScore: state.awayScore + 1,
        homeScore: state.homeScore
    })),
    on(decrementForAway, state => ({
        ...state,
        awayScore: state.awayScore - 1,
        homeScore: state.homeScore
    })),
    on(resetScoreboard, state => ({ ...state, scoreboard: { homeScore: 0, awayScore: 0 } })),
);

export function createMatchReducer(state: MatchState, action: Action) {
    return matchReducer(state, action);
}
