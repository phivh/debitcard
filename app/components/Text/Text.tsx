import React from 'react';
import {StyleSheet, Text as Instance, TextProps} from 'react-native';

import Styles from './Style';

export interface IText extends TextProps {
  children?: any;
  bold?: boolean;
  semiBold?: boolean;
  small?: boolean;
  white?: boolean;
  grey?: boolean;
  green?: boolean;
  center?: boolean;
}

export const Text = ({
  style,
  bold,
  semiBold,
  small,
  white,
  green,
  grey,
  center,
  ...props
}: IText) => (
  <Instance
    {...props}
    allowFontScaling={false}
    style={StyleSheet.flatten([
      Styles.text,
      bold && Styles.bold,
      semiBold && Styles.semiBold,
      small && Styles.small,
      white && Styles.white,
      green && Styles.green,
      grey && Styles.grey,
      center && Styles.center,
      style,
    ])}
  />
);

export const H1 = ({style, ...props}: IText) => (
  <Text {...props} style={StyleSheet.flatten([Styles.H1, style])} />
);

export const H2 = ({style, ...props}: IText) => (
  <Text {...props} style={StyleSheet.flatten([Styles.H2, style])} />
);

export const H3 = ({style, ...props}: IText) => (
  <Text {...props} style={StyleSheet.flatten([Styles.H3, style])} />
);

export const Head = ({style, ...props}: IText) => (
  <Text {...props} style={StyleSheet.flatten([Styles.Head, style])} />
);

export const P = ({style, ...props}: IText) => (
  <Text {...props} style={StyleSheet.flatten([Styles.P, style])} />
);
