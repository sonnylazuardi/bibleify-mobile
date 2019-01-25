import Header from 'components/Header';
import React from 'react';
import { Component } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationScreenProp } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';
import { connect } from 'react-redux';

interface Props {
  navigation: NavigationScreenProp<any, any>;
  bible: any;
}
const PassageIcon = ({ focused }) => {
  if (focused) {
    return <Icon name="book" size={18} color="#fff" />;
  } else {
    return <Icon name="book" size={18} color="#ffffff66" />;
  }
};

class PassageScreen extends Component<Props> {
  public static navigationOptions = {
    title: 'Passage',
    tabBarIcon: PassageIcon,
  };
  public componentDidMount() {
    this.props.dispatch.bible.loadVersion();
    setTimeout(() => {
      this.props.dispatch.bible.fetchVerses(this.props.bible);
    }, 800);
  }
  public componentDidUpdate(prevProps: Props) {
    const { activeChapter, activeBook, activeVersion } = this.props.bible;
    if (
      activeBook != prevProps.bible.activeBook ||
      activeChapter != prevProps.bible.activeChapter ||
      activeVersion != prevProps.bible.activeVersion
    ) {
      this.props.dispatch.bible.fetchVerses(this.props.bible);
    }
  }
  public render() {
    const { navigation, bible } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Header navigation={navigation} />
          <ScrollView style={styles.scroll}>
            <Transition shared="book" appear="flip">
              <ImageBackground source={require('assets/genesis.jpg')} style={styles.book} imageStyle={styles.bookImg}>
                <Text style={styles.bookText}>Genesis</Text>
              </ImageBackground>
            </Transition>
            <View style={styles.content}>
              {bible.verses.map((verse, i) => {
                if (verse.type === 't') {
                  return (
                    <View style={styles.item} key={i}>
                      <Text style={styles.itemTitle}>{verse.content}</Text>
                    </View>
                  );
                } else {
                  return (
                    <View key={i} style={styles.item}>
                      <View style={styles.itemText}>
                        <Text style={styles.itemVerse}>{verse.verse} </Text>
                        <Text style={styles.itemContent}>{verse.content}</Text>
                      </View>
                    </View>
                  );
                }
              })}
            </View>
          </ScrollView>
          <View style={styles.actionsWrap} pointerEvents={'box-none'}>
            <RectButton style={styles.actionBtn} onPress={() => this.onPrevious()}>
              <Icon size={18} name="arrow-left" color="#fff" />
            </RectButton>

            <RectButton style={styles.actionBtn} onPress={() => this.onNext()}>
              <Icon size={18} name="arrow-right" color="#fff" />
            </RectButton>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  private onPrevious() {
    this.props.dispatch.bible.prevChapter();
  }
  private onNext() {
    this.props.dispatch.bible.nextChapter();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C32',
  },
  scroll: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  content: {
    paddingRight: 16,
  },
  actionBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3B3F4A77',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  itemText: {
    flexDirection: 'row',
  },
  bookText: {
    color: '#fff',
    fontFamily: 'Lato-Black',
    fontSize: 18,
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  book: {
    backgroundColor: '#ddd',
    height: 200,
    flex: 1,
  },
  bookImg: {},
  itemTitle: {
    marginTop: 32,
    marginBottom: 16,
    fontSize: 26,
    color: '#fff',
    fontFamily: 'Lato-Black',
  },
  itemContent: {
    fontSize: 13,
    color: '#fff',
    lineHeight: 24,
    fontFamily: 'Lato-Regular',
  },
  itemVerse: {
    color: '#ffffff66',
    fontFamily: 'Lato-Black',
  },
  actionsWrap: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default connect(
  state => ({
    bible: state.bible,
  }),
  dispatch => ({ dispatch }),
)(PassageScreen);
