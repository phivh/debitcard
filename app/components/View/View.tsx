import React from 'react';
import {View as Instance, ViewProps, StyleSheet, ViewStyle} from 'react-native';

const contents: any = {
  end: 'flex-end',
  start: 'flex-start',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
};

interface IView extends ViewProps {
  row?: boolean;
  full?: boolean;
  children?: any;
  align?: 'start' | 'center' | 'end';
  content?: 'start' | 'center' | 'end' | 'between' | 'around';
}

export const View = ({style, row, full, align, content, ...props}: IView) => {
  const defaultStyle: ViewStyle = StyleSheet.flatten([
    {
      alignItems: contents[align as any],
      justifyContent: contents[content as any],
    },
    full && {flex: 1, flexGrow: 1},
    row && {flexDirection: 'row', flexWrap: 'wrap'},
    style,
  ]);

  return <Instance {...props} style={defaultStyle} />;
};
