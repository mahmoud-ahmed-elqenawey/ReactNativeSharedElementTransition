/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Empty</Text>
    </SafeAreaView>
  );
};

export default App;
