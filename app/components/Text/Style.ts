import {StyleSheet} from 'react-native';
import {Fonts, Colors} from 'theme';
export default StyleSheet.create({
  H1: Fonts.h1,
  H2: Fonts.h2,
  H3: Fonts.h3,
  P: Fonts.normal,
  Text: Fonts.normal,
  Head: Fonts.header,
  small: Fonts.small,
  bold: {
    fontWeight: 'bold',
  },
  semiBold: {
    fontWeight: '500',
  },
  text: {
    fontWeight: '400',
  },
  center: {
    textAlign: 'center',
  },
  white: {
    color: Colors.white,
  },
  green: {
    color: Colors.green,
  },
  grey: {
    color: Colors.grey,
  },
});
