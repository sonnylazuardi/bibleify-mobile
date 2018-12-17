import { createBottomTabNavigator } from 'react-navigation';
import PassageScreen from 'screens/PassageScreen';
import SearchScreen from 'screens/SearchScreen';
import SettingScreen from 'screens/SettingScreen';

const reactNavigation = require('react-navigation');
const AppNavigator = createBottomTabNavigator(
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
);

export default reactNavigation.createAppContainer(AppNavigator);
