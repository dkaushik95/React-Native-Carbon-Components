import React, { Component } from 'react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { H2, Bold, Code } from '../../components/Texts/texts';
import { PaddedView } from '../../components/View/View';
import { Text, ScrollView } from 'react-native';

class CodeSnippetScreen extends Component {
  render() {
    return (
      <PaddedView style={{flex: 1}}>
        <HeaderComponent title='Checkbox' navigation={this.props.navigation} />
        <ScrollView>
          <Bold><Bold color='#3057d5'>Code snippets</Bold> are small blocks of reusable code that can be inserted in a code file. variations:</Bold>
          <H2>Code Snippet</H2>
          <Code copy>{'@mixin grid-container {width: 100%; padding-right: padding(mobile); padding-left: padding(mobile); @include breakpoint(bp--xs--major) {padding - right: padding(xs); padding-left: padding(xs); } } $z-indexes: ( modal : 9000, overlay : 8000, dropdown : 7000, header : 6000, footer : 5000, hidden : - 1, overflowHidden: - 1, floating: 10000 );'}</Code>
          <H2>Inline Code Snippet</H2>
          <Text>Here is an example of a text that a user would be reading. In this paragraph would be <Code inline>inline code</Code> that the user could look at and copy in to their code editor.</Text>
          <H2>Multi Line Code Snippet</H2>
          <Code copy>{`@mixin grid-container {
          width: 100%;
          padding-right: padding(mobile);
          padding-left: padding(mobile);
      
          @include breakpoint(bp--xs--major) {
                  padding - right: padding(xs);
                padding-left: padding(xs);
              }
            }
          
            $z-indexes: (
              modal : 9000,
              overlay : 8000,
              dropdown : 7000,
              header : 6000,
              footer : 5000,
              hidden : - 1,
              overflowHidden: - 1,
              floating: 10000
        );`}</Code>
        </ScrollView>
      </PaddedView>
    );
  }
}
export default CodeSnippetScreen;
