import {I18nManager} from 'react-native';
import * as RNLocalize from 'react-native-localize';

import i18n from 'i18n-js';

import en from './en';

i18n.defaultLocale = 'en';
i18n.fallbacks = true;
const {isRTL} = RNLocalize.getLocales()[0];
I18nManager.forceRTL(isRTL);

i18n.translations = {
  'en-US': en,
  en,
};

export default i18n;
