import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Welcome from './Welcome';
import Icon from './Icon';
import Header from './Header';

// Imports stories, the order matter.
Welcome(storiesOf, linkTo);
Icon(storiesOf, action);
Header(storiesOf);
