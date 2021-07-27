import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";
import { statusbarStyle as statusbarUI } from "../styles";
const GeneralStatusBar = ({ ...props }) => (
  // <View style={[statusbarUI.statusBar, { backgroundColor }]}>
  //   <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  // </View>
  <SafeAreaView style={statusbarUI.statusbarContainer}>
    <StatusBar translucent={false}  backgroundColor={Colors.lightgrays} {...props} />
  </SafeAreaView>
);
export default GeneralStatusBar;
