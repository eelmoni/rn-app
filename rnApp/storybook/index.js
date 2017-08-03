import {
  getStorybookUI,
  configure
} from '@storybook/react-native';

// Import stories
configure(() => {
  require('./stories');
}, module);

const StorybookUI = getStorybookUI({
  port: 7007,
  // TODO: Make host parameterizable, change it in package.json as well.
  host: '10.255.255.132'
});

export default StorybookUI;
