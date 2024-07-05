import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { intro } from "../assets";
import { colors } from "../constants/color";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "./type";

const { height } = Dimensions.get("window");

const Intro = () => {
  const navigation: NavigationProps = useNavigation();
  return (
    <View style={styles.container}>
      {/* top */}
      <View style={styles.top}>
        <Image style={styles.introImg} source={intro} alt="intro-image" />
      </View>

      {/* bottom */}

      <View style={styles.bottom}>
        <Text style={styles.title}>Great wat to lift your style</Text>
        <Text style={styles.subtitle}>
          Complete your style with awesome collection from Bazaar shopping
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{alignItems:"flex-end", margin:10}}
      >
        <Text style={{
         color:"gray"
        }}> Designed & Developed by </Text>
        <Text style={{
         color:"gray"
        }}>- Dilip Lovevanshi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: height,
  },
  top: {
    height: height / 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  introImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    padding: 30,
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    color: colors.defaultWhite,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.textBlack,
  },
});

export default Intro;
