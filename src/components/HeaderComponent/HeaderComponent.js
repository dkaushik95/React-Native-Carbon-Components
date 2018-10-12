import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

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
      <Header>
        <Left>
          <Button onPress={this.onPress} transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right></Right>
      </Header>
    );
  }
}

export default HeaderComponent;
