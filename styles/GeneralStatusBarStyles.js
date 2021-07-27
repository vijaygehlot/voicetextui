import { StyleSheet, Platform, StatusBar } from "react-native";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? Sizes.px_20 : StatusBar.currentHeight;
const statusbarStyle = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  statusbarContainer: {
    backgroundColor: Colors.lightInfo,
    height: 0,
  },
});

export default statusbarStyle;
