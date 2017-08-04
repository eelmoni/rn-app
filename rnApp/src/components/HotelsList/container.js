import React from 'react';
import { connect } from 'react-redux';
import HotelsList from './index';

const mapStateToProps = (state, ownProps) => {
  return { hotels: state.hotels };
};

const HotelsListContainer = connect(
    mapStateToProps
)(HotelsList);

export default HotelsListContainer;
