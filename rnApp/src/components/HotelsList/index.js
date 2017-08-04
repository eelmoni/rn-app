import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import {
  CustomText
} from '../common';
import style from './style';

class HotelsList extends Component {

  // TODO: Finish this visual component in order to show each hotel.
  render() {
    return (
      <View style={style.container}>
        {this.props.hotels.map((hotel) => {
          return <CustomText key={hotel.id}>{hotel.name}</CustomText>;
        })}
      </View>
    );
  }
}

export default HotelsList;
