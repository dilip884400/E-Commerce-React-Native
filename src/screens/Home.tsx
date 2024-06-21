import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { colors } from "../constants/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Item } from "./type";

const { height } = Dimensions.get("window");

const Home = () => {
  const [productsArray, setProductsArray] = useState([]);
  const [refreshing, setRefresing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const RenderItem = ({ item }: Item) => {
    return (
      <TouchableOpacity style={styles.productView}>
        <Image
          source={{ uri: item?.image }}
          alt="product-image"
          style={styles.img}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Header />
      <View>
        {isLoading ? (
          <Text>Loader</Text>
        ) : (
          <FlatList
            data={productsArray}
            contentContainerStyle={styles.container}
            keyExtractor={(item: any) => item?.id}
            renderItem={RenderItem}
            refreshing={refreshing}
            onRefresh={() => {
              getData();
            }}
            numColumns={2}
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
  },
  img: {},
});

export default Home;
