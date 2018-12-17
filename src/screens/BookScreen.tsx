import Header from 'components/Header';
import React from 'react';
import { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props {}
export default class BookScreen extends Component<Props> {
  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Terjemahan Baru</Text>
        </View>
        <View style={styles.item}>
          <TextInput />
        </View>

        <View style={styles.item}>
          <Text style={styles.itemText}>Genesis</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Exodus</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Ecclesiastes</Text>
        </View>
      </View>
    );
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
  item: {
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  itemText: {
    color: '#fff',
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
