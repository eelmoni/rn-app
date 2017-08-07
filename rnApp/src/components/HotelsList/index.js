import React, { Component } from 'react';
import {
  ListView
} from 'react-native';
import style from './style';
import HotelCard from '../HotelCard';

class HotelsList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (h1, h2) => h1.id !== h2.id
    });

    this.dataSource = ds.cloneWithRows(this.props.hotels);
  }

  // TODO: Finish this visual component in order to show each hotel.
  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

  renderRow(hotel) {
    return <HotelCard key={hotel.id} hotel={hotel} />;
  }
}

export default HotelsList;
