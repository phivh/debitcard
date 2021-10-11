import {createRef} from 'react';
import {
  NavigationContainerRef,
  StackActions,
  CommonActions,
  ParamListBase,
} from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef<ParamListBase>>();

export const NavigationService = {
  goBack: () => navigationRef.current?.goBack(),
  route: () => navigationRef.current?.getCurrentRoute(),
  navigate: (name: string, params?: any) =>
    navigationRef.current?.navigate(name, params),
  replace: (name: string, params?: any) =>
    navigationRef.current?.dispatch(StackActions.replace(name, params)),
  reset: (name: string, params?: any) =>
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name,
            params,
          },
        ],
      }),
    ),
  resetTo: (routes: Array<{name: string; params?: any}>, index: number = 0) =>
    navigationRef.current?.dispatch(
      CommonActions.reset({
        routes,
        index,
      }),
    ),
};
