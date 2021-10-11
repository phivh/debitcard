import React, {useMemo, useState} from 'react';
import {
  StyleSheet,
  View as Instace,
  ScrollView,
  ViewProps,
  LayoutChangeEvent,
} from 'react-native';
import {Colors, Spacing} from 'theme';

export interface ContentProps extends ViewProps {
  children?: any;
  full?: boolean;
  width?: number;
  height?: number;
  header?: number;
  padding?: number;
  scrollble?: boolean;
  bounces?: boolean;
  backgroundColor?: string;
  align?: 'start' | 'center' | 'end';
  content?: 'start' | 'center' | 'end';
}

const contents: any = {
  end: 'flex-end',
  start: 'flex-start',
  center: 'center',
};

export const Content = ({
  style,
  height,
  width,
  padding = Spacing.padding,
  scrollble,
  bounces,
  header,
  content,
  align,
  full,
  backgroundColor = Colors.transparent,
  ...props
}: ContentProps) => {
  const [minHeight, setInset] = useState(0);

  const paddingTop = useMemo(
    () => header || padding || Spacing.padding,
    [header, padding],
  );

  const defaultStyle = useMemo(
    () =>
      StyleSheet.flatten([
        {
          width,
          height,
          minHeight,
          flex: 1,
          padding,
          paddingTop,
          backgroundColor,
          alignItems: contents[align as any],
          justifyContent: contents[content as any],
        },
        style,
      ]),
    [
      width,
      style,
      height,
      padding,
      paddingTop,
      align,
      content,
      minHeight,
      backgroundColor,
    ],
  );

  const extras: any = {};

  if (full) {
    extras.onLayout = (e: LayoutChangeEvent) =>
      setInset(e.nativeEvent.layout.height);
  }

  if (scrollble) {
    return (
      <ScrollView
        {...props}
        {...extras}
        contentContainerStyle={[defaultStyle, {flex: 0}]}
        bounces={bounces}
      />
    );
  }

  return <Instace {...props} {...extras} style={defaultStyle} />;
};
