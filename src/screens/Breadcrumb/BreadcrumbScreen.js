import React, { Component } from 'react';
import { Text } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { Container, Content } from 'native-base';
import {BreadcrumbView, Breadcrumb} from '../../components/Breadcrumb/Breadcrumb';

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
      <Container>
        <HeaderComponent title='Breadcrumb' navigation={this.props.navigation} />
        <Content padder>
          <Text style={{ fontWeight: 'bold' }} >Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired.</Text>
          <Text>Breadcrumb</Text>
          <BreadcrumbView>
            {[0, 1, 2, 3, 4].map(k => {
              return <Breadcrumb key={k} onPress={() => this.onPress(k)} isLeaf={k !== 4}>{`Breadcrumb ${k}`}</Breadcrumb>;
            })}
          </BreadcrumbView>
          <Text>{this.state.onPressResult}</Text>
        </Content>
      </Container>
    );
  }
}
export default BreadcrumbScreen;
