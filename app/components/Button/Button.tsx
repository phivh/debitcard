import React, {ReactNode, useCallback, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableOpacity as Instance,
  StyleProp,
  TextStyle,
  Switch,
  SwitchProps,
} from 'react-native';
import Styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButtonProps from 'react-native-vector-icons/Ionicons';
import {IIcon} from 'types';
import {Colors} from 'theme';
import {Text} from 'components';

const Back = ({
  fill = Colors.white,
  ...props
}: IIcon & Partial<IconButtonProps>) => (
  <Ionicons size={30} name="chevron-back-outline" color={fill} {...props} />
);
const Close = ({
  fill = Colors.white,
  ...props
}: IIcon & Partial<IconButtonProps>) => (
  <Ionicons size={30} name="close-outline" color={fill} {...props} />
);

interface IButtonProps extends TouchableOpacityProps {
  shadow?: boolean;
  underline?: boolean;
  vertical?: number;
  horizontal?: number;
  full?: boolean;
  style?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title: string;
  icon?: ReactNode;
}

const resetToContainer = () => ({
  margin: 0,
  elevation: 0,
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
  marginBottom: 0,
  marginVertical: 0,
});

export const Button = ({
  shadow,
  vertical,
  horizontal,
  underline,
  style,
  titleStyle,
  title,
  icon,
  ...props
}: IButtonProps) => {
  const _buttonStyle = StyleSheet.flatten([
    Styles.btn,
    style,
    shadow && Styles.shadow,
    !!horizontal && {marginHorizontal: horizontal},
    !!vertical && {marginVertical: vertical},
  ]);

  const isAndroid = useMemo(() => Platform.OS === 'android', []);

  const _titleStyle = StyleSheet.flatten([
    Styles.txt,
    underline && Styles.underline,
    titleStyle,
  ]);

  return (
    <Instance
      {...props}
      style={[_buttonStyle, isAndroid && resetToContainer()]}>
      {icon}
      <Text style={_titleStyle}>{title}</Text>
    </Instance>
  );
};

export const BackButton = ({
  style,
  icon,
  iconProps,
  onPress,
  ...props
}: TouchableOpacityProps & {
  icon?: string | ReactNode;
  iconProps?: IIcon & Partial<IconButtonProps>;
}) => {
  const navigation = useNavigation();
  const onIconPress = useCallback(() => navigation.goBack(), [navigation]);

  const defaultStyle = StyleSheet.flatten([
    {
      minWidth: 46,
      minHeight: 46,
      alignItems: 'center',
      justifyContent: 'center',
    },
    style,
  ]);

  const Icon = useMemo(
    () =>
      !icon ? (
        <Back {...iconProps} />
      ) : icon === 'close' ? (
        <Close {...iconProps} />
      ) : (
        icon
      ),
    [icon, iconProps],
  );

  return (
    <TouchableOpacity
      {...props}
      style={defaultStyle as any}
      onPress={onPress || onIconPress}>
      {Icon}
    </TouchableOpacity>
  );
};

export const SwitchButton = ({
  value = false,
  onPress,
  ...props
}: {onPress: (enable: boolean) => void} & SwitchProps) => {
  return (
    <Switch
      {...props}
      trackColor={{false: Colors.inactive, true: Colors.actice}}
      thumbColor={Colors.white}
      onValueChange={onPress}
      value={value}
    />
  );
};
