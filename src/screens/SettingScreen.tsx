import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props {}

const SettingIcon = ({ focused }) => {
  if (focused) {
    return <Icon name="settings" size={18} color="#fff" />;
  } else {
    return <Icon name="settings" size={18} color="#ffffff66" />;
  }
};
export default class SettingScreen extends Component<Props> {
  public static navigationOptions = {
    title: 'Settings',
    tabBarIcon: SettingIcon,
  };
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SettingScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
