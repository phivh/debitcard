import React from 'react';
import {Images} from 'assets';
import {H2, Text, View} from 'components';
import {Image, StyleSheet} from 'react-native';
import {Colors, Fonts, Spacing} from 'theme';
import _get from 'lodash/get';
import _chunk from 'lodash/chunk';
import i18n from 'translations';
import {ICard} from 'types';

import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const t = (key: string) => i18n.t(`screens.debit.card.${key}`);

export const Card = (item: Partial<ICard>) => {
  return (
    <View style={Styles.card}>
      <View style={Styles.logoContainer}>
        <Image style={Styles.logo} source={Images.logo} />
      </View>
      <ShimmerPlaceHolder visible={!!item.first_name} width={100} height={20}>
        <H2 bold white>
          {item.first_name} {item.last_name}
        </H2>
      </ShimmerPlaceHolder>
      <View row>
        {item.card_number ? (
          _chunk(item.card_number, 4).map((node, index) => (
            <Text
              white
              style={[Styles.cardNumber, Styles.cardNumberHolder]}
              key={index + node.join('')}>
              {node}
            </Text>
          ))
        ) : (
          <ShimmerPlaceHolder
            visible={!!item.card_number}
            width={300}
            height={20}
            style={Styles.placeholder}
          />
        )}
      </View>
      <View row>
        <Text style={Styles.txtExp}>
          {t('exp')}: {item.exp_month}/{item.exp_year}
        </Text>
        <Text style={[Styles.txtExp, Styles.cvv]}>
          {t('cvv')}: {item.cvv}
        </Text>
      </View>
      <View row style={Styles.right}>
        <Image source={_get(Images, item.brand || 'visa')} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  card: {
    width: '100%',
    position: 'relative',
    borderRadius: Spacing.default[0],
    padding: Spacing.default[3],
    backgroundColor: Colors.green,
  },
  text: {
    fontSize: Fonts.normal,
    color: Colors.white,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  logoContainer: {
    marginBottom: Spacing.default[6],
  },
  logo: {
    alignSelf: 'flex-end',
    width: 84,
    height: 24,
  },
  right: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  cardNumberHolder: {
    marginRight: 28,
    letterSpacing: 1,
  },
  cardNumber: {
    fontSize: 18,
    marginTop: 24,
    marginBottom: 12,
    letterSpacing: 2,
    fontWeight: '600',
  },
  txtExp: {
    fontSize: 14,
    letterSpacing: 1,
    color: Colors.white,
    fontWeight: 'bold',
  },
  cvv: {
    marginLeft: 20,
  },
  save: {
    marginVertical: 20,
  },
  placeholder: {
    marginVertical: Spacing.padding,
  },
});
