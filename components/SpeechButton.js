import React, { Component } from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';
import {widthToDp,heightToDp} from '../constants/Utils';

export default class SpeechButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress}>
            <Image style={{height:100,width:100}} source={require('../assets/Election-Mic-Outline-icon.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}
