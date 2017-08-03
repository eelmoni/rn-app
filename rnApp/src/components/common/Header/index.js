import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import style from './style';

class Header extends Component {
  render() {
    let permutations = {
      withImage: this.renderHeaderWithImage,
      withShadow: this.renderHeaderWithShadow
    };
    let currentPermutation = permutations[this.props.permutation];

    return (currentPermutation) ? currentPermutation(this.props) : null;
  }

  renderHeaderWithImage(props) {
    return (
      <View>
        <Image source={{ uri: props.image }} style={style.image} >
          <View style={style.withImage}>
            {props.children}
          </View>
        </Image>
      </View>
    );
  }

  renderHeaderWithShadow(props) {
    return (
      <View style={style.withShadow}>
        {props.children}
      </View>
    );
  }
}

export { Header };
