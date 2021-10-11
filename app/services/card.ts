import {endpoints} from 'configs';
import numeral from 'numeral';
import {client} from './fetch';

export const getCard = () => client.get(endpoints.card);
export const setCardLimit = (form: {limit: number}) =>
  client.post(endpoints.card, form);

export const formatCurrency = (n: number) => `S$${numeral(n).format('0,0')}`;
export const formatNumber = (n: number) => numeral(n).format('0,0');
export const convertString2Number = (n: string) => numeral(n);
