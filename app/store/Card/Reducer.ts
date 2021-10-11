import {createReducer} from 'reduxsauce';
import {ICard, ICardState} from 'types';
import {Types} from './Actions';

export const INITIAL_STATE: ICardState = {
  submitting: false,
  error: null,
  card: null,
};

export const cardRequest = () => ({
  ...INITIAL_STATE,
  submitting: true,
});

export const cardSuccess = (
  state: ICardState,
  {payload}: {payload: ICard},
) => ({
  ...state,
  error: null,
  submitting: false,
  card: payload,
});

export const cardFailure = (state: ICardState, {error}: {error: string}) => ({
  ...state,
  error,
  submitting: false,
});

export const cardLimitRequest = () => ({
  ...INITIAL_STATE,
  submitting: true,
});

export const cardLimitSuccess = (
  state: ICardState,
  {payload}: {payload: ICard},
) => ({
  ...state,
  error: null,
  submitting: false,
  card: payload,
});

export const cardLimitFailure = (
  state: ICardState,
  {error}: {error: string},
) => ({
  ...state,
  error,
  submitting: false,
});

export const card = createReducer(INITIAL_STATE, {
  [Types.CARD_REQUEST]: cardRequest,
  [Types.CARD_SUCCESS]: cardSuccess,
  [Types.CARD_FAILURE]: cardFailure,

  [Types.CARD_LIMIT_REQUEST]: cardLimitRequest,
  [Types.CARD_LIMIT_SUCCESS]: cardLimitSuccess,
  [Types.CARD_LIMIT_FAILURE]: cardLimitFailure,
});
