import React from 'react';
import { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}
export default class Header extends Component<Props> {
  public render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#3B3F4A" barStyle="light-content" />
        <BorderlessButton style={styles.box} onPress={() => this.onNavigateBook()}>
          <Icon size={18} name="book-open" color="#fff" />
        </BorderlessButton>
        <View style={styles.header}>
          <Text style={styles.title}>Genesis 1</Text>
        </View>
        <BorderlessButton style={styles.box} onPress={() => {}}>
          <Icon size={18} name="headphones" color="#fff" />
        </BorderlessButton>
      </View>
    );
  }
  private onNavigateBook() {
    console.log('NAVIGATE');
    this.props.navigation.navigate({ key: 'Book', routeName: 'Book' });
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#3B3F4A',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Lato-Black',
  },
  box: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
