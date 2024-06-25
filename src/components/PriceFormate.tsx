import { View, Text } from "react-native";
import React from "react";

const PriceFormate = ({
  amount,
  style,
}: {
  amount: number | undefined;
  style?: any;
}) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <Text style={style}>{formattedAmount}</Text>;
};

export default PriceFormate;
