import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Button, Card} from 'components';
import {Icon} from 'assets';
import {Colors, Spacing} from 'theme';
import i18n from 'translations';
import _replace from 'lodash/replace';
import {useCard} from 'hooks';

const t = (key: string) => i18n.t(`screens.debit.${key}`);

const getMask = (length: number) =>
  _replace(Array.from({length}, (_) => '*').toString(), /([,])+/g, '');

export const DebitCard = () => {
  const {card} = useCard();
  const [hide, setHide] = useState(false);
  const cardInfo = useMemo(
    () =>
      card && {
        ...card,
        card_number: !hide
          ? card.card_number
          : [
              getMask(card.card_number.length - 4),
              card.card_number.slice(card.card_number.length - 4),
            ].join(''),
        cvv: !hide ? card.cvv : getMask(card.cvv.toString().length),
      },
    [card, hide],
  );

  const onHideCardNumber = useCallback(() => setHide((h) => !h), []);
  return (
    <View testID="debit-card">
      <View style={Styles.hidecard} row>
        <Button
          onPress={onHideCardNumber}
          title={t('hide.label')}
          titleStyle={Styles.buttonTitle}
          style={Styles.button}
          icon={
            <Icon
              name={hide ? 'eye' : 'eye-off'}
              color={Colors.green}
              size={20}
            />
          }
        />
      </View>
      <View style={Styles.card}>
        <Card {...cardInfo} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  hidecard: {
    justifyContent: 'flex-end',
  },
  card: {
    marginTop: -30,
  },
  button: {
    backgroundColor: Colors.white,
    color: Colors.green,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 36,
    borderRadius: 6,
    paddingTop: 6,
    paddingHorizontal: Spacing.default[0],
  },
  buttonTitle: {
    backgroundColor: Colors.white,
    color: Colors.green,
    marginLeft: 5,
  },
});
