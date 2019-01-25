import React from 'react';
import { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}
class Header extends Component<Props> {
  public render() {
    const { bible } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#3B3F4A" barStyle="light-content" />
        <BorderlessButton style={styles.box} onPress={() => this.onNavigateBook()}>
          <Icon size={18} name="book-open" color="#fff" />
        </BorderlessButton>
        <RectButton style={styles.header} onPress={() => this.onNavigateBook()}>
          <Text style={styles.title}>
            {bible.activeBook.name_id} {bible.activeChapter}
          </Text>
        </RectButton>
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

export default connect(
  state => ({ bible: state.bible }),
  dispatch => ({ dispatch }),
)(Header);
