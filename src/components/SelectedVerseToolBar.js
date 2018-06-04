import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class SelectedVerseToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { activeBook, activeChapter } = this.props;
    return (
      <View style={styles.toolbar}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.actionButton, { marginLeft: 10, flex: 1 }]}
          onPress={() => this.props._onBackToolbar()}
        >
          <Icon name="ios-arrow-back" size={25} color="#000" style={{ backgroundColor: "transparent" }} />
          <Text style={styles.toolbarTitle}>
            {activeBook.name_id} {activeChapter}
          </Text>
        </TouchableOpacity>
        <View style={styles.actions}>
          <TouchableOpacity activeOpacity={0.7} style={styles.actionButton} onPress={() => this.props._onCopyVerse()}>
            <Icon name="ios-copy" size={25} color="#000" style={{ backgroundColor: "transparent" }} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.actionButton} onPress={() => this.props._onShareVerse()}>
            <Icon name="ios-share-alt" size={25} color="#000" style={{ backgroundColor: "transparent" }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    paddingTop: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 60,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: "#ddd",
    shadowOffset: { height: 10, width: 0 },
    zIndex: 10
  },
  actions: {
    flexDirection: "row",
    marginRight: 10
  },
  actionButton: {
    paddingHorizontal: 20,
    flexDirection: "row"
  },
  toolbarTitle: {
    color: "#000",
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "300",
    backgroundColor: "transparent"
  }
});
