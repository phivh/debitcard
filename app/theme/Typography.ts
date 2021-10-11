import {StyleSheet} from 'react-native';

const sizePattern = {
  h1: 36,
  h2: 24,
  h3: 18,
  header: 24,
  medium: 16,
  base: 14,
  small: 12,
};

export const fontFamilies = {
  AvenirNextBold: 'AvenirNextLTPro-Bold',
  AvenirNextMedium: 'AvenirNextLTPro-Medium',
  AvenirNextRegular: 'AvenirNextLTPro-Regular',
};

export const Fonts = StyleSheet.create({
  h1: {
    fontSize: sizePattern.h1,
  },
  h2: {
    fontSize: sizePattern.h2,
    fontFamily: fontFamilies.AvenirNextBold,
  },
  h3: {
    fontSize: sizePattern.h3,
    fontFamily: fontFamilies.AvenirNextRegular,
  },
  header: {
    fontFamily: fontFamilies.AvenirNextBold,
  },
  normal: {
    fontWeight: 'normal',
    fontSize: sizePattern.base,
  },
  small: {
    fontWeight: 'normal',
    fontSize: sizePattern.small,
  },
  medium: {
    fontWeight: 'normal',
    fontSize: sizePattern.medium,
  },
});
