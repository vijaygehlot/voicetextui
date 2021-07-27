import React, { Component } from "react";
import { View, Text } from "react-native";
import Colors from "../constants/Colors";
import { heightToDp } from "../constants/Utils";
import Icons from "../styles/Icons";
import DrawerIcon from "../components/DrawerIcon";
import Sizes from "../constants/Sizes";
import SpeechButton from "../components/SpeechButton";
import { commonStyle as commonUI } from "../styles";
export default class ScreenThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      englishArr: ["Demo", "Basic", "Professional"],
      hindiAree: ["प्रदर्शन", "बुनियादी", "पेशेवर"],
    };
  }
  goAhead=()=>{
    this.props.navigation.navigate('ScreenFour')
  }
  render() {
    return (
      <>
        <DrawerIcon navigation={this.props.navigation} />
        <View style={commonUI.screenthreeContainer}>
          <View
            style={[
              commonUI.flex2Container,
              { backgroundColor: Colors.speechBackgroundColor},
            ]}
          >
            {this.state.englishArr.map((data, i) => {
              return (
                <Text
                  style={[commonUI.text20Size, { margin: Sizes.per_5 }]}
                  key={i}
                >
                  {data}
                </Text>
              );
            })}
          </View>
          <View style={commonUI.flex2Container}>
            {this.state.hindiAree.map((data, i) => {
              return (
                <Text style={commonUI.screen3Data} key={i}>
                  {data}
                </Text>
              );
            })}
          </View>
          <View style={commonUI.flex2Container}>
            <SpeechButton onPress={this.goAhead} />
          </View>
        </View>
      </>
    );
  }
}
