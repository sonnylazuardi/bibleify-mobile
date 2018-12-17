import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props {}

const SearchIcon = ({ focused }) => {
  if (focused) {
    return <Icon name="search" size={18} color="#fff" />;
  } else {
    return <Icon name="search" size={18} color="#ffffff66" />;
  }
};
export default class SearchScreen extends Component<Props> {
  public static navigationOptions = {
    title: 'Search',
    tabBarIcon: SearchIcon,
  };
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SearchScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C32',
  },
  welcome: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    margin: 10,
  },
});
