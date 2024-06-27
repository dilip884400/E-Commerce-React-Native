import { View, Text, ScrollView } from "react-native";
import React from "react";
import CommonHeader from "../components/CommonHeader";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { ProductsProps } from "./type";

const Cart = () => {
  const { productData } = useSelector((state: any) => state?.orebi);

  return (
    <View>
      <CommonHeader title="Cart" />
      <ScrollView>
        {productData.length > 0 ? (
          <View>
            {productData?.map((item: ProductsProps) => (
              <CartProduct key={item?._id} item={item} />
            ))}
          </View>
        ) : (
          <View>Your Cart is Empty!</View>
        )}
      </ScrollView>
    </View>
  );
};

export default Cart;
