import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  ArrowLeftIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/outline";
import { colors } from "../constants/color";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../screens/type";
import { logo } from "../assets";

const CommonHeader = ({ title }: { title: string }) => {
  const navigation: NavigationProps = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <ArrowLeftIcon color={colors.textBlack} size={20} />
          <Text
            style={{
              color: colors.textBlack,
              marginLeft: 5,
              fontWeight: "600",
            }}
          >
            {title}
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image source={logo} alt="logo-icon" style={styles.logo} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Cart")}>
          <ShoppingCartIcon
            color={colors.textBlack}
            // fill={colors.textBlack}
            size={20}
          />

          <View style={styles.cartCount}>
            <Text style={styles.cartText}>0</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBlockColor: "gray",
  },
  logo: {
    width: 100,
    height: 25,
    objectFit: "contain",
  },
  cartCount: {
    borderRadius: 50,
    backgroundColor: "black",
    position: "absolute",
    right: -4,
    top: -6,
    width: 14,
    height: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    color: colors.defaultWhite,
    fontSize: 10,
    fontWeight: "700",
  },
  cartIcon: {},
});

export default CommonHeader;
