/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { AppTile, AppIcon, AppLabel } from './components/AppContents';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <Text>PDStore v0.0.1</Text>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ScrollView
            horizontal={true}
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <AppTile>
              <AppIcon uri='http://82.145.63.160:1337/parse/files/macOSicons/ea6586ac1aa610b693947bc72d239978_1609914738915.icns' />
              <AppLabel>Adobe Creative Cloud</AppLabel>
            </AppTile>
            <AppTile />
            <AppTile />
            <AppTile />
            <AppTile />
          </ScrollView>
          <ScrollView
            horizontal={true}
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <AppTile>
              <AppIcon uri='http://82.145.63.160:1337/parse/files/macOSicons/ea6586ac1aa610b693947bc72d239978_1609914738915.icns' />
              <AppLabel>Adobe Creative Cloud</AppLabel>
            </AppTile>
            <AppTile />
            <AppTile />
            <AppTile />
            <AppTile />
          </ScrollView>

          <ScrollView
            horizontal={true}
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <AppTile>
              <AppIcon uri='http://82.145.63.160:1337/parse/files/macOSicons/ea6586ac1aa610b693947bc72d239978_1609914738915.icns' />
              <AppLabel>Adobe Creative Cloud</AppLabel>
            </AppTile>
            <AppTile />
            <AppTile />
            <AppTile />
            <AppTile />
          </ScrollView>

          <ScrollView
            horizontal={true}
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <AppTile>
              <AppIcon uri='http://82.145.63.160:1337/parse/files/macOSicons/ea6586ac1aa610b693947bc72d239978_1609914738915.icns' />
              <AppLabel>Adobe Creative Cloud</AppLabel>
            </AppTile>
            <AppTile />
            <AppTile />
            <AppTile />
            <AppTile />
          </ScrollView>

          <ScrollView
            horizontal={true}
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <AppTile>
              <AppIcon uri='http://82.145.63.160:1337/parse/files/macOSicons/ea6586ac1aa610b693947bc72d239978_1609914738915.icns' />
              <AppLabel>Adobe Creative Cloud</AppLabel>
            </AppTile>
            <AppTile />
            <AppTile />
            <AppTile />
            <AppTile />
          </ScrollView>
          <ScrollView
            horizontal={true}
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <AppTile>
              <AppIcon uri='http://82.145.63.160:1337/parse/files/macOSicons/ea6586ac1aa610b693947bc72d239978_1609914738915.icns' />
              <AppLabel>Adobe Creative Cloud</AppLabel>
            </AppTile>
            <AppTile />
            <AppTile />
            <AppTile />
            <AppTile />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
