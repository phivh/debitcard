import React, {useMemo} from 'react';
import {Platform, StyleSheet, View, ViewProps} from 'react-native';
import {Colors} from 'theme';
import {Loading} from 'components';

export interface IContainerProps extends ViewProps {
  background?: string;
  children?: any;
  testID?: string;
  white?: boolean;
  loading?: boolean;
  opacity?: number;
}

export const Container = ({
  style,
  children,
  background = Colors.dark,
  testID,
  white,
  loading,
  opacity,
  ...props
}: IContainerProps) => {
  const defaultStyle = useMemo(
    () => ({
      backgroundColor: white ? Colors.white : background,
    }),
    [white, background],
  );

  const extraProps = useMemo(() => {
    const extras: any = {testID};
    if (testID && Platform.OS === 'android') {
      extras.accessibilityLabel = testID;
    }

    return extras;
  }, [testID]);

  return (
    <View
      {...props}
      {...extraProps}
      style={StyleSheet.flatten([styles.container, defaultStyle, style])}>
      {children}
      {loading && <Loading opacity={opacity} loading />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.dark,
  },
});
