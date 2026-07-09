import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import ProductDetailsScreen from "../component/productdetails";

const productImage = require("../../assets/images/shoes.png");

const watchImage = require("../../assets/images/watch.png");

export default function ProductDetails() {
  return <ProductDetailsScreen/>
}
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