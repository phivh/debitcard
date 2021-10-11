import {takeLatest, all} from 'redux-saga/effects';

import {Sagas as CardSagas, Types as CardTypes} from './Card';

export const rootSaga = function* root() {
  yield all([
    takeLatest(CardTypes.CARD_REQUEST, CardSagas.card),
    takeLatest(CardTypes.CARD_LIMIT_REQUEST, CardSagas.cardLimit),
  ]);
};

export default rootSaga;
