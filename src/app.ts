import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import BookScreen from 'screens/BookScreen';
import PassageScreen from 'screens/PassageScreen';
import SearchScreen from 'screens/SearchScreen';
import SettingScreen from 'screens/SettingScreen';

const reactNavigation = require('react-navigation');
const AppNavigator = createStackNavigator(
  {
    Home: createBottomTabNavigator(
      {
        Passage: PassageScreen,
        Search: SearchScreen,
        Settings: SettingScreen,
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
    Book: BookScreen,
  },
  {
    headerMode: 'none',
    cardStyle: { shadowColor: 'transparent', backgroundColor: '#3B3F4A' },
  },
);

export default reactNavigation.createAppContainer(AppNavigator);
