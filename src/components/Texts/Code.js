import React, { Component } from 'react';
import { Text, StyleSheet, Platform, TouchableOpacity, Clipboard, Alert } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';
import {Icon} from 'react-native-elements';

class Code extends Component {
  constructor(props) {
    super(props);
    this.copy = this.copy.bind(this);
  }
  copy() {
    Clipboard.setString(this.props.children);
    Alert.alert('Info', 'copied!');
  }
  render() {
    return (
      <TouchableOpacity disabled={this.props.copy ? true : false} onPress={this.copy}>
        <Text style={[this.props.inline ? CodeStyle.inlineCode : CodeStyle.code]}>{this.props.children}</Text>
        {this.props.copy ? (
          <Icon name='content-copy' containerStyle={{position: 'absolute', right: 5, top: 5}} iconStyle={{color: colors.brand01}} onPress={this.copy} />
        ) : null}
      </TouchableOpacity>
    );
  }
}

const CodeStyle = StyleSheet.create({
  code: {
    backgroundColor: colors.ui01,
    padding: 10,
    borderWidth: 1,
    color: colors.text01,
    borderColor: colors.ui03,
    fontWeight: '400',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace'
  },
  inlineCode: {
    backgroundColor: colors.field01,
    borderWidth: 1,
    color: colors.text02,
    borderColor: colors.ui03,
    fontWeight: '400',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace'
  }
});

Code.propTypes = {
  children: PropTypes.any,
  inline: PropTypes.bool,
  copy: PropTypes.bool
};

export default Code;
