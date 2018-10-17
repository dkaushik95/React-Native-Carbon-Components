import { View } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaddedView extends Component {
  render() {
    return (
      <View style={[{padding: 10}, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

PaddedView.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any
};

export {PaddedView};
