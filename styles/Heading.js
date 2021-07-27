import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import Size from '../constants/Sizes';

export default class H1 extends Component {
  render() {
    return (
      <Text style={{...styles.tag1, ...this.props.style}}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  tag1: {
    fontSize: Size.px_20,
  },
});
