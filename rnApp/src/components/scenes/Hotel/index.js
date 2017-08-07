import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  CustomText,
  Header
} from '../../common';
import SearchBox from '../../SearchBox';
import HotelsListContainer from '../../HotelsList/container';
import store from '../../../store';

export default class Hotel extends Component {
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
        <View style={styles.container}>
          <Header permutation="withShadow">
            <CustomText>{`Elegí tu hotel (${this.state.hotelsCount})`}</CustomText>
          </Header>
          <SearchBox />
          <HotelsListContainer />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  }
});
