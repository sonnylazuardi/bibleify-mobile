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
  Dimensions,
} from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { BoxShadow } from 'react-native-shadow';
import { NavigationScreenProp } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  searchText: string;
  activeBook: any | null;
  activeChapter: number;
}

class BookScreen extends Component<Props, State> {
  public state: State = {
    searchText: '',
    activeBook: null,
    activeChapter: 1,
  };
  public renderChapterPicker() {
    if (!this.state.activeBook) {
      return null;
    }
    const chapters = [];
    for (let i = 0; i < this.state.activeBook.total; i++) {
      chapters.push(i);
    }
    return (
      <View style={styles.modal}>
        <View style={styles.cardWrap}>
          <Text style={styles.cardTitle}>{this.state.activeBook.name_id}</Text>
          <View style={styles.card}>
            <ScrollView style={styles.scroll}>
              <View style={styles.content}>
                {chapters.map((chapter, i) => {
                  const currentChapter = i + 1;
                  const isActive = currentChapter === this.state.activeChapter;
                  return (
                    <BorderlessButton
                      style={[styles.verseBox, isActive ? styles.verseActive : null]}
                      key={i}
                      onPress={() => {
                        this.setState({ activeChapter: currentChapter });
                      }}
                    >
                      <Text style={[styles.verseBoxText, isActive ? styles.verseActiveText : null]}>
                        {currentChapter}
                      </Text>
                    </BorderlessButton>
                  );
                })}
              </View>
            </ScrollView>

            <View style={styles.actions}>
              <RectButton style={styles.okBtn} onPress={() => this.setState({ activeBook: null })}>
                <Icon size={18} name="x-circle" color="#282C32" />
                <Text style={styles.okBtnText}>Cancel</Text>
              </RectButton>
              <RectButton
                style={[styles.okBtn, styles.defaultBtn]}
                onPress={() => {
                  this.props.dispatch.bible.setActiveBook(this.state.activeBook);
                  this.props.dispatch.bible.setActiveChapter(this.state.activeChapter);
                  this.setState({ activeBook: null });
                  this.props.navigation.push('Passage');
                }}
              >
                <Icon size={18} name="check-circle" color="#fff" />
                <Text style={[styles.okBtnText, styles.defaultBtnText]}>OK</Text>
              </RectButton>
            </View>
          </View>
        </View>
      </View>
    );
  }
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
                    this.setState({ activeBook: book });
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

        {this.renderChapterPicker()}
      </SafeAreaView>
    );
  }
}

const shadowStyle = {
  elevation: 2,
  shadowColor: '#333',
  shadowOpacity: 0.5,
  shadowRadius: 5,
  shadowOffset: {
    width: 0,
    height: 5,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C32',
    // backgroundColor: '#fff',
  },
  cardWrap: {
    height: 380,
    flex: 1,
  },
  actions: {
    height: 48,
    flexDirection: 'row',
    marginTop: 16,
  },
  okBtnText: {
    color: '#282C32',
    fontFamily: 'Lato-Black',
    marginLeft: 10,
  },
  okBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  cardTitle: {
    color: '#fff',
    fontFamily: 'Lato-Black',
    marginHorizontal: 16,
    marginBottom: 16,
    fontSize: 20,
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
  modal: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  card: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  content: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  verseBox: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verseBoxText: {
    fontFamily: 'Lato-Black',
    fontSize: 16,
  },
  defaultBtn: {
    backgroundColor: '#282C32',
  },
  defaultBtnText: {
    color: '#fff',
  },
  verseActive: {
    backgroundColor: '#282C32',
    borderRadius: 24,
  },
  verseActiveText: {
    color: '#fff',
  },
});

export default connect(
  state => ({ state: state.bible }),
  dispatch => ({ dispatch }),
)(BookScreen);
