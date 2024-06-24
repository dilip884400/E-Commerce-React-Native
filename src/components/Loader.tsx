import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { colors } from "../constants/color";

const { height, width } = Dimensions.get("window");

const Loader = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 10,
            color: colors.defaultWhite,
            fontSize: 16,
          }}
        >
          {title ? title : "Loading is running"}
        </Text>
        <ActivityIndicator size={"large"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height - 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000080",
  },
});

export default Loader;
