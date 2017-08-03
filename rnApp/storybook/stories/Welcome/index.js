import React from 'react';
import Welcome from './welcome';

export default function (storiesOf, linkTo) {
  storiesOf('Welcome', module)
    .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
}
