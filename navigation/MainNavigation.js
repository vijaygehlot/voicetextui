import React, { useEffect, useState } from "react";
import Color from "../constants/Colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Font from "../constants/Fonts";
//import SideMenu from "../screens/SideMenu";
import Api from "../services/Api";
import { Components } from "./Route";

export default function MainNavigation() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("MainNavigation");
    getRoutes();
  }, []);

  const getRoutes = () => {
    const route = Api.getNavigation();
    setData(route);
  };
  const Drawer = createDrawerNavigator();
  //console.log("mainNavigation Props", props.data);
  return (
    <Drawer.Navigator
      drawerPosition="right"
      //drawerContent={(props) => <SideMenu {...props} />}
      screenOptions={{
        //headerShown: true,

        headerStyle: {
          backgroundColor: Color.lightInfo,
          
        },

        headerTintColor: Color.white,

        headerTitleStyle: {
          fontWeight: Font.fw1,
        },
        gestureEnabled: true,
      }}
    >
      {data !== undefined && data.length > 0 ? (
        data.map((parent) => (
          <Drawer.Screen
            key={parent.id}
            name={parent.route}
            component={Components[parent.key]}
          />
        ))
      ) : (
        <Drawer.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name="Splash"
          component={Components.splash}
        />
      )}
    </Drawer.Navigator>
  );
}
