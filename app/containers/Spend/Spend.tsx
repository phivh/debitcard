import React from 'react';
import {Progress, Text, View} from 'components';
import i18n from 'translations';
import {formatCurrency} from 'services';
import {StyleSheet} from 'react-native';
import {Colors} from 'theme';
import {useCard} from 'hooks';

export const Spend = () => {
  const {limitEnabled, card} = useCard();
  if (!limitEnabled) {
    return null;
  }
  return (
    <View style={Styles.container}>
      <View row content="between" align="center">
        <Text>{i18n.t('screens.limit.spendingTitle')}</Text>
        <View row>
          <Text style={Styles.spend}>
            {card?.spending && formatCurrency(card?.spending)}
          </Text>
          <Text grey>{' | '}</Text>
          <Text grey style={Styles.limit}>
            {card?.limit && formatCurrency(card?.limit)}
          </Text>
        </View>
      </View>
      <Progress spend={card?.spending} limit={card?.limit} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 12,
  },
  spend: {
    marginRight: 5,
    color: Colors.actice,
  },
  limit: {
    paddingLeft: 5,
  },
});
