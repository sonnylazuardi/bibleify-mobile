//@flow
import React, { Component } from "react";
import { StyleSheet, View, Platform, StatusBar, Modal } from "react-native";
import PassageScreen from "./screens/Passage/PassageScreen";
import SearchScreen from "./screens/Search/SearchScreen";
var RNFS = require("react-native-fs");

class App extends Component {
  state = {
    showSearch: false,
    searchText: "",
    bookPath: "nkjv.realm"
  };
  componentWillMount() {
    RNFS.unlink(RNFS.DocumentDirectoryPath + "/nkjv.realm");
    RNFS.unlink(RNFS.DocumentDirectoryPath + "/nkjv.realm.lock");
    if (Platform.OS == "android") {
      RNFS.copyFileAssets(
        "nkjv.realm",
        RNFS.DocumentDirectoryPath + "/nkjv.realm"
      );
      RNFS.copyFileAssets(
        "nkjv.realm.lock",
        RNFS.DocumentDirectoryPath + "/nkjv.realm.lock"
      );
    } else {
      try {
        RNFS.copyFile(
          RNFS.MainBundlePath + "/nkjv.realm",
          RNFS.DocumentDirectoryPath + "/nkjv.realm"
        );
        RNFS.copyFile(
          RNFS.MainBundlePath + "/nkjv.realm.lock",
          RNFS.DocumentDirectoryPath + "/nkjv.realm.lock"
        );
      } catch (e) {
        console.log("FILE ALREADY EXISTS");
      }
    }
  }

  _onShowSearch() {
    this.setState({
      showSearch: true,
      jumpPassage: null
    });
  }

  _onHideSearch() {
    this.setState({ showSearch: false });
  }

  _onJumpPassage(verse) {
    this.setState({
      jumpPassage: verse
    });
  }

  onBookPathChange(bookPath) {
    this.setState({ bookPath });
  }

  render() {
    const { jumpPassage, searchText, bookPath } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#26405A" barStyle="light-content" />
        <PassageScreen
          onShowSearch={() => this._onShowSearch()}
          jumpPassage={jumpPassage}
          onBookPathChange={bookPath => this.onBookPathChange(bookPath)}
          bookPath={bookPath}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showSearch}
          onRequestClose={() => this._onHideSearch()}
        >
          <SearchScreen
            searchText={searchText}
            onChangeSearchText={searchText => this.setState({ searchText })}
            onHideSearch={() => this._onHideSearch()}
            onJumpPassage={verse => this._onJumpPassage(verse)}
            bookPath={bookPath}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
