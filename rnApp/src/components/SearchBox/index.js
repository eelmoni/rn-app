import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import {
  Input
} from '../common';
import style from './style';

class SearchBox extends Component {
  state = { text: '' };

  render() {
    return (
      <View style={style.container}>
        <Input
          placeholder="Escribí el hotel que buscas"
          value={this.state.text}
          onChangeText={text => this.setState({ text })} />
      </View>
    );
  }
}

export default SearchBox;
