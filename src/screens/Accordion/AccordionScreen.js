import React, { Component } from 'react';
import { Text } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import Accordion from '../../components/Accordion/Accordion';
import { Container, Content } from 'native-base';

class AccordionScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const randomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    return (
      <Container>
        <HeaderComponent title='Overview' navigation={this.props.navigation} />
        <Content padder>
          <Text style={{ fontWeight: 'bold' }} >Accordion enables users to expand and collapse sections of content</Text>
          <Text>Accordion</Text>
          {[0, 1, 2, 3].map(k =>
            <Accordion key={k} title={`Section ${k + 1} title`} content={randomText} />
          )}
        </Content>
      </Container>
    );
  }
}
export default AccordionScreen;
