import { View, TouchableOpacity, Image, Text } from 'react-native';
import colors from '../../utils/colors';
import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  return (
    <TouchableOpacity disabled={props.disabled} style={{ backgroundColor: colors.ui01 }} onPress={props.onPress}>
      {/* Checkbox */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        opacity: props.disabled ? 0.2 : 1
      }} >
        <View style={{
          backgroundColor: props.checked ? colors.brand01 : colors.ui01,
          borderColor: props.checked ? colors.ui01 : colors.ui05,
          borderWidth: props.checked ? 0 : 1,
          height: 18,
          width: 18,
          margin: 16,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            source={require('../../assets/img/checkbox.png')}
            style={{
              height: 10,
              width: 10
            }} />
        </View>
        {/* Component */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>{props.label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

Checkbox.propTypes = {
  onPress: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

export default Checkbox;
