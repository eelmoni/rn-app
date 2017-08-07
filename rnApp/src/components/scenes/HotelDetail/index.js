import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { CustomText } from '../../common';

export default class HotelDetail extends Component {

  render() {
    return (
        <View style={styles.container}>
          <CustomText>{'This is the Hotel Detail Scene'}</CustomText>
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
