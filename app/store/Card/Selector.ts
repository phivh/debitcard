import {createSelector} from 'reselect';
import {ICardState} from 'types';

const selector = (state: {card: ICardState}) => state.card;

export const getError = createSelector(
  selector,
  ({error}: ICardState) => error,
);

export const getLoading = createSelector(
  selector,
  ({submitting}: ICardState) => submitting,
);

export const getCard = createSelector(selector, ({card}: ICardState) => card);

export const getEnabledLimit = createSelector(
  selector,
  ({card}: ICardState) => !!card?.limit,
);

export const getAccountBalance = createSelector(
  selector,
  ({card}: ICardState) => card?.balance,
);
