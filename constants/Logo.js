import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import Size from './Sizes';

export default class ComLogo extends Component {
  render() {
    return (
      <Image
        style={{...this.props.style}}
        source={require('../assets/vsplash.png')}
      />
    );
  }
}

const styles = StyleSheet.create({});
