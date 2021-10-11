import {StyleSheet} from 'react-native';
import {Colors, Spacing} from 'theme';

export default StyleSheet.create({
  btn: {
    borderRadius: Spacing.default[6],
    alignSelf: 'center',
    borderWidth: 0,
  },
  txt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
