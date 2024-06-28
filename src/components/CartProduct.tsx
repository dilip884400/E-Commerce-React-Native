import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { colors } from "../constants/color";
import { MinusIcon, PlusIcon, TrashIcon } from "react-native-heroicons/outline";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../redux/orebiSlices";
import PriceFormate from "./PriceFormate";

const CartProduct = ({ item }: any) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: colors.defaultWhite,
        marginBottom: 6,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", width: 180 }}>
        <Image
          source={{ uri: item?.image }}
          style={{ width: 80, height: 80 }}
        />
        <View>
          <Text style={{ color: colors.textBlack, fontWeight: "800" }}>
            {item?.title.substring(0, 12)}
          </Text>
          <Text>{item?.brand}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 5,
          borderRadius: 4,
          width: 70,
          height: 30,
          borderColor: colors.lightText,
        }}
      >
        <Pressable onPress={() => dispatch(decreaseQuantity(item))}>
          <MinusIcon size={16} color={colors.textBlack} />
        </Pressable>

        <Text>{item?.quantity}</Text>

        <Pressable onPress={() => dispatch(increaseQuantity(item))}>
          <PlusIcon size={16} color={colors.textBlack} />
        </Pressable>
      </View>
      <Text style={{ color: colors.textBlack, fontWeight: "600" }}>
        <PriceFormate amount={item?.price * item?.quantity} />
      </Text>
      <Pressable onPress={() => dispatch(deleteProduct(item?._id))}>
        <TrashIcon size={20} color={colors.textBlack} />
      </Pressable>
    </View>
  );
};

export default CartProduct;
