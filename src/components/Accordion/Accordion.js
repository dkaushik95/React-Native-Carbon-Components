import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render() {
    const {title, content} = this.props;
    return (
      <View style={accordionStyle.outerContainer}>
        <TouchableHighlight underlayColor={colors.ui03} onPress={this.toggleContent} style={accordionStyle.expandButton}>
          <View style={{flexDirection: 'row'}}>
            <View style={accordionStyle.iconContainer}>
              <Icon iconStyle={{transform: [{rotate: this.state.hidden ? '0deg' : '90deg'}] }} name='navigate-next' style={accordionStyle.expandIcon} />
            </View>
            <Text style={accordionStyle.title} >{title}</Text>
          </View>
        </TouchableHighlight>
        <View style={[accordionStyle.expandedSectionContainer, {display: this.state.hidden ? 'none' : 'flex'}]} >
          <Text style={accordionStyle.content} >{content}</Text>
        </View>
      </View>
    );
  }
}

const accordionStyle = StyleSheet.create({
  outerContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.ui03
  },
  expandButton: { paddingTop: 10, paddingBottom: 10 },
  expandIcon: { textAlign: 'center', fontSize: 20, color: colors.ui05 },
  iconContainer: { width: 40 },
  title: { color: colors.text01, fontSize: 16 },
  expandedSectionContainer: { marginTop: 16, marginBottom: 24, marginLeft: 40, marginRight: 16 },
  content: { color: colors.text01, fontSize: 14 }
});

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default Accordion;
