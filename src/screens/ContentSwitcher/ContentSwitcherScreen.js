import React, { Component } from 'react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { H2, Bold } from '../../components/Texts/texts';
import { PaddedView } from '../../components/View/View';
import { ContentSwitcher } from '../../components/ContentSwitcher/ContentSwitcher';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../utils/colors';

class ContentSwitcherScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section1: 0,
      section2: 0
    };
    this.switchSection1 = this.switchSection1.bind(this);
    this.switchSection2 = this.switchSection2.bind(this);
  }

  switchSection1(number) {
    this.setState({
      section1: number
    });
  }

  switchSection2(number) {
    this.setState({
      section2: number
    });
  }

  render() {
    const buttons1 = ['First section', 'Second Section', 'Third Section'];
    const buttons2 = [
      {
        element: () => (
          <View style={{flexDirection: 'row'}}>
            <Icon name='add-circle' color={this.state.section2 === 0 ? 'white' : colors.brand01} />
            <Text style={{ color: this.state.section2 === 0 ? 'white' : colors.brand01, alignSelf: 'center', marginLeft: 10 }}>Second section</Text>
          </View>
        )
      },
      {
        element: () => (
          <View style={{ flexDirection: 'row' }}>
            <Icon name='add-circle' color={this.state.section2 === 1 ? 'white' : colors.brand01 } />
            <Text style={{ color: this.state.section2 === 1 ? 'white' : colors.brand01, alignSelf: 'center', marginLeft: 10}}>Second section</Text>
          </View>
        )
      }
    ];
    return (
      <PaddedView>
        <HeaderComponent title='Checkbox' navigation={this.props.navigation} />
        <Bold><Bold color='#3057d5'>Content switcher</Bold> manipulates the content shown following an exclusive or “either/or” pattern.</Bold>
        <H2>Content Switcher</H2>
        <ContentSwitcher buttons={buttons1} selectedIndex={this.state.section1} onPress={this.switchSection1} />
        <View>
          <Text>{`Current view is set to section ${this.state.section1}`}</Text>
        </View>
        <H2>Content Switcher with Icon</H2>
        <ContentSwitcher buttons={buttons2} selectedIndex={this.state.section2} onPress={this.switchSection2} />
        <Text>{`Current view is set to section ${this.state.section2}`}</Text>
        <Text style={{fontSize: 10, marginTop: 30}}>* Note: You have to make your own component with your own styles for anything other than default text</Text>
      </PaddedView>
    );
  }
}
export default ContentSwitcherScreen;
