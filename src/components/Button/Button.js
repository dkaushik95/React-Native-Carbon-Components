import React, { Component } from 'react';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';
import { TouchableHighlight, Text } from 'react-native';

class Button extends Component {
  render() {
    let backgroundColor = colors.brand01;
    let borderWidth = 0;
    let borderColor = null;
    let textColor = colors.inverse01;
    let underlayColor = colors.hoverPrimary;
    const { type } = this.props;
    switch (type) {
    case 'primary':
      backgroundColor = colors.brand01;
      borderWidth = 0;
      break;
    case 'secondary':
      backgroundColor = 'transparent';
      borderWidth = 1;
      borderColor = colors.brand01;
      textColor = colors.brand01;
      underlayColor = colors.hoverSecondary;
      break;
    case 'tertiary':
      backgroundColor = 'transparent';
      borderWidth = 1;
      borderColor = colors.ui05;
      textColor = colors.ui05;
      underlayColor = colors.ui05;
      break;
    case 'ghost':
      backgroundColor = 'transparent';
      borderWidth = 0;
      textColor = colors.brand01;
      underlayColor = 'transparent';
      break;
    case 'danger':
      backgroundColor = 'transparent';
      borderWidth = 1;
      borderColor = colors.support01;
      textColor = colors.support01;
      underlayColor = 'transparent';
      break;
    case 'primaryDanger':
      backgroundColor = colors.support01;
      borderWidth = 0;
      textColor = colors.inverse01;
      underlayColor = colors.hoverDanger;
      break;
    default:
      break;
    }
    return (
      <TouchableHighlight
        underlayColor={underlayColor}
        style={{
          backgroundColor: backgroundColor,
          opacity: this.props.disabled ? 0.5 : 1,
          paddingHorizontal: 16,
          paddingVertical: 10,
          marginHorizontal: 8,
          borderColor: borderColor,
          borderWidth: borderWidth
        }}
        onPress={this.props.onPress}
        disabled={this.props.disabled}
      >
        {typeof this.props.children === 'string' ? (
          <Text style={{fontSize: 14, color: textColor, fontWeight: 'bold'}}>{this.props.children}</Text>
        ) : (
          this.props.children
        )}
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onPress: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'ghost', 'danger', 'primaryDanger']),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: 'primary'
};

export { Button };
