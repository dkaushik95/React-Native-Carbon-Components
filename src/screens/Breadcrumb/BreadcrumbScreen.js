import React, { Component } from 'react';
import { Text } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import {BreadcrumbView, Breadcrumb} from '../../components/Breadcrumb/Breadcrumb';
import { H2, Bold } from '../../components/Texts/texts';
import { PaddedView } from '../../components/View/View';

class BreadcrumbScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onPressResult: 'On Press result will show here'
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress(val) {
    this.setState({
      onPressResult: `Breadcrumb ${val} pressed`
    });
  }

  render() {
    return (
      <PaddedView>
        <HeaderComponent title='Breadcrumb' navigation={this.props.navigation} />
        <Bold><Bold color='#3057d5'>Breadcrumb</Bold> enables users to quickly see their location within a path of navigation and move up to a parent level if desired.</Bold>
        <H2>Breadcrumb</H2>
        <BreadcrumbView>
          {[0, 1, 2, 3, 4].map(k => {
            return <Breadcrumb key={k} onPress={() => this.onPress(k + 1)} isLeaf={k !== 4}>{`Breadcrumb ${k + 1}`}</Breadcrumb>;
          })}
        </BreadcrumbView>
        <Text>{this.state.onPressResult}</Text>
      </PaddedView>
    );
  }
}
export default BreadcrumbScreen;
