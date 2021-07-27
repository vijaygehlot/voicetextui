import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import GeneralStatusBar from "./components/GeneralStatusBar";
export default function App() {
  return (
    <>
      <GeneralStatusBar />
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </>
  );
}


