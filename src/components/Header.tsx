import React from 'react';
import { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
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
        <BaseButton style={styles.box} onPress={() => this.onNavigateBook()}>
          <Icon size={18} name="book-open" color="#fff" />
        </BaseButton>
        <View style={styles.header}>
          <Text style={styles.title}>Genesis 1</Text>
        </View>
        <BaseButton style={styles.box} onPress={() => {}}>
          <Icon size={18} name="headphones" color="#fff" />
        </BaseButton>
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
    fontWeight: '700',
    fontSize: 14,
    color: '#fff',
  },
  box: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
