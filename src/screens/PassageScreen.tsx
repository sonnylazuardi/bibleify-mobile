import Header from 'components/Header';
import React from 'react';
import { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}
const PassageIcon = ({ focused }) => {
  if (focused) {
    return <Icon name="book" size={18} color="#fff" />;
  } else {
    return <Icon name="book" size={18} color="#ffffff66" />;
  }
};

export default class PassageScreen extends Component<Props> {
  public static navigationOptions = {
    title: 'Passage',
    tabBarIcon: PassageIcon,
  };
  public render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ScrollView style={styles.scroll}>
          <View style={styles.item}>
            <Text style={styles.itemTitle}>Firman yang telah menjadi manusia</Text>
          </View>
          {(() => {
            const items = [];
            for (let i = 0; i < 40; i++) {
              items.push(
                <View key={i} style={styles.item}>
                  <Text style={styles.itemText}>
                    <Text style={styles.itemVerse}>{i} </Text>
                    <Text style={styles.itemContent}>
                      Pada mulanya adalah Firman; Firman itu bersama-sama dengan Allah dan Firman itu adalah Allah.
                      Lorem ipsum
                    </Text>
                  </Text>
                </View>,
              );
            }
            return items;
          })()}
        </ScrollView>
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
  itemText: {},
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
