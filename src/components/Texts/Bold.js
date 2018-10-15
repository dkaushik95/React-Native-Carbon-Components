import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
class Bold extends Component {
  render() {
    return (
      <Text style={{ fontWeight: 'bold', color: this.props.color }}>{this.props.children}</Text>
    );
  }
}

Bold.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any
};

export default Bold;
