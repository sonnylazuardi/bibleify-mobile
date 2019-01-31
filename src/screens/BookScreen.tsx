import Books from 'constants/Books';
import React from 'react';
import { Component } from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { BoxShadow } from 'react-native-shadow';
import { NavigationScreenProp } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';
import { connect } from 'react-redux';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  searchText: string;
}

const SHADOW_OPTION = {
  height: 100,
  width: 280,
  color: '#000000',
  border: 30,
  radius: 20,
  opacity: 0.4,
  x: 0,
  y: 15,
  style: {},
};

class BookScreen extends Component<Props, State> {
  public state: State = {
    searchText: '',
  };
  public render() {
    const { searchText } = this.state;
    const data = Books.filter(book => {
      const { searchText } = this.state;
      if (searchText === '') {
        return true;
      }
      return book.name_id.toLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1;
    }).map(book => ({ ...book, key: book.value }));
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#282C32" barStyle="light-content" />

        <View style={styles.header}>
          <Text style={styles.title}>Bibleify</Text>
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder={'Search...'}
            placeholderTextColor={'#999'}
            value={searchText}
            onChangeText={searchText => this.setState({ searchText })}
          />
        </View>

        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            const book = item;
            return (
              <View style={styles.itemWrap} key={index}>
                <RectButton
                  onPress={() => {
                    this.props.dispatch.bible.setActiveBook(book);
                    this.props.navigation.push('Passage');
                  }}
                  style={styles.itemImg}
                >
                  <Transition shared={`book-${book.value}`}>
                    <ImageBackground source={book.image} style={styles.item}>
                      <Text style={styles.itemText}>{book.name_id}</Text>
                    </ImageBackground>
                  </Transition>
                </RectButton>
              </View>
            );
          }}
        />

        {/* {Books.filter(book => {
            const { searchText } = this.state;
            if (searchText === '') {
              return true;
            }
            return book.name_id.toLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1;
          }).map((book, i) => {
            return (
              <View style={styles.itemWrap} key={i}>
                <View style={styles.shadowWrap}>
                  <BoxShadow setting={SHADOW_OPTION} />
                </View>
                <RectButton
                  onPress={() => {
                    this.props.dispatch.bible.setActiveBook(book);
                    setTimeout(() => {
                      this.props.navigation.goBack();
                    }, 100);
                  }}
                >
                  <Transition shared={`book-${book.value}`}>
                    <ImageBackground source={book.image} style={styles.item} imageStyle={styles.itemImg}>
                      <Text style={styles.itemText}>{book.name_id}</Text>
                    </ImageBackground>
                  </Transition>
                </RectButton>
              </View>
            );
          })} */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C32',
    // backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  itemWrap: {
    marginBottom: 4,
  },
  shadowWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    height: 100,
    flex: 1,
    borderRadius: 12,
    elevation: 10,
    marginHorizontal: 32,
    marginTop: 8,
    marginBottom: 16,
    // backgroundColor: '#ffffff22',
  },
  itemImg: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  itemText: {
    color: '#fff',
    fontFamily: 'Lato-Black',
    fontSize: 18,
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  header: {
    paddingHorizontal: 32,
    paddingTop: 32,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Lato-Black',
    color: '#fff',
  },
  search: {
    paddingHorizontal: 32,
    marginBottom: 20,
    marginTop: 8,
  },
  input: {
    height: 38,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 10,
    fontFamily: 'Lato-Regular',
    color: '#fff',
    lineHeight: 20,
  },
  itemTitle: {
    marginTop: 32,
    marginBottom: 16,
    fontSize: 14,
    color: '#fff',
    fontWeight: '700',
  },
  itemContent: {
    fontSize: 13,
    color: '#fff',
    lineHeight: 24,
  },
  itemVerse: {
    color: '#ffffff66',
    fontWeight: '700',
  },
});

export default connect(
  state => ({ state: state.bible }),
  dispatch => ({ dispatch }),
)(BookScreen);
