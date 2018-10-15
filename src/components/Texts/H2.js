import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

class H2 extends Component {
  render() {
    return (
      <View>
        <View style={{ borderBottomColor: '#3057d5', borderBottomWidth: 5, width: 50, marginTop: 30 }}></View>
        <Text style={{ fontSize: 30, marginBottom: 30, marginTop: 20 }}>{this.props.children}</Text>
      </View>
    );
  }
}

H2.propTypes = {
  children: PropTypes.any
};

export default H2;
