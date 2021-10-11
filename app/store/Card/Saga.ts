import {Action} from 'redux';
import {put, call} from 'redux-saga/effects';
import {Actions} from './Actions';
import * as services from '../../services';

export function* card() {
  try {
    const {data} = yield call(services.getCard);
    yield put(Actions.cardSuccess(data.data));
  } catch (e) {
    yield put(Actions.cardFailure(e.message));
  }
}

export function* cardLimit({
  form,
  cb,
}: Action & {
  form: {
    limit: number;
  };
  cb?: () => void;
}) {
  try {
    console.log('form:', form);
    const {data} = yield call(services.setCardLimit, form);
    yield put(Actions.cardLimitSuccess(data.data));
    if (cb) {
      cb();
    }
  } catch (e) {
    yield put(Actions.cardLimitFailure(e.message));
  }
}
