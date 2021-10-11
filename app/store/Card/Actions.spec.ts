import {Actions, Types} from './Actions';
import {cardMock} from '../../server';

describe('Card - Actions', () => {
  describe('Request', () => {
    it('has action card request', () => {
      const expected = {
        type: Types.CARD_REQUEST,
      };
      expect(Actions.cardRequest()).toEqual(expected);
    });
  });
  it('has action card success', () => {
    const card = cardMock;

    const expected = {
      payload: {...card},
      type: Types.CARD_SUCCESS,
    };

    expect(Actions.cardSuccess({...card})).toEqual(expected);
  });
  it('has action card failure', () => {
    const error = 'something wrong';
    const expected = {
      error,
      type: Types.CARD_FAILURE,
    };
    expect(Actions.cardFailure(error)).toEqual(expected);
  });

  describe('Limit Request', () => {
    it('has action card limit request', () => {
      const expected = {
        type: Types.CARD_LIMIT_REQUEST,
      };
      expect(Actions.cardLimitRequest()).toEqual(expected);
    });
  });
  it('has action card limit success', () => {
    const card = cardMock;

    const expected = {
      payload: {...card},
      type: Types.CARD_LIMIT_SUCCESS,
    };

    expect(Actions.cardLimitSuccess({...card})).toEqual(expected);
  });
  it('has action card limit failure', () => {
    const error = 'something wrong';
    const expected = {
      error,
      type: Types.CARD_LIMIT_FAILURE,
    };
    expect(Actions.cardLimitFailure(error)).toEqual(expected);
  });
});
