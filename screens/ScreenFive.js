import React, { Component } from "react";
import { View, Text } from "react-native";
import Colors from "../constants/Colors";
import { heightToDp } from "../constants/Utils";
import Icons from "../styles/Icons";
import DrawerIcon from "../components/DrawerIcon";
import Sizes from "../constants/Sizes";
import SpeechButton from "../components/SpeechButton";
import { commonStyle as commonUI } from "../styles";
export default class ScreenFive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <DrawerIcon navigation={this.props.navigation} />
        <View style={commonUI.screenfiveContainer}>
          <View
            style={[
              commonUI.flex2Container,
              { backgroundColor: Colors.speechBackgroundColor },
            ]}
          >
            <Text style={[commonUI.text20Size, { margin: Sizes.per_2 }]}>
              Please provide the below information before we start the demo?{" "}
            </Text>
            <Text style={[commonUI.text20Size, { margin: Sizes.per_2 }]}>
              Please provide Name,Mobile Number,Email Address as per the prompt{" "}
            </Text>
            <Text style={[commonUI.text20Size, { margin: Sizes.per_2 }]}>
              <Text>
                Please Click on{" "}
                <Text
                  style={[
                    commonUI.text20Size,
                    { fontWeight: "bold", textDecorationLine: "underline" },
                  ]}
                >
                  Register{" "}
                </Text>
                after providing the details
              </Text>
            </Text>
          </View>
          <View style={commonUI.screen5Border}>
            <Text style={commonUI.screen5Text}>
              {" "}
              डेमो शुरू करने से पहले कृपया नीचे दी गई जानकारी प्रदान करें?
            </Text>
            <Text style={commonUI.screen5Text}>
              कृपया शीघ्र नाम, मोबाइल नंबर, ईमेल पता प्रदान करें और रजिस्टर पर
              क्लिक करें
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
