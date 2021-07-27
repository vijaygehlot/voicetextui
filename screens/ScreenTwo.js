import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import DrawerIcon from "../components/DrawerIcon";
import { Header } from "react-native/Libraries/NewAppScreen";
import { heightToDp } from "../constants/Utils";
import Colors from "../constants/Colors";
import SpeechButton from "../components/SpeechButton";
import Sizes from "../constants/Sizes";
import { RadioButton } from "react-native-paper";
import { commonStyle as commonUI } from "../styles";
import Icons from "../styles/Icons";
export default class ScreenTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioBtnsData: ["English", "Hindi", "Mother Tongue"],
      checked: 0,
    };
  }

  render() {
    return (
      <>
        <DrawerIcon navigation={this.props.navigation} />
        <View style={commonUI.container}>
          <View
            style={[commonUI.flex4Container, { backgroundColor:Colors.speechBackgroundColor }]}
          >
            <View style={commonUI.gridColumn}>
              <View style={commonUI.colum30}>
                <Text style={commonUI.screen3Section}>
                  <Text style={[commonUI.text20Size, { fontWeight: "bold" }]}>
                    test:{" "}
                  </Text>
                  <Text style={commonUI.text20Size}>
                    Please let me know your preferred language of interaction
                    with TEST?
                  </Text>
                </Text>
              </View>

              <View style={[commonUI.colum20,{padding:Sizes.per_2,margin:Sizes.per_2}]}>
                {this.state.radioBtnsData.map((data, key) => {
                  return (
                    <View key={key}>
                      {this.state.checked == key ? (
                        <TouchableOpacity style={commonUI.btn}>
                          <Icons.MaterialIcons
                            name="radio-button-checked"
                            color={Colors.white}
                            size={heightToDp(Sizes.per_4)}
                          />
                          <Text style={commonUI.radioText}> {data}</Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ checked: key });
                          }}
                          style={commonUI.btn}
                        >
                          <Icons.MaterialIcons
                            name="radio-button-unchecked"
                            color={Colors.white}
                            size={heightToDp(Sizes.per_4)}
                          />
                          <Text style={commonUI.radioText}> {data}</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  );
                })}
              </View>
              <View style={commonUI.colum50}>
                <View style={commonUI.sectionBorder}>
                  <Text style={[commonUI.text20Size, { padding: Sizes.per_2 }]}>
                    if mother tongue, please let us know your mother
                    tongue(Odia, Bangali etc)
                  </Text>
                </View>
                <View style={commonUI.margin2}>
                  <Text style={commonUI.text20Size}>
                    Guest: >> plese provide your mother tongue through the
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={commonUI.flex2Container}>
            <SpeechButton />
          </View>
        </View>
      </>
    );
  }
}
