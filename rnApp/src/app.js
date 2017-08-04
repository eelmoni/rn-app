import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import {
  CustomText,
  Header
} from './components/common';
import SearchBox from './components/SearchBox';

export default class rnApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header permutation="withShadow">
            <CustomText>Elegí tu hotel (489)</CustomText>
          </Header>
          <SearchBox />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  }
});
