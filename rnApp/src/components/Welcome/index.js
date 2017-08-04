import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import firebase from 'firebase';
import {
  Icon,
  CustomText
} from './components/common';

class Welcome extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey:           'AIzaSyDxj86WauofCa_D6ZY1etNgo4N1MSAeeTo',
      authDomain:       'rnapp-bb3cf.firebaseapp.com',
      databaseURL:      'https://rnapp-bb3cf.firebaseio.com',
      projectId:        'rnapp-bb3cf',
      storageBucket:    'rnapp-bb3cf.appspot.com',
      messagingSenderId:'357231618011'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomText style={styles.welcome}>
          Welcome to React Native App!
        </CustomText>
        <CustomText style={styles.instructions}>
          Choose an option:
        </CustomText>
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
          <CustomText>Run the app</CustomText>
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
          <CustomText>Run storybook</CustomText>
        </Icon>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
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

export default Welcome;
