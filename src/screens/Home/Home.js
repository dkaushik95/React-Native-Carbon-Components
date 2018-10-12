import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.navigation.openDrawer();
  }
  render() {
    return (
      <View>
        <HeaderComponent title='Overview' navigation={this.props.navigation} />
        <Text>Hello from Home</Text>
      </View>
    );
  }
}

export default Home;
