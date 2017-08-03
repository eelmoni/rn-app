import React from 'react';
import { Text } from 'react-native';

import Icon from '../../../src/components-core/Icon';
import CenterView from '../CenterView';

export default function (storiesOf, action) {
  storiesOf('Icon', module)
    .addDecorator(getStory =>
      <CenterView>
        {getStory()}
      </CenterView>
    )
    .add('default', () =>
      <Icon name="ellipsis-v" color="#de2626" size={25} />
    )
    .add('button', () =>
      <Icon
        name="map-o"
        color="#de2626"
        backgroundColor="#FFF"
        borderWidth={1}
        borderColor="#de2626"
        borderRadius={3}
        size={25}
        padding={10}
        type="button"
        onPress={action('clicked-icon-button')}>
        <Text>See Map</Text>
      </Icon>
    );
}
