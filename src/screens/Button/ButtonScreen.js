import React, { Component } from 'react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { H2, Bold } from '../../components/Texts/texts';
import { PaddedView } from '../../components/View/View';
import { Button } from '../../components/Button/Button';
import { Alert, View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../utils/colors';

class ButtonScreen extends Component {
  constructor(props) {
    super(props);
  }

  onPress() {
    Alert.alert('Button pressed');
  }
  render() {
    return (
      <PaddedView style={{flex: 1}}>
        <HeaderComponent title='Checkbox' navigation={this.props.navigation} />
        <ScrollView>
          <Bold><Bold color='#3057d5'>Button</Bold> express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.</Bold>
          <H2>Primary Button</H2>
          <View style={{ flexDirection: 'row', overflow: 'scroll' }}>
            <Button onPress={this.onPress}>
              Button
            </Button>
            <Button onPress={this.onPress} disabled>
              Button
            </Button>
            <Button onPress={this.onPress}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: colors.inverse01, fontWeight: 'bold' }}>With icon</Text>
                <Icon iconStyle={{ fontSize: 14, color: colors.inverse01, fontWeight: 'bold', marginLeft: 5 }} name='add-circle' />
              </View>
            </Button>
          </View>
          <H2>Secondary Button</H2>
          <View style={{ flexDirection: 'row', overflow: 'scroll' }}>
            <Button onPress={this.onPress} type='secondary'>
              Button
            </Button>
            <Button onPress={this.onPress} disabled type='secondary'>
              Button
            </Button>
            <Button onPress={this.onPress} type='secondary'>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: colors.brand01, fontWeight: 'bold' }}>With icon</Text>
                <Icon iconStyle={{ fontSize: 14, color: colors.brand01, fontWeight: 'bold', marginLeft: 5 }} name='add-circle' />
              </View>
            </Button>
          </View>
          <H2>Tertiary Button</H2>
          <View style={{ flexDirection: 'row', overflow: 'scroll' }}>
            <Button onPress={this.onPress} type='tertiary'>
              Button
            </Button>
            <Button onPress={this.onPress} disabled type='tertiary'>
              Button
            </Button>
            <Button onPress={this.onPress} type='tertiary'>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: colors.ui05, fontWeight: 'bold' }}>With icon</Text>
                <Icon iconStyle={{ fontSize: 14, color: colors.ui05, fontWeight: 'bold', marginLeft: 5 }} name='add-circle' />
              </View>
            </Button>
          </View>
          <H2>Ghost Button</H2>
          <View style={{ flexDirection: 'row', overflow: 'scroll' }}>
            <Button onPress={this.onPress} type='ghost'>
              Button
            </Button>
            <Button onPress={this.onPress} disabled type='ghost'>
              Button
            </Button>
            <Button onPress={this.onPress} type='ghost'>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: colors.brand01, fontWeight: 'bold' }}>With icon</Text>
                <Icon iconStyle={{ fontSize: 14, color: colors.brand01, fontWeight: 'bold', marginLeft: 5 }} name='add-circle' />
              </View>
            </Button>
          </View>
          <H2>Danger Button</H2>
          <View style={{ flexDirection: 'row', overflow: 'scroll' }}>
            <Button onPress={this.onPress} type='danger'>
              Button
            </Button>
            <Button onPress={this.onPress} disabled type='danger'>
              Button
            </Button>
            <Button onPress={this.onPress} type='danger'>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: colors.support01, fontWeight: 'bold' }}>With icon</Text>
                <Icon iconStyle={{ fontSize: 14, color: colors.support01, fontWeight: 'bold', marginLeft: 5 }} name='add-circle' />
              </View>
            </Button>
          </View>
          <H2>Primary Danger Button</H2>
          <View style={{ flexDirection: 'row', overflow: 'scroll' }}>
            <Button onPress={this.onPress} type='primaryDanger'>
              Button
            </Button>
            <Button onPress={this.onPress} disabled type='primaryDanger'>
              Button
            </Button>
            <Button onPress={this.onPress} type='primaryDanger'>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: colors.inverse01, fontWeight: 'bold' }}>With icon</Text>
                <Icon iconStyle={{ fontSize: 14, color: colors.inverse01, fontWeight: 'bold', marginLeft: 5 }} name='add-circle' />
              </View>
            </Button>
          </View>
        </ScrollView>
      </PaddedView>
    );
  }
}
export default ButtonScreen;
