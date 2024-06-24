import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../constants/color";

const IsNewBadge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>New</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 2,
    top: 2,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 2,
    backgroundColor: colors.textBlack,
  },
  text: {
    color: colors.defaultWhite,
    fontSize: 10,
  },
});

export default IsNewBadge;
