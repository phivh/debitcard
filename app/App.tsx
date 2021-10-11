import React from 'react';
import {Navigator} from 'navigation';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from 'store';
import {Colors} from 'theme';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {server} from './server';

const {store} = configureStore();

server();
Icon.loadFont();
MaterialIcons.loadFont();

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor={Colors.dark} />
    <Navigator />
  </Provider>
);

export default App;
