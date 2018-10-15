import React, { Component } from 'react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import Accordion from '../../components/Accordion/Accordion';
import { H2, Bold } from '../../components/Texts/texts';
import { PaddedView } from '../../components/View/View';

class AccordionScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const randomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    return (
      <PaddedView>
        <HeaderComponent title='Accordion' navigation={this.props.navigation} />
        <Bold><Bold color='#3057d5'>Accordion </Bold>enables users to expand and collapse sections of content</Bold>
        <H2>Accordion</H2>
        {[0, 1, 2, 3].map(k =>
          <Accordion key={k} title={`Section ${k + 1} title`} content={randomText} />
        )}
      </PaddedView>
    );
  }
}
export default AccordionScreen;
