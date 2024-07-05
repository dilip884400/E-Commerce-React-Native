import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { colors } from "../constants/color";
import { Item, NavigationProps } from "./type";
import Carousel from "react-native-reanimated-carousel";
import { bannerOne, bannerThree, bannerTwo } from "../assets";
import Animated from "react-native-reanimated"; // Ensure correct import for Animated
import { useNavigation } from "@react-navigation/native";
import { ShoppingCartIcon } from "react-native-heroicons/outline";
import IsNewBadge from "../components/IsNewBadge";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/orebiSlices";
import Toast from "react-native-toast-message";

const { height } = Dimensions.get("window");
const width = Dimensions.get("window").width;

const Home = () => {
  const navigation: any = useNavigation();
  const [productsArray, setProductsArray] = useState([]);
  const [refreshing, setRefresing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://jsonserver.reactbd.com/amazonpro");
      const json = await response.json();
      setProductsArray(json);
      setIsLoading(false);
    } catch (error) {
      console.log(error, "Error While Fetching Products");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const images = [bannerOne, bannerTwo, bannerThree];

  const RenderItem = ({ item }: Item) => {
    return (
      <TouchableOpacity
        style={styles.productView}
        onPress={() =>
          navigation.navigate("ProductDetails", {
            _id: item?._id,
          })
        }
      >
        <Image
          source={{ uri: item?.image }}
          alt="product-image"
          style={styles.img}
        />
        <View style={styles.textView}>
          <Text>{item?.title}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 5,
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "600",
                  color: colors.textBlack,
                  fontSize: 12,
                }}
              >
                ${item?.price}
              </Text>
              <Text
                style={{ fontSize: 12, textDecorationLine: "line-through" }}
              >
                ${item?.previousPrice}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  addToCart(item),
                  Toast.show({
                    type: "success",
                    text1: `${item.title} added successfully`,
                  })
                )
              }
              style={{
                backgroundColor: colors.designColor,
                paddingHorizontal: 10,
                paddingVertical: 7,
                borderRadius: 6,
              }}
            >
              <ShoppingCartIcon size={20} color={colors.textBlack} />
            </TouchableOpacity>
          </View>
        </View>
        {item?.isNew && <IsNewBadge />}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Header />
      <View>
        {isLoading ? (
          <Loader title="Product is Loading..." />
        ) : (
          <FlatList
            data={productsArray}
            contentContainerStyle={styles.container}
            keyExtractor={(item: any) => item?._id}
            renderItem={RenderItem}
            refreshing={refreshing}
            onRefresh={() => {
              getData();
            }}
            numColumns={2}
            ListHeaderComponent={
              <View>
                <Carousel
                  loop
                  width={width}
                  style={{ height: 210 }}
                  autoPlay={true}
                  data={images}
                  scrollAnimationDuration={1000}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <Animated.Image // Use Animated.Image instead of Image
                          source={item}
                          style={{
                            width: "100%",
                            height: 270,
                            objectFit: "cover",
                          }}
                        />
                      </View>
                    );
                  }}
                />
              </View>
            }
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultWhite,
    paddingBottom: 200,
  },
  productView: {
    flex: 1,
    height: height / 3,
    borderWidth: 0.5,
    borderColor: colors.lightText,
    margin: 5,
    borderRadius: 6,
    marginHorizontal: 10,
  },
  img: {
    height: "68%",
    width: "80%",
  },
  textView: {
    padding: 10,
  },
});

export default Home;
