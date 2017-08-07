import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HotelScene from './components/scenes/Hotel';
import HotelDetailScene from './components/scenes/HotelDetail';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="hotel" component={HotelScene} title="Hotels List" initial />
        <Scene key="hotelDetail" component={HotelDetailScene} title="Hotel Detail" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
