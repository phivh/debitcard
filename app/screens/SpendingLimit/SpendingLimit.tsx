import React, {useCallback, useMemo, useState} from 'react';
import {
  Container,
  Content,
  Currency,
  H2,
  Header,
  Button,
  Text,
  View,
} from 'components';
import {StyleSheet, TouchableOpacity} from 'react-native';
import i18n from 'translations';
import {Colors, Fonts, Spacing} from 'theme';
import {Icon} from 'assets';
import {TextInput} from 'react-native-gesture-handler';
import {convertString2Number, formatCurrency, formatNumber} from 'services';
import {useCard} from 'hooks';

const t = (key: string) => i18n.t(`screens.limit.${key}`);

export const SpendingLimitScreen = () => {
  const {onSetLimit, loading} = useCard();
  const [value, setValue] = useState<number>();
  const onChange = useCallback((v: any) => {
    const number = typeof v === 'object' ? v._value : v;
    setValue(number);
  }, []);
  const limit = useMemo(() => (value ? formatNumber(value) : ''), [value]);
  return (
    <Container testID="spending-limit-screen" loading={loading}>
      <View style={Styles.head}>
        <Header />
        <H2 bold white style={Styles.title}>
          {i18n.t('screens.limit.title')}
        </H2>
      </View>
      <Content bounces={false} style={Styles.content}>
        <View row align="center">
          <Icon name="speedometer-outline" size={20} fill={Colors.black} />
          <Text style={Styles.caption}>{t('caption')}</Text>
        </View>
        <View row style={Styles.field} align="center">
          <Currency />
          <TextInput
            testID="spend-limit-number"
            defaultValue=""
            value={limit}
            keyboardType="decimal-pad"
            onChangeText={(v: string) => onChange(convertString2Number(v))}
            style={Styles.input}
          />
        </View>
        <Text small grey>
          {t('notify')}
        </Text>
        <View style={Styles.pillContainer} row content="between">
          <TouchableOpacity onPress={() => onChange(5000)} style={Styles.pill}>
            <Text center green>
              {formatCurrency(5000)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChange(10000)} style={Styles.pill}>
            <Text center green>
              {formatCurrency(10000)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChange(20000)} style={Styles.pill}>
            <Text center green>
              {formatCurrency(20000)}
            </Text>
          </TouchableOpacity>
        </View>
      </Content>
      <View style={Styles.footer}>
        <Button
          disabled={!value}
          onPress={() => !!value && onSetLimit({limit: value})}
          testID="btn-save"
          title={i18n.t('actions.save')}
          shadow
          style={[Styles.btn, !value && {opacity: 0.5}]}
          titleStyle={Styles.btnText}
        />
      </View>
    </Container>
  );
};

const Styles = StyleSheet.create({
  head: {
    paddingHorizontal: Spacing.default[4],
  },
  title: {
    marginTop: Spacing.unit,
  },
  info: {
    marginTop: Spacing.unit,
  },
  content: {
    backgroundColor: Colors.white,
    flex: 1,
    flexGrow: 1,
    marginTop: Spacing.default[4] * 2,
    height: Spacing.screenHeight,
    borderTopLeftRadius: Spacing.default[4],
    borderTopRightRadius: Spacing.default[4],
    paddingTop: Spacing.default[5],
    paddingHorizontal: Spacing.default[5],
  },
  caption: {
    marginLeft: Spacing.unit,
    letterSpacing: 0.5,
    ...Fonts.medium,
  },
  field: {
    marginTop: Spacing.unit,
    paddingVertical: Spacing.unit,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.grey,
    marginBottom: Spacing.default[0],
  },
  input: {
    ...Fonts.h2,
    fontWeight: 'bold',
    maxWidth: '80%',
    width: '80%',
  },
  pillContainer: {
    marginTop: Spacing.default[6],
  },
  pill: {
    width: '30%',
    backgroundColor: Colors.greenLight,
    paddingVertical: Spacing.default[1],
    borderRadius: 5,
  },
  footer: {
    backgroundColor: Colors.white,
    paddingBottom: Spacing.default[8],
  },
  btn: {
    backgroundColor: Colors.green,
    width: 300,
    padding: Spacing.padding,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
  },
});
