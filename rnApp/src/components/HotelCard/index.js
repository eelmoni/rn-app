import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import {
  CustomText
} from '../common';
import style from './style';
import { Actions } from 'react-native-router-flux';

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
      <TouchableWithoutFeedback onPress={Actions.hotelDetail}>
      <View style={style.container}>
        <Image source={{uri: image}} style={style.image} />
        <CustomText style={style.name}>{name}</CustomText>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default HotelCard;
