// import { router } from "expo-router";
// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   Button,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from "react-native";

// const productImage = require("../../assets/images/shoes.png");

// const watchImage = require("../../assets/images/watch.png");

// export default function ProductDetailsScreen() {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>

//       <Image
//         source={productImage}
//         style={styles.image}
//       />

//       <Text style={styles.name}>
//         Nike Shoes
//       </Text>

//       <Text style={styles.price}>
//         ₹2999
//       </Text>

//       <Text style={styles.descriptionTitle}>
//         Description
//       </Text>

//       <Text style={styles.description}>
//         Comfortable running shoes for daily use.
//         Lightweight design with soft cushioning.
//       </Text>

//       {/* <Button
//         title="Buy Now"
//         onPress={() => Alert.alert("Proceed to Payment")}
//       /> */}

//       <Button
//   title="Buy Now"
//   onPress={() =>
//     Alert.alert(
//       "Success",
//       "Proceed to Payment?",
//       [
//         {
//           text: "OK",
//           onPress: () => router.push("/product"),
//         },
//       ]
//     )
//   }
// />

//       {/* <Image
//         source={watchImage}
//         style={styles.image}
//       />

//       <Text style={styles.name}>
//         Watch
//       </Text>

//       <Text style={styles.price}>
//         ₹4999
//       </Text>

//       <Text style={styles.descriptionTitle}>
//         Description
//       </Text>

//       <Text style={styles.description}>
//         Comfortable wearing watches for daily use.
//         Lightweight design with soft cushioning.
//       </Text>

//       <Button
//         title="Buy Now"
//         onPress={() => Alert.alert("Proceed to Payment")}
//       /> */}


//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     alignItems: "center",
//   },

//   image: {
//     width: 300,
//     height: 300,
//     borderRadius: 10,
//     marginBottom: 20,
//   },

//   name: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },

//   price: {
//     fontSize: 24,
//     color: "green",
//     marginBottom: 20,
//   },

//   descriptionTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     alignSelf: "flex-start",
//     marginBottom: 10,
//   },

//   description: {
//     fontSize: 16,
//     lineHeight: 24,
//     marginBottom: 30,
//   },
// });

import { useContext } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router, useLocalSearchParams } from "expo-router";

import { CartContext } from "../../context/CartContext";
import { products } from "..//../data/product";
import {useCart} from "../../hooks/useCart";
import { Ionicons } from "@expo/vector-icons";


export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  console.log("select id",id);

  // const { addToCart } = useContext(CartContext);
  const { addToCart,cartItems } = useCart();
  console.log("items:",cartItems);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product Not Found</Text>
      </View>
    );
  }

//   const images = [
//   { id: "1", image: require("./assets/shoes.png") },
//   { id: "2", image: require("./assets/watch.png") },
//   { id: "3", image: require("./assets/shoes.png") },
//   { id: "4", image: require("./assets/watch.png") },
// ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => router.replace("/product")}>
  <Ionicons name="arrow-back" size={28} color="black" />
</TouchableOpacity>
      <Image source={product.image} style={[styles.image,{alignSelf:"center"}]} />

      <Text style={[styles.name,{alignSelf:"center"}]}>{product.name}</Text>


      <Text style={[styles.price,{alignSelf:"center"}]}>₹{product.price}</Text>

      <View style={[styles.badge,{backgroundColor:"green"}]}>
  <Text style={[styles.badgeText, {alignSelf:"center"}]}>
    {product.rating} ★
  </Text>
</View>

      <Text style={styles.heading}>Description</Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      {/* <Button
        title="Buy Now"
        onPress={() =>
          Alert.alert("Success", "Proceed to Payment?", [
            {
              text: "OK",
              onPress: () => router.push("/product"),
            },
          ])
        }
      /> */}

      {/* <Image source={product.image} style={styles.list}/>
       <Image source={product.image} style={styles.list}/>
        <Image source={product.image} style={styles.list}/> */}
        <View style={styles.card}>
        <View style={styles.row}>
  <Image source={product.image} style={styles.list} />
  <Image source={product.image} style={styles.list} />
  <Image source={product.image} style={styles.list} />
</View>
</View>
 <View style={styles.buttonContainer}>
  {/* <Button 
        title="Buy Now"
        onPress={() =>
          Alert.alert("Success", "Proceed to Payment?", [
            {
              text: "OK",
              onPress: () => router.push({
                pathname:"/checkout",
                params:{
                  id:product.id
                }
              )};
                
            },
          ])
        }
      /> */}

 <Button
  title="Add to Cart"
  onPress={() => {
    addToCart(product);

    Alert.alert(
      "Success",
      "Product added to cart",
      [
        {
          text: "Go to Cart",
          onPress: () => router.push("/(tabs)/cart"),
        },
        {
          text: "Continue Shopping",
          style: "cancel",
        },
      ]
    );
  }}
/>
    



      <Button 
  title="Buy Now"
  onPress={() =>
    Alert.alert("Success", "Proceed to Payment?", [
      {
        text: "OK",
        onPress: () =>
          router.push({
            pathname: "/checkout",
            params: {
              id: product.id
            }
          }),
      },
    ])
  }
/>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    //alignItems: "center",
    padding: 20,
    backgroundColor:'lightblue',
    alignItems:"stretch",
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },

  price: {
    fontSize: 22,
    color: "green",
    marginVertical: 10,
  },
 

  //  button: {
  //   position: "absolute",
  //   bottom: 0,
  //   left : 0,
  //   right : 0
  // },
  buttonContainer :{
    position: "absolute",
    bottom: 9,
    // left: 10,
    // right: 10,
    width : 150,
    alignSelf: "center"
    
  },

  heading: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },

  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  // list :{
  //   flex:1,
  //   width : 160,
  //   height:160,
  //   flexDirection: "row",
  //   justifyContent:"flex-start"
  // }

   card :{
     //flex: 1,
     width:"100%",
    marginTop: 15,
    //bottom:1,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius:8,
    elevation: 3,
  },
    row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    //width:100,
    alignItems:"center"
  },

  list: {
    //:1,
    width: 120,
    height:90,
    //height: 100,
    aspectRatio:1,
    borderRadius:8,
    //marginRight: 10,
    resizeMode:"cover"
  },
   badge: {
    backgroundColor: "green",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    justifyContent:'center',
    alignSelf: "center",
  },

  badgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});