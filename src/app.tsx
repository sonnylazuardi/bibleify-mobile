import React from 'react';
import { Component } from 'react';
import { Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import BookScreen from 'screens/BookScreen';
import PassageScreen from 'screens/PassageScreen';
import SearchScreen from 'screens/SearchScreen';
import SettingScreen from 'screens/SettingScreen';

import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import * as models from './models';

const store = init({ models });

const PassageIcon = ({ focused }) => {
  if (focused) {
    return <Icon name="book" size={18} color="#fff" />;
  } else {
    return <Icon name="book" size={18} color="#ffffff66" />;
  }
};

const reactNavigation = require('react-navigation');
const AppNavigator = createStackNavigator(
  {
    Home: createBottomTabNavigator(
      {
        Home: {
          screen: FluidNavigator({
            Passage: PassageScreen,
            Book: BookScreen,
          }),
          navigationOptions: {
            title: 'Passage',
            tabBarIcon: PassageIcon,
          },
        },
        Search: SearchScreen,
        // Settings: SettingScreen,
      },
      {
        tabBarOptions: {
          activeTintColor: '#fff',
          labelStyle: {
            fontSize: 11,
          },
          style: {
            backgroundColor: '#3B3F4A',
            height: 60,
          },
          tabStyle: {
            padding: 5,
          },
        },
      },
    ),
  },
  {
    headerMode: 'none',
    cardStyle: { shadowColor: 'transparent', backgroundColor: '#3B3F4A' },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 250,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX }] };
      },
    }),
  },
);

const Navigator = reactNavigation.createAppContainer(AppNavigator);
interface Props {}

export default class App extends Component<Props> {
  public render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
