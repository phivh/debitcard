import React from 'react';
import numeral from 'numeral';
import {View, Text} from 'components';
import {StyleSheet} from 'react-native';
import {Colors, Fonts, Spacing} from 'theme';

const formatCurrency = (n: number) => numeral(n).format('0,0');

export const Currency = ({
  symbol = 'S$',
  number,
}: {
  symbol?: string;
  number?: number;
}) => (
  <View testID="available-balance" row content="start" align="center">
    <View style={Styles.symbol}>
      <Text white bold>
        {symbol}
      </Text>
    </View>
    {!!number && (
      <Text white bold style={Styles.number}>
        {formatCurrency(number)}
      </Text>
    )}
  </View>
);

const Styles = StyleSheet.create({
  symbol: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: Colors.green,
    borderRadius: 4,
    marginRight: Spacing.unit,
  },
  number: {
    ...Fonts.h2,
  },
});
