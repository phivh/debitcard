import React from 'react';
import {View} from 'components';
import {StyleSheet} from 'react-native';
import {Colors, Spacing} from 'theme';
import Svg, {Rect} from 'react-native-svg';

export const Progress = ({
  spend = 0,
  limit = 0,
}: {
  spend?: number;
  limit?: number;
}) => {
  const x2 = Math.round((spend * Spacing.screenWidth) / limit);
  return (
    <View style={Styles.container}>
      <Svg height="20" width={'100%'}>
        <Rect skewX={-22} width={x2} height="20" fill={Colors.green} />
      </Svg>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginTop: Spacing.unit,
    backgroundColor: Colors.greenLight,
    height: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  spend: {
    backgroundColor: Colors.greenLight,
  },
});
