//@flow
import React, { Component } from "react";
import { StyleSheet, View, Platform, StatusBar, Modal } from "react-native";
import PassageScreen from "./screens/PassageScreen";
import SearchScreen from "./screens/SearchScreen";
var RNFS = require("react-native-fs");

class App extends Component {
  state = {
    showSearch: false,
    searchText: ""
  };
  componentWillMount() {
    if (Platform.OS == "android") {
      RNFS.copyFileAssets(
        "tb.realm",
        RNFS.DocumentDirectoryPath + "/default.realm"
      );
      RNFS.copyFileAssets(
        "tb.realm.lock",
        RNFS.DocumentDirectoryPath + "/default.realm.lock"
      );
    } else {
      RNFS.unlink(RNFS.DocumentDirectoryPath + "/default.realm");
      RNFS.unlink(RNFS.DocumentDirectoryPath + "/default.realm.lock");
      try {
        RNFS.copyFile(
          RNFS.MainBundlePath + "/tb.realm",
          RNFS.DocumentDirectoryPath + "/default.realm"
        );
        RNFS.copyFile(
          RNFS.MainBundlePath + "/tb.realm.lock",
          RNFS.DocumentDirectoryPath + "/default.realm.lock"
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
  render() {
    const { jumpPassage, searchText } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#26405A" barStyle="light-content" />
        <PassageScreen
          onShowSearch={() => this._onShowSearch()}
          jumpPassage={jumpPassage}
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
