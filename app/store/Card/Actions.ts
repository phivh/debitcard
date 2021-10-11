import {createActions} from 'reduxsauce';

const instance = createActions({
  cardRequest: [],
  cardSuccess: ['payload'],
  cardFailure: ['error'],

  cardLimitRequest: ['form', 'cb'],
  cardLimitSuccess: ['payload'],
  cardLimitFailure: ['error'],
});

export const Types = instance.Types;

export const Actions = instance.Creators;
