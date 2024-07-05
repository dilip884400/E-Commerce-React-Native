import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import CommonHeader from "../components/CommonHeader";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { NavigationProps, ProductsProps } from "./type";
import { colors } from "../constants/color";
import PriceFormate from "../components/PriceFormate";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const Cart = () => {
  const navigation: NavigationProps = useNavigation();
  const { productData } = useSelector((state: any) => state?.orebi);
  const [totalAmount, setTotalAMount] = useState(0);
  const [discountedAmount, setDiscountedAMount] = useState(0);

  useEffect(() => {
    let amt = 0;
    let discountAmt = 0;

    productData?.map((item: ProductsProps) => {
      amt += item?.price * item?.quantity;
      discountAmt = item?.price * item?.quantity;
      return;
    });
    setTotalAMount(amt);
    setDiscountedAMount(discountAmt);
  }, [productData]);
  return (
    <View>
      <CommonHeader title="Cart" />
      <ScrollView contentContainerStyle={{ paddingBottom: 100, margin: 10 }}>
        {productData.length > 0 ? (
          <>
            <View>
              {productData?.map((item: ProductsProps) => (
                <CartProduct key={item?._id} item={item} />
              ))}
            </View>
            <View style={{ backgroundColor: colors.defaultWhite, padding: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 16, color: colors.textBlack }}>
                  Subtotal
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: colors.textBlack,
                  }}
                >
                  <PriceFormate amount={totalAmount} />
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 16, color: colors.textBlack }}>
                  Discount
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.textBlack,
                  }}
                >
                  -<PriceFormate amount={totalAmount - discountedAmount} />
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 18, color: colors.textBlack }}>
                  Total
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: colors.textBlack,
                  }}
                >
                  <PriceFormate amount={discountedAmount} />
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  Toast.show({
                    type: "error",
                    text1: "Please login to initialize the Checkout",
                    text1Style: {
                      color: "red",
                    },
                    text2: "Login features is on progess, please wait...",
                    text2Style: {
                      color: "black",
                    },
                  })
                }
                style={{
                  backgroundColor: colors.buttonColor,
                  paddingVertical: 8,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 5,
                }}
              >
                <Text
                  style={{
                    color: colors.defaultWhite,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  Proceed to Checkout
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{
                  backgroundColor: colors.defaultWhite,
                  paddingVertical: 8,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 5,
                  borderWidth: 1,
                  borderColor: colors.lightText,
                }}
              >
                <Text
                  style={{
                    color: colors.textBlack,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  Continue Shopping
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: colors.defaultWhite,
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: colors.textBlack,
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Your Cart is Empty!
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                backgroundColor: colors.defaultWhite,
                paddingVertical: 8,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 5,
                borderWidth: 1,
                borderColor: colors.lightText,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: colors.textBlack,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Back to Shopping
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Cart;
