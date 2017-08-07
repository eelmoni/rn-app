import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: '#FFF',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  image: {
    flex: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    width: '100%', height: 150
  },
  name: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: -10,
    marginBottom: 5
  },
  description: {
    flex: 1,
    backgroundColor: '#00FF00'
  }
});

export default styles;
