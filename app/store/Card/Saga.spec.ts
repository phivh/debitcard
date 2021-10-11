import {expectSaga} from 'redux-saga-test-plan';
import * as Sagas from './Saga';
import {Actions} from './Actions';
import * as cardService from 'services';
import {throwError} from 'redux-saga-test-plan/providers';
import {call} from '@redux-saga/core/effects';
import {cardMock} from '../../server';

describe('Card - card request saga', () => {
  it('has an action handle failure', () => {
    const mgs = 'Error message';
    const expectedException = new Error(mgs);

    return expectSaga(Sagas.card)
      .provide([[call(cardService.getCard), throwError(expectedException)]])
      .put(Actions.cardFailure(mgs))
      .run();
  });

  it('has an action handle success', () => {
    return expectSaga(Sagas.card)
      .provide([[call(cardService.getCard), {data: {data: cardMock}}]])
      .put({
        type: 'CARD_SUCCESS',
        payload: {...cardMock},
      })
      .dispatch({type: 'CARD_SUCCESS', payload: cardMock})
      .run();
  });
});
