import React, { Component } from "react";
import { View, Text } from "react-native";
import SpeechButton from "../components/SpeechButton";
import Colors from "../constants/Colors";
import { heightToDp } from "../constants/Utils";
import { commonStyle as commonUI } from "../styles";
import Icons from "../styles/Icons";
import DrawerIcon from "../components/DrawerIcon";
export default class ScreenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <DrawerIcon navigation={this.props.navigation} />
        <View style={commonUI.container}>
          <View
            style={[commonUI.flex2Container, { backgroundColor: "#7030a0" }]}
          >
            <Text style={commonUI.text25Size}>TEST</Text>
            <Text style={commonUI.text20Size}>
              Learn english with incridible swag
            </Text>
          </View>
          <View style={commonUI.flex4Container}>
            <SpeechButton />
          </View>
        </View>
      </>
    );
  }
}
