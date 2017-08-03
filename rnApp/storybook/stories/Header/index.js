import React from 'react';
import Text from '../../../src/components-core/Text';
import Header from '../../../src/components-core/Header';

export default function (storiesOf) {
  storiesOf('Header', module)
    .add('default (empty node)', () =>
      <Header />
    )
    .add('with image', () =>
      <Header
        permutation="withImage"
        image="https://cdn.pixabay.com/photo/2017/04/05/15/58/hotelroom-2205447_960_720.jpg"
      >
        <Text style={{color:'#FFF', fontSize: 25}}>Detalle</Text>
      </Header>
    )
    .add('with shadow', () =>
      <Header permutation="withShadow">
        <Text style={{color:'#000', fontSize: 25}}>Elegí tu hotel (489)</Text>
      </Header>
    );
}
