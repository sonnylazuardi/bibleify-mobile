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
import Books from "../../constants/Books";
import Icon from "react-native-vector-icons/Ionicons";
import Highlighter from "react-native-highlight-words";
import styles from "./styles";

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


export default SearchScreen;
