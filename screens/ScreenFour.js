import React, { Component } from "react";
import { View, Text } from "react-native";
import Colors from "../constants/Colors";
import { heightToDp } from "../constants/Utils";
import Icons from "../styles/Icons";
import DrawerIcon from "../components/DrawerIcon";
import { commonStyle as commonUI } from "../styles";
import Sizes from "../constants/Sizes";
import SpeechButton from "../components/SpeechButton";
export default class ScreenFour extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <DrawerIcon navigation={this.props.navigation} />
        <View style={commonUI.screenfourContainer}>
          <View
            style={[
              commonUI.flex2Container,
              { backgroundColor: Colors.speechBackgroundColor },
            ]}
          >
            <Text style={commonUI.text20Size}>Welcome to TEST Demo</Text>
          </View>
          <View style={commonUI.flex2Container}>
            <Text style={commonUI.textscreenFour}>
              {" "}
              TEST डेमो में आपका स्वागत है
            </Text>
          </View>
          <View style={commonUI.flex2Container}>
            <SpeechButton />
          </View>
        </View>
      </>
    );
  }
}
