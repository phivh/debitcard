import React, {useEffect} from 'react';
import {Container, Content, Currency, H2, Header, Text, View} from 'components';
import {DebitCard, Menu, Spend} from 'containers';
import {Platform, StyleSheet} from 'react-native';
import i18n from 'translations';
import {Colors, Spacing} from 'theme';
import {useCard} from 'hooks';

import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const DebitCardScreen = () => {
  const {accountBalance, loading, onGetCard} = useCard();
  useEffect(() => {
    onGetCard();
  }, [onGetCard]);
  return (
    <Container testID="debit-card-screen" loading={loading}>
      <View style={Styles.head}>
        <Header back={false} />
        <View style={Styles.title}>
          <H2 bold white>
            {i18n.t('screens.debit.title')}
          </H2>
          <View style={Styles.info}>
            <Text white style={Styles.txtBalance}>
              {i18n.t('screens.debit.caption')}
            </Text>
            <ShimmerPlaceHolder visible={!!accountBalance} width={150}>
              <Currency number={accountBalance} />
            </ShimmerPlaceHolder>
          </View>
        </View>
      </View>
      <Content padding={0} scrollble bounces={false} style={Styles.content}>
        <Content style={Styles.body}>
          <View style={Styles.card}>
            <DebitCard />
          </View>
          <Spend />
          <Menu />
        </Content>
      </Content>
    </Container>
  );
};

const Styles = StyleSheet.create({
  head: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    paddingHorizontal: Spacing.default[2],
    backgroundColor: Colors.dark,
    height: '80%',
    paddingTop: Spacing.padding,
  },
  title: {
    marginTop: Platform.select({
      ios: -30,
      android: -10,
    }),
  },
  info: {
    marginTop: Spacing.unit,
  },
  txtBalance: {
    marginVertical: Spacing.default[2],
  },
  content: {
    position: 'absolute',
    marginTop: 145,
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: Spacing.screenHeight + 50,
    zIndex: 1,
    paddingBottom: Spacing.default[10],
  },
  body: {
    backgroundColor: Colors.white,
    flexGrow: 1,
    marginTop: 100,
    borderRadius: Spacing.default[4],
  },
  card: {
    position: 'relative',
    marginTop: -100,
    zIndex: 2,
  },
});
