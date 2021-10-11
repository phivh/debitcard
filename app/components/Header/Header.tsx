import React, {useMemo} from 'react';
import {Image, Platform, StyleSheet, TextStyle} from 'react-native';
import {View as Instance} from 'components';
import {Colors, Spacing} from 'theme';
import {Images} from 'assets';
import {BackButton} from 'components';

export interface IHeader {
  children?: any;
  purple?: boolean;
  border?: boolean;
  transparent?: boolean;
  back?: boolean;
  titleStyle?: TextStyle;
}

export const Header = ({
  border,
  transparent = true,
  back = true,
  ...props
}: IHeader) => {
  const containerStyle = useMemo(
    () =>
      StyleSheet.flatten([
        Styles.container,
        !border && {borderBottomWidth: 0},
        transparent && Styles.transparent,
      ]),
    [transparent, border],
  );

  return (
    <Instance
      row
      align="center"
      content={!back ? 'end' : 'between'}
      style={containerStyle}
      {...props}>
      {back && <BackButton style={Styles.back} />}
      <Image source={Images.icon} style={Styles.icon} />
    </Instance>
  );
};

const Styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        height: 90,
      },
    }),
    paddingTop: Platform.select({
      ios: 40,
      android: 0,
    }),
    paddingBottom: Spacing.padding,
  },
  icon: {
    width: 24,
    height: 24,
  },
  transparent: {
    backgroundColor: Colors.transparent,
  },
  back: {
    marginLeft: -10,
  },
});
