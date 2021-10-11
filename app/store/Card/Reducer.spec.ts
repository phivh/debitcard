import * as Reducer from './Reducer';
import {ICardState} from 'types';
import {cardMock} from '../../server';

const card: ICardState = {
  card: null,
  submitting: false,
  error: null,
};

describe('Card - Reducer', () => {
  describe('Request', () => {
    it('has handle card request', () => {
      expect(Reducer.cardRequest()).toEqual({
        ...Reducer.INITIAL_STATE,
        submitting: true,
      });
    });
    it('has handle card success', () => {
      expect(Reducer.cardSuccess(card, {payload: cardMock})).toEqual({
        ...Reducer.INITIAL_STATE,
        submitting: false,
        card: cardMock,
      });
    });
    it('has handle card failure', () => {
      expect(Reducer.cardFailure(card, {error: 'error'})).toEqual({
        ...Reducer.INITIAL_STATE,
        submitting: false,
        error: 'error',
      });
    });
  });
});
