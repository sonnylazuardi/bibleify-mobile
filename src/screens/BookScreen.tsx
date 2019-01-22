import Header from 'components/Header';
import React from 'react';
import { Component } from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { BoxShadow } from 'react-native-shadow';
import Icon from 'react-native-vector-icons/Feather';
import { Transition } from 'react-navigation-fluid-transitions';

interface Props {}

const SHADOW_OPTION = {
  height: 100,
  width: 280,
  color: '#000000',
  border: 30,
  radius: 20,
  opacity: 0.4,
  x: 0,
  y: 15,
  style: {},
};

export default class BookScreen extends Component<Props> {
  public render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <StatusBar backgroundColor="#282C32" barStyle="light-content" />
          
          <View style={styles.header}>
            <Text style={styles.title}>Bibleify</Text>
          </View>
          <View style={styles.search}>
            <TextInput style={styles.input} placeholder={'Search...'} placeholderTextColor={'#999'} />
          </View>

          <View style={styles.itemWrap}>
            <View style={styles.shadowWrap}>
              <BoxShadow setting={SHADOW_OPTION} />
            </View>
            <RectButton onPress={() => {}}>
              <Transition shared="book">
                <ImageBackground source={require('assets/genesis.jpg')} style={styles.item} imageStyle={styles.itemImg}>
                  <Text style={styles.itemText}>Genesis</Text>
                </ImageBackground>
              </Transition>
            </RectButton>
          </View>

          <View style={styles.itemWrap}>
            <View style={styles.shadowWrap}>
              <BoxShadow setting={SHADOW_OPTION} />
            </View>
            <RectButton onPress={() => {}}>
              <ImageBackground source={require('assets/exodus.jpg')} style={styles.item} imageStyle={styles.itemImg}>
                <Text style={styles.itemText}>Exodus</Text>
              </ImageBackground>
            </RectButton>
          </View>

          <View style={styles.itemWrap}>
            <View style={styles.shadowWrap}>
              <BoxShadow setting={SHADOW_OPTION} />
            </View>
            <RectButton onPress={() => {}}>
              <ImageBackground source={require('assets/leviticus.jpg')} style={styles.item} imageStyle={styles.itemImg}>
                <Text style={styles.itemText}>Leviticus</Text>
              </ImageBackground>
            </RectButton>
          </View>

          <View style={styles.itemWrap}>
            <View style={styles.shadowWrap}>
              <BoxShadow setting={SHADOW_OPTION} />
            </View>
            <RectButton onPress={() => {}}>
              <ImageBackground source={require('assets/numbers.jpg')} style={styles.item} imageStyle={styles.itemImg}>
                <Text style={styles.itemText}>Numbers</Text>
              </ImageBackground>
            </RectButton>
          </View>

          <View style={styles.itemWrap}>
            <View style={styles.shadowWrap}>
              <BoxShadow setting={SHADOW_OPTION} />
            </View>
            <RectButton onPress={() => {}}>
              <ImageBackground
                source={require('assets/deuteronomy.jpg')}
                style={styles.item}
                imageStyle={styles.itemImg}
              >
                <Text style={styles.itemText}>Deuteronomy</Text>
              </ImageBackground>
            </RectButton>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  itemWrap: {
    paddingHorizontal: 32,
    paddingVertical: 0,
    // backgroundColor: '#ffffff22',
    marginBottom: 20,
  },
  shadowWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#ddd',
    height: 100,
    flex: 1,
    borderRadius: 12,
  },
  itemImg: {
    borderRadius: 12,
  },
  itemText: {
    color: '#fff',
    fontFamily: 'Lato-Black',
    fontSize: 18,
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  header: {
    paddingHorizontal: 32,
    paddingTop: 32,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Lato-Black',
    color: '#fff',
  },
  search: {
    paddingHorizontal: 32,
    marginBottom: 20,
    marginTop: 8,
  },
  input: {
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 10,
    fontFamily: 'Lato-Regular',
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
