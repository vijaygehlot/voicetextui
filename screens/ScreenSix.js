import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Colors from "../constants/Colors";
import { heightToDp } from "../constants/Utils";
import Icons from "../styles/Icons";
import DrawerIcon from "../components/DrawerIcon";
import Sizes from "../constants/Sizes";
import SpeechButton from "../components/SpeechButton";
import { commonStyle as commonUI } from "../styles";

export default class ScreenSix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  onChangeText = () => {};

  render() {
    return (
      <>
        <DrawerIcon navigation={this.props.navigation} />
        <View style={commonUI.screen6Container}>
          <ScrollView>
            <View style={commonUI.commonContainer}>
              <View
                style={[
                  commonUI.flex2Container,
                  { backgroundColor: "#7030a0" },
                ]}
              >
                <Text style={[commonUI.text20Size, { margin: Sizes.per_2 }]}>
                  Thank you for your information.
                </Text>
                <Text style={[commonUI.text20Size, { margin: Sizes.per_2 }]}>
                  You will get an OTP on your mobile. Please provide the same
                  through the voice or type it in the text box.
                </Text>
                <TextInput
                  style={commonUI.input}
                  onChangeText={this.onChangeText}
                  value={this.state.text}
                />
              </View>
              <View style={commonUI.screen6Data}>
                <Text style={[commonUI.text20Size, { margin: Sizes.per_2 ,color:Colors.dark}]}>
                  जानकारी के लिए धन्यवाद।
                </Text>
                <Text style={[commonUI.text20Size, { margin: Sizes.per_2,color:Colors.dark }]}>
                  आपको अपने मोबाइल पर एक ओटीपी मिलेगा। कृपया इसे आवाज के माध्यम
                  से प्रदान करें या टेक्स्ट बॉक्स म
                </Text>

                <TextInput
                  style={commonUI.input}
                  onChangeText={this.onChangeText}
                  value={this.state.text}
                />
              </View>
              <View
                style={[
                  commonUI.flex2Container,
                  { marginTop: heightToDp(Sizes.per_5) },
                ]}
              >
                <SpeechButton />
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({});
