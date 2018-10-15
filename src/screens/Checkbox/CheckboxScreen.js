import React, { Component } from 'react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { Container, Content } from 'native-base';
import { H2, Bold } from '../../components/Texts/texts';
import Checkbox from '../../components/Checkbox/Checkbox';

class CheckboxScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.setState({
      checked: !this.state.checked
    });
  }
  render() {
    return (
      <Container>
        <HeaderComponent title='Checkbox' navigation={this.props.navigation} />
        <Content padder>
          <Bold><Bold color='#3057d5'>Checkbox</Bold> are used when there is a list of options and the user may select multiple options, including all or none.</Bold>
          <H2>Checkbox</H2>
          <Checkbox label="Checkbox" checked={this.state.checked} onPress={this.onPress} />
          <Checkbox label="Indeterminate checkbox" checked={this.state.checked} onPress={this.onPress} />
          <Checkbox disabled label="Disabled checkbox" checked={this.state.checked} onPress={this.onPress} />
        </Content>
      </Container>
    );
  }
}
export default CheckboxScreen;
