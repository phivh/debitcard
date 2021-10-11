import React from 'react';
import {H3, P, SwitchButton, View} from 'components';
import {Icon} from 'assets';
import {Platform, StyleSheet, ViewProps} from 'react-native';
import {Colors, Fonts, Spacing} from 'theme';

interface IMenuItem {
  iconName: string;
  mIcon?: boolean;
  value?: boolean;
  onPress?: (value: boolean) => void;
  info: {
    title: string;
    caption: string;
  };
}
export const MenuItem = ({
  iconName,
  info,
  value,
  mIcon,
  onPress,
  ...props
}: IMenuItem & ViewProps) => {
  return (
    <View
      {...props}
      style={Styles.container}
      row
      testID={iconName}
      align="start"
      content="between">
      <View
        style={[!!onPress && Styles.left]}
        row
        align="start"
        content="start">
        <View style={Styles.iconContainer}>
          <Icon style={Styles.icon} name={iconName} mIcon={mIcon} size={20} />
        </View>
        <View>
          <H3 style={Styles.title}>{info.title}</H3>
          <P grey small>
            {info.caption}
          </P>
        </View>
      </View>
      {!!onPress && (
        <SwitchButton style={Styles.button} value={value} onPress={onPress} />
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.default[4],
  },
  left: {
    maxWidth: Spacing.screenWidth - 120,
    flexWrap: 'nowrap',
  },
  iconContainer: {
    borderRadius: 50,
    backgroundColor: Colors.blue,
    marginRight: Spacing.unit,
  },
  icon: {
    padding: Spacing.unit,
    borderRadius: 50,
  },
  title: {
    ...Fonts.normal,
    color: Colors.black,
    marginBottom: Spacing.unit / 2,
    marginTop: Spacing.unit / 2,
  },
  button: {
    ...Platform.select({
      ios: {
        transform: [{scaleX: 0.7}, {scaleY: 0.7}],
      },
      android: {
        transform: [{scaleX: 1}, {scaleY: 1}],
      },
    }),
  },
});
