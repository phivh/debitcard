import React, {useCallback} from 'react';
import {View} from 'components';
import {MenuItem} from 'components';
import i18n from 'translations';
import _get from 'lodash/get';
import {formatCurrency} from 'services';
import {useCard, useMenu} from 'hooks';

const t = (key: string, options?: any) =>
  i18n.t(`screens.menu.${key}`, options);

export const Menu = () => {
  const {navToLimit} = useMenu();
  const {limitEnabled, onSetLimit, card} = useCard();

  const limit = _get(card, 'limit', 0);

  const onSpendingLimit = useCallback(() => {
    !limitEnabled ? navToLimit() : onSetLimit({limit: 0}, false);
  }, [limitEnabled, navToLimit, onSetLimit]);

  return (
    <View testID="menu">
      <MenuItem
        mIcon
        iconName="file-upload"
        info={{
          title: t('topup.title'),
          caption: t('topup.caption'),
        }}
      />
      <MenuItem
        testID="item-weekly-spending-limit"
        iconName="speedometer"
        info={{
          title: t('spending.title'),
          caption: t('spending.caption', {
            count: limit ? formatCurrency(limit) : 1,
          }),
        }}
        value={limitEnabled}
        onPress={onSpendingLimit}
      />
      <MenuItem
        iconName="snow"
        info={{
          title: t('freeze.title'),
          caption: t('freeze.caption'),
        }}
        value={false}
        onPress={() => {}}
      />
      <MenuItem
        iconName="card"
        info={{
          title: t('new.title'),
          caption: t('new.caption'),
        }}
      />
      <MenuItem
        iconName="stop"
        info={{
          title: t('deactivate.title'),
          caption: t('deactivate.caption'),
        }}
      />
    </View>
  );
};
