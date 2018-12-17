import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNFS from 'react-native-fs';
import Realm from 'realm';

interface Props {}
interface State {
  realm: Realm | null;
}

const PassageSchema = {
  name: 'Passage',
  primaryKey: 'id',
  properties: {
    id: 'string',
    content: 'string',
    book: 'string',
    chapter: 'int',
    verse: 'int',
    type: 'string',
  },
};
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { realm: null };
  }
  public componentDidMount() {
    RNFS.copyFileAssets(`tb.realm`, `${RNFS.DocumentDirectoryPath}/tb.realm`).then(() => {
      Realm.open({
        schema: [PassageSchema],
        readOnly: true,
        inMemory: false,
        path: 'tb.realm',
      }).then(realm => {
        this.setState({ realm });
      });
    });
  }
  public render() {
    const info = this.state.realm
      ? 'Number of Passages in this Realm: ' + this.state.realm.objects('Passage').length
      : 'Loading...';

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{info}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
