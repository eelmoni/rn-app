import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import {
  CustomText
} from '../common';
import style from './style';

class HotelCard extends Component {

  render() {
    let {
      name,
      stars,
      service,
      pricePerNight,
      currency,
      image
    } = this.props.hotel;

    // TODO: Improve style for this component.
    return (
      <View style={style.container}>
        <Image source={{uri: image}} style={style.image} />
        <CustomText style={style.name}>{name}</CustomText>
      </View>
    );
  }
}

export default HotelCard;
