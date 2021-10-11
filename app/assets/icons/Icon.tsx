import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IconButtonProps} from 'react-native-vector-icons/Icon';
import {Colors} from 'theme';
import {IIcon} from 'types';

export const Icon = ({
  fill = Colors.white,
  size,
  mIcon,
  ...props
}: IIcon & Partial<IconButtonProps>) =>
  mIcon ? (
    <MaterialIcons
      size={size ? size : 30}
      name="chevron-back-outline"
      color={fill}
      {...props}
    />
  ) : (
    <Ionicons
      size={size ? size : 30}
      name="chevron-back-outline"
      color={fill}
      {...props}
    />
  );
