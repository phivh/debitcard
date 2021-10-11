import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';
import {View} from 'components';
// import { Logo } from 'assets';

import Styles from './Style';
import {Colors} from 'theme';

export const Loading = ({
  opacity = 0.2,
  ...props
}: {
  loading: boolean;
  opacity?: number;
}) => (
  <Modal visible={props.loading} transparent>
    <View style={[Styles.modal, {opacity}]}>
      <ActivityIndicator size="large" color={Colors.white} />
    </View>
  </Modal>
);
