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
import PropTypes from 'prop-types';
import Books from "../../constants/Books";
import Icon from "react-native-vector-icons/Ionicons";
import Highlighter from "react-native-highlight-words";
import { COLOR } from "../../constants/constants";
import { queries } from '../../data/queries/Queries';
const { searchPassage } = queries

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
    const results = searchPassage(searchText)
    this.setState({results})
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
                    highlightStyle={styles.highLighter}
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
    flex: 1,
    backgroundColor: COLOR.primaryExtraDark
  },
  highLighter: {
    backgroundColor: COLOR.primaryDark
  },
  toolbar: {
    paddingTop: Platform.OS == "ios" ? 20 : 0,
    flexDirection: "row",
    height: Platform.OS == "ios" ? 80 : 60,
    alignItems: "center",
    backgroundColor: COLOR.white
  },
  innerScroll: {
    paddingVertical: 30
  },
  actions: {},
  actionButton: {
    paddingHorizontal: 20
  },
  text: {
    color: COLOR.white,
    lineHeight: 30,
    paddingHorizontal: 25
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

SearchScreen.propTypes = {
  searchText: PropTypes.string.isRequired,
  onHideSearch: PropTypes.func.isRequired,
  onChangeSearchText: PropTypes.func.isRequired,
  onJumpPassage: PropTypes.func.isRequired
}
