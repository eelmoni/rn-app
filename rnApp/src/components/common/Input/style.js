import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  rightIcon: {
    flex: 1,
    alignItems: 'center',
  },
  leftIcon: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45
  },
  input: {
    flex: 4,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 20
  }
});

export default styles;
