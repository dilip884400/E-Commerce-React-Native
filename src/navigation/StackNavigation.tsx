import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Intro from "../screens/Intro";

const RootStack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <RootStack.Navigator initialRouteName="Intro">
      <RootStack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default StackNavigation;
