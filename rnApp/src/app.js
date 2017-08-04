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
import HotelsListContainer from './components/HotelsList/container';

export default class rnApp extends Component {
  state = {
    hotelsCount: null
  };

  componentWillMount() {
    this.setState({
      hotelsCount: store.getState().hotels.length
    });
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header permutation="withShadow">
            <CustomText>{`Elegí tu hotel (${this.state.hotelsCount})`}</CustomText>
          </Header>
          <SearchBox />
          <HotelsListContainer />
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
