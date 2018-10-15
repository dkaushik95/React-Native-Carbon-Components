import React, { Component } from 'react';
import { TouchableOpacity, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';

class BreadcrumbView extends Component {
  render() {
    return (
      <ScrollView horizontal style={{ flexDirection: 'row', overflow: 'scroll', paddingTop: 30, paddingBottom: 30 }}>
        {this.props.children}
      </ScrollView>
    );
  }
}

BreadcrumbView.propTypes = {
  children: PropTypes.any
};

class Breadcrumb extends Component {
  render() {
    return (
      <TouchableOpacity underlayColor={colors.ui04} onPress={this.props.onPress}>
        <Text style={{fontSize: 14, color: colors.brand01}}>{this.props.children}{this.props.isLeaf ? <Text style={{color: colors.text01}}>   /   </Text> : null}</Text>
      </TouchableOpacity>
    );
  }
}

Breadcrumb.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string,
  isLeaf: PropTypes.bool
};

export {
  Breadcrumb,
  BreadcrumbView
};
