import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamsList = {
  Home: undefined;
  Intro: undefined;
  Cart: undefined;
  ProductDetails: undefined;
  Contact: undefined;
  Checkout: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamsList>;

export interface ProductsProps{
    brand:string;
    category:string;
    description:string;
    image:string;
    isNew:boolean;
    price:number;
    previousPrice:number;
    quantity:string;
    title:string;
    _id:number;
}

export interface Item {
    item: ProductsProps;
}