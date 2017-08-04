import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import {
  CustomText,
  Icon
} from '../../common';
import style from './style';

class Input extends Component {
  state = { text: ''};

  render() {
    let {
      placeholder,
      value,
      onChangeText
    } = this.props;

    return (
      <View style={style.container}>
        <View style={style.leftIcon}>
          <Icon name="search" color="#757575" size={18} />
        </View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={style.input} />
        <View style={style.rightIcon}>
          <Icon name="microphone" color="#757575" size={18} />
        </View>
      </View>
    );
  }
}

export { Input };
