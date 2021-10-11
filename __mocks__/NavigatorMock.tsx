import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { cardMock } from '../app/server';

const Stack = createBottomTabNavigator();

export const mockStore = configureMockStore();

const store = mockStore({
  card: {
    card: cardMock,
    error: null,
    submitting: false,
  },
});

export const NavigatorMock = ({ components, store: initStore }: any) => (
  <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 1, right: 1, bottom: 1 }}>
    <Provider store={initStore || store}>
      <StatusBar barStyle="light-content"/>
      <NavigationContainer initialState={undefined}>
        <Stack.Navigator>
          {components.map((item: any) => (
            <Stack.Screen
              key={item}
              name={item.name}
              component={item.screen}
              initialParams={item.params}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </SafeAreaProvider>
);

export default NavigatorMock;
