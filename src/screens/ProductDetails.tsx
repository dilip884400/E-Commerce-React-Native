import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import CommonHeader from "../components/CommonHeader";
import { ProductsProps } from "./type";
import { colors } from "../constants/color";
import Loader from "../components/Loader";
import DetailsView from "../components/DetailsView";
import PriceFormate from "../components/PriceFormate";

const { height, width } = Dimensions.get("window");

const ProductDetails = ({ route }: any) => {
  const _id = route.params?._id;

  const [productData, setProductData] = useState<ProductsProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://jsonserver.reactbd.com/amazonpro/${_id}`
      );
      const json = await response.json();
      console.log(json, "Product Detials Data");
      setProductData(json);
      setIsLoading(false);
    } catch (error) {
      console.log(error, "Error While Fetching Products");
    }
  };

  useEffect(() => {
    getData();
  }, [_id]);

  return (
    <View>
      <CommonHeader title="Product Details" />
      {isLoading ? (
        <Loader title="Product Details is Loading" />
      ) : (
        <View style={styles.container}>
          <View style={styles.imgView}>
            {productData?.image && (
              <Image
                source={{ uri: productData?.image }}
                alt="product-image"
                style={styles.img}
              />
            )}
          </View>
          <DetailsView productData={productData} />
          <View style={styles.bottomMenu}>
            <View>
              <Text>
                <PriceFormate amount={productData?.price} />
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: height,
    position: "relative",
  },
  imgView: {
    width: width,
    height: height / 2,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  bottomMenu: {
    position: "absolute",
    bottom: 60,
    borderWidth: 1,
    borderColor: "black",
    width: width - 20,
    alignSelf: "center",
    borderRadius: 6,
    paddingVertical: 10,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: colors.bgColor,
    marginBottom:20,
  },
});

export default ProductDetails;
