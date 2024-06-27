import { View, Text } from "react-native";
import React from "react";
import { colors } from "../constants/color";
import PriceFormate from "./PriceFormate";

const DetailsView = ({ productData }: any) => {


  console.log(productData,"productData")
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text
        style={{ fontSize: 20, fontWeight: "700", color: colors.textBlack }}
      >
        {productData?.title}
      </Text>
      <Text style={{ marginVertical: 8 }}>
        {productData?.description}
        <Text>Brand: </Text>
        <Text style={{ color: colors.textBlack, fontWeight: "600" }}>
          {productData?.brand}
        </Text>
      </Text>
      <Text>
        Category:{" "}
        <Text style={{ color: colors.textBlack, fontWeight: "600" }}>
          {productData?.category}
        </Text>
      </Text>
      <Text style={{ marginVertical: 5, color: colors.designColor }}>
        You are Saving{" "}
        <PriceFormate
          style={{ color: "green", fontWeight: "600" }}
          amount={productData?.previousPrice - productData?.price}
        />{" "}
        from this product
      </Text>
    </View>
  );
};

export default DetailsView;
