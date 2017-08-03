import React, { Component, PropTypes } from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

class Icon extends Component {

    render() {
      let props = this.props;
      let Component = (props.type === 'button') ? IconFontAwesome.Button : IconFontAwesome;

      return <Component margin={0} padding={0} {...props} />;
    }
}

export { Icon };
