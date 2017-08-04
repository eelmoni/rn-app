import {
  StyleSheet,
  Platform,
  NativeModules
} from 'react-native';

// Spacing with status bar.
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const commonStyles = {
  paddingTop: STATUSBAR_HEIGHT
};

const styles = StyleSheet.create({

  // Permutation: withImage
  withImage: {
    ...commonStyles,
    backgroundColor: 'transparent'
  },
  image: {
    maxHeight: 320,
    width: '100%',
    height: '100%'
  },

  // Permutation: withShadow
  withShadow: {
    ...commonStyles,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2,
    position: 'relative',
    marginBottom: 8
  }
});

export default styles;
