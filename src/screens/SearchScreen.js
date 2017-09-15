//@flow
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  TextInput,
  StatusBar
} from "react-native";
const Realm = require("realm");
import DrawerLayout from "react-native-drawer-layout";
import LinearGradient from "react-native-linear-gradient";
import Books from "../constants/Books";
import Icon from "react-native-vector-icons/Ionicons";
import Highlighter from "react-native-highlight-words";

const PassageSchema = {
  name: "Passage",
  primaryKey: "id",
  properties: {
    id: "string",
    content: "string",
    book: "string",
    chapter: "int",
    verse: "int",
    type: "string"
  }
};

class SearchScreen extends Component {
  _textInputSearch;
  state = {
    results: []
  };
  componentDidMount() {
    setTimeout(() => {
      this._textInputSearch.focus();
      if (this.props.searchText != "") this.searchPassage();
    }, 100);
  }
  searchPassage() {
    const { searchText } = this.props;
    if (searchText == "") return;
    Realm.open({ schema: [PassageSchema], readOnly: true }).then(realm => {
      let passages = realm.objects("Passage");
      if (searchText.indexOf(" ") != -1) {
        let splitWords = searchText.replace("  ", " ").split(" ");
        splitWords = splitWords
          .map(word => (word != "" ? `content CONTAINS[c] "${word}"` : ""))
          .filter(word => word);
        // query = `${query} ${splitWords}`;
        var query = `${splitWords.join(" OR ")} AND type != "t"`;
      } else {
        var query = `content CONTAINS[c] "${searchText}" AND type != "t"`;
      }
      let filteredPassages = passages.filtered(query).slice(0, 20);
      const resultsRaw = Object.keys(filteredPassages);
      const results = resultsRaw.map(key => filteredPassages[key]);
      console.log(resultsRaw);
      this.setState({
        results: results
      });
    });
  }
  _onHideSearch() {
    this.props.onHideSearch && this.props.onHideSearch();
  }
  _onChangeSearchText(searchText) {
    this.props.onChangeSearchText && this.props.onChangeSearchText(searchText);
    this.searchPassage();
  }
  _onJumpPassage(verse) {
    this.props.onJumpPassage && this.props.onJumpPassage(verse);
    this._onHideSearch();
  }
  _onClearSearchText() {
    this.props.onChangeSearchText && this.props.onChangeSearchText("");
  }
  render() {
    const { results } = this.state;
    const { searchText } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.toolbar}>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => this._onHideSearch()}
            >
              <Icon name="ios-arrow-back" size={25} color="#0D233A" />
            </TouchableOpacity>
          </View>
          <TextInput
            ref={textInputSearch => (this._textInputSearch = textInputSearch)}
            placeholder={"Search text here"}
            style={styles.input}
            underlineColorAndroid={"transparent"}
            onChangeText={searchText => this._onChangeSearchText(searchText)}
            onSubmitEditing={() => this.searchPassage()}
            value={searchText}
          />
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => this._onClearSearchText()}
            >
              <Icon name="ios-close" size={40} color="#0D233A" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.innerScroll}
        >
          {results.map((verse, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => this._onJumpPassage(verse)}
              >
                <Text style={[styles.text]}>
                  <Text style={styles.result}>
                    {
                      Books.filter(book => book.value == verse.book)[0].name_id
                    }{" "}
                    {verse.chapter}:{verse.verse}{" "}
                  </Text>
                  <Highlighter
                    highlightStyle={{ backgroundColor: "#26405A" }}
                    searchWords={searchText.split(" ")}
                    textToHighlight={verse.content}
                  />
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    paddingTop: Platform.OS == "ios" ? 20 : 0,
    flexDirection: "row",
    height: Platform.OS == "ios" ? 80 : 60,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  titleButton: {
    flex: 1,
    paddingHorizontal: 25
  },
  toolbarTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300"
  },
  innerScroll: {
    paddingVertical: 30
  },
  actions: {},
  actionButton: {
    paddingHorizontal: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#0D233A"
  },
  drawerWrapper: {
    backgroundColor: "#1f364d",
    flex: 1,
    paddingTop: 25
  },
  text: {
    color: "#fff",
    lineHeight: 30,
    paddingHorizontal: 25
  },
  title: {
    fontWeight: "900"
  },
  separator: {
    fontWeight: "900",
    color: "rgba(255,255,255,0.4)",
    fontSize: 10,
    marginVertical: 10,
    marginLeft: 20
  },
  book: {
    paddingHorizontal: 25,
    paddingVertical: 20
  },
  bookText: {
    color: "#fff",
    fontWeight: "300"
  },
  bookActive: {
    backgroundColor: "#26405A"
  },
  chapterSelector: {
    height: 60,
    backgroundColor: "#26405A"
  },
  chapter: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  chapterText: {
    color: "#fff"
  },
  chapterActive: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  chapterTextActive: {
    color: "#0D233A"
  },
  chapterScroll: {
    paddingHorizontal: 20
  },
  verseNumber: {
    fontWeight: "900",
    paddingRight: 20,
    color: "rgba(255,255,255,0.4)",
    fontSize: 10
  },
  input: {
    flex: 1,
    height: 40
  },
  result: {
    fontWeight: "900"
  }
});

export default SearchScreen;
