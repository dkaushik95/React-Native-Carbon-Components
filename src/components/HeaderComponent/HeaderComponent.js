import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.navigation.openDrawer();
  }
  render() {
    return (
      <Header
        backgroundColor={colors.ui01}
        leftComponent={{icon: 'menu', color: '#000', onPress: this.onPress}}
        centerComponent={{text: this.props.title, style: {color: '#000'}}}
      />
    );
  }
}

HeaderComponent.propTypes = {
  title: PropTypes.string
};

export default HeaderComponent;
