import React, { Component } from 'react';
import { Text } from 'react-native';

export default class CustomText extends Component {
  render() {
    let props = this.props;
    let styles = {
      ...props.style,
      fontFamily: 'Arial'
    };
    let textProps = {
      ...props,
      style: styles
    };

    return (
      <Text {...textProps}>
        {this.props.children}
      </Text>
    );
  }
}
