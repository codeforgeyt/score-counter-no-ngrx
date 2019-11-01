import { createAction } from '@ngrx/store';

export const incrementForHome = createAction('[Score Component] Increment Home team score');
export const decrementForHome = createAction('[Score Component] Decrement Home team score');
export const incrementForAway = createAction('[Score Component] Increment Away team score');
export const decrementForAway = createAction('[Score Component] Decrement Away team score');
export const resetScoreboard =  createAction('[Score Component] Reset score');
