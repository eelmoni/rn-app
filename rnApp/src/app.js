import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Icon } from './components/common';

export default class rnApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native App!
        </Text>
        <Text style={styles.instructions}>
          Choose an option:
        </Text>
        <Icon
          name="apple"
          color="#de2626"
          backgroundColor="#F5F5F5"
          borderWidth={1}
          borderColor="#de2626"
          borderRadius={3}
          size={25}
          margin={10}
          padding={10}
          width={150}
          type="button">
          <Text>Run the app</Text>
        </Icon>
        <Icon
          name="book"
          color="#de2626"
          backgroundColor="#F5F5F5"
          borderWidth={1}
          borderColor="#de2626"
          borderRadius={3}
          size={25}
          padding={10}
          margin={10}
          width={150}
          type="button">
          <Text>Run storybook</Text>
        </Icon>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
