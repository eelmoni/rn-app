import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

class CustomText extends Component {
  render() {
    let style = this.getStyle(this.props.style || {});

    return (
      <Text {...this.props} style={style}>
        {this.props.children}
      </Text>
    );
  }

  getStyle(style) {
    let styles = StyleSheet.flatten(style);
    let fontFamilyStyle = StyleSheet.create({
      propStyle: {
        ...styles
      },
      customFontFamily: {
        fontFamily: 'Roboto'
      }
    });
    let newStyle = StyleSheet.flatten([fontFamilyStyle.propStyle, fontFamilyStyle.customFontFamily]);

    return newStyle;
  }
}

export { CustomText };
