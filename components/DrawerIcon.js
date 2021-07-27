import React, { Component } from "react";
import { View, Text } from "react-native";
import Icons from "../styles/Icons";
import { commonStyle as commonUI } from "../styles";
import { heightToDp } from "../constants/Utils";
import Sizes from "../constants/Sizes";
export default class DrawerIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={commonUI.draweSection}>
        <Icons.MaterialIcons
          name="menu"
          size={heightToDp(Sizes.per_5)}
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </View>
    );
  }
}
