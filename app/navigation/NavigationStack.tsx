import React from 'react';
import {Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import * as Screens from 'screens';

import Routes from './Routes';
import {navigationRef} from './NavigationService';
import {Colors} from 'theme';
import {Text} from 'components';
import {Icon} from 'assets';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DebitStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={Routes.Debit}>
    <Stack.Screen name={Routes.DebitCard} component={Screens.DebitCardScreen} />
    <Stack.Screen
      name={Routes.SpendingLimit}
      component={Screens.SpendingLimitScreen}
    />
  </Stack.Navigator>
);

const DisabledTabBarButton = ({style, ...props}: BottomTabBarButtonProps) => (
  <Pressable disabled style={[{opacity: 1}, style]} {...props} />
);
export const Navigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Tab.Navigator initialRouteName={Routes.Debit}>
      <Tab.Screen
        name={Routes.Home}
        options={{
          tabBarButton: DisabledTabBarButton,
          tabBarIcon: () => (
            <Icon name="ios-home-outline" size={32} color={Colors.inactive} />
          ),
          tabBarLabel: () => (
            <Text small grey>
              {Routes.Home}
            </Text>
          ),
        }}
        component={Screens.Dummy}
      />
      <Tab.Screen
        name={Routes.Debit}
        component={DebitStack}
        options={() => {
          const currentRoute = navigationRef.current?.getCurrentRoute();
          return {
            tabBarIcon: () => (
              <Icon name="card" size={32} color={Colors.actice} />
            ),
            tabBarLabel: () => (
              <Text small green>
                {Routes.Debit}
              </Text>
            ),
            tabBarVisible: currentRoute?.name !== Routes.SpendingLimit,
          };
        }}
      />
      <Tab.Screen
        name={Routes.Payments}
        options={{
          tabBarButton: DisabledTabBarButton,
          tabBarIcon: () => (
            <Icon name="payment" mIcon size={32} color={Colors.inactive} />
          ),
          tabBarLabel: () => (
            <Text small grey>
              {Routes.Payments}
            </Text>
          ),
        }}
        component={Screens.Dummy}
      />
      <Tab.Screen
        name={Routes.Profile}
        options={{
          tabBarButton: DisabledTabBarButton,
          tabBarIcon: () => (
            <Icon name="person" mIcon size={32} color={Colors.inactive} />
          ),
          tabBarLabel: () => (
            <Text small grey>
              {Routes.Profile}
            </Text>
          ),
        }}
        component={Screens.Dummy}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
