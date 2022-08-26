/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';

import theme from './src/theme';

import {NavigationContainer} from '@react-navigation/native';

import Navigator from './src/navigation';
import {store} from './src/store'

import { Provider } from 'react-redux'

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <>
            <StatusBar barStyle={'light-content'} />
            <Navigator />
          </>
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
