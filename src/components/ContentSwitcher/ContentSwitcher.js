import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'react-native-elements';
import colors from '../../utils/colors';

class ContentSwitcher extends Component {
  render() {
    return (
      <ButtonGroup
        onPress={this.props.onPress}
        selectedIndex={this.props.selectedIndex}
        buttons={this.props.buttons}
        buttonStyle={{
          backgroundColor: colors.ui01
        }}
        innerBorderStyle={{
          color: colors.brand01
        }}
        containerStyle={{
          borderColor: colors.brand01,
          borderRadius: 10
        }}
        textStyle={{
          color: colors.brand01,
          fontSize: null,
          fontWeight: 'normal'
        }}
        selectedButtonStyle={{
          backgroundColor: colors.brand01
        }}
        selectedTextStyle={{
          color: colors.inverse01,
          fontWeight: 'normal'
        }}
      />
    );
  }
}

ContentSwitcher.propTypes = {
  onPress: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  buttons: PropTypes.array.isRequired
};

export { ContentSwitcher };
