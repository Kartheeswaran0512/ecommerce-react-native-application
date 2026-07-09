// import React from "react";
// import { Button, Image, ScrollView, Text, View } from "react-native";

// export default function Products(){
//     const shoeImage= require("../../assets/images/shoes.png");
//     const watchImae =require("../../assets/images/watch.png");
//     return(
//         <ScrollView>
//   <View>
//     <Image />
//     <Text>Product Name</Text>
//     <Text>₹2999</Text>
//     <Button title="Buy Now" />
//   </View>

//   <View>
//     <Image />
//     <Text>Product Name</Text>
//     <Text>₹4999</Text>
//     <Button title="Buy Now" />
//   </View>
// </ScrollView>
//     );
// }



import { router } from "expo-router";
import React,{useEffect,useState} from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import ProductsScreen from "../component/productpage";

const productImage = require("../../assets/images/shoes.png");
const watchImage = require("../../assets/images/watch.png");

export default function Products() {
  return <ProductsScreen/>
}
//   return (
//     <ScrollView contentContainerStyle={styles.container}>

//       <Text style={styles.title}>Products</Text>

//       {/* Row 1 */}
//       <View style={styles.row}>
//         <View style={styles.card}>
//             <TouchableOpacity
//              onPress={()=> router.push("/product_details")}>
//           <Image source={productImage} style={styles.image} />
//           </TouchableOpacity>
//           <Text>Nike Shoes</Text>
//           <Text>₹2999</Text>
//           <Button title="Buy Now" onPress={() => {}} />
//         </View>

//         <View style={styles.card}>
//             <TouchableOpacity
//                onPress={()=> router.push("/product_details")}>
//           <Image source={watchImage} style={styles.image} />
//           </TouchableOpacity>
//           <Text>Watch</Text>
//           <Text>₹4999</Text>
//           <Button title="Buy Now" onPress={() => {}} />
//         </View>
//       </View>

//       {/* Row 2 */}
//       <View style={styles.row}>
//         <View style={styles.card}>
//             <TouchableOpacity
//              onPress={()=> router.push("/product_details")}>
//           <Image source={productImage} style={styles.image} />
//           </TouchableOpacity>
//           <Text>Bag</Text>
//           <Text>₹999</Text>
//           <Button title="Buy Now" onPress={() => {}} />
//         </View>

//         <View style={styles.card}>
//             <TouchableOpacity
//               onPress={()=>router.push("/product_details")}>
//           <Image source={watchImage} style={styles.image} />
//           </TouchableOpacity>
//           <Text>Shirt</Text>
//           <Text>₹799</Text>
//           <Button title="Buy Now" onPress={() => {}} />
//         </View>
//       </View>

//       {/* Row 3 */}
//       <View style={styles.row}>
//         <View style={styles.card}>
//           <Image source={productImage} style={styles.image} />
//           <Text>Laptop</Text>
//           <Text>₹45000</Text>
//           <Button title="Buy Now" onPress={() => {}} />
//         </View>

//         <View style={styles.card}>
//           <Image source={watchImage} style={styles.image} />
//           <Text>Phone</Text>
//           <Text>₹20000</Text>
//           <Button title="Buy Now" onPress={() => {}} />
//         </View>
//       </View>

//       {/* Row 4 */}
//       <View style={styles.row}>
//         <View style={styles.card}>
//           <Image source={productImage} style={styles.image} />
//           <Text>Headset</Text>
//           <Text>₹1999</Text>
//           <Button title="Buy Now" onPress={() => {}} />
//         </View>

//         <View style={styles.card}>
//           <Image source={watchImage} style={styles.image} />
//           <Text>Keyboard</Text>
//           <Text>₹1499</Text>
//           <Button title="Buy Now" onPress={() => {}} />
//         </View>
//       </View>

//       {/* Row 5 */}
//       <View style={styles.row}>
//         <View style={styles.card}>
//           <Image source={productImage} style={styles.image} />
//           <Text>Mouse</Text>
//           <Text>₹699</Text>
//           <Button title="Buy Now" onPress={() => {}} />
//         </View>

//         <View style={styles.card}>
//           <Image source={watchImage} style={styles.image} />
//           <Text>Camera</Text>
//           <Text>₹29999</Text>
//           <Button title="Buy Now" onPress={() => {}} />
//         </View>
//       </View>

//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 15,
//     textAlign: "center",
//   },

//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 15,
//   },

//   card: {
//     width: "48%",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 10,
//     alignItems: "center",
//   },

//   image: {
//     width: 120,
//     height: 120,
//     marginBottom: 10,
//   },
// });





// below code ui and backend connect

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";

// import { router } from "expo-router";
// import api from "../../services/api";

// //const productImage = require("../../assets/images/shoes.png");

// const images={
//   "shoes.png" : require("../../assets/images/shoes.png"),
//   "watch.png" : require("../../assets/images/watch.png"),
//   //"laptop.jpg" : require("../../assets/images/laptop.jpg")
// };

// export default function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = async () => {
//     try {
//       const response = await api.get("/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Products</Text>

//       <FlatList
//         data={products}
//         numColumns={2}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <TouchableOpacity
//               onPress={() =>
//                 router.push(`/product_details?id=${item.id}`)
//               }
//             >
//               <Image
//                 source={images[item.image]}
//                 style={styles.image}
//               />
//             </TouchableOpacity>

//             <Text style={styles.name}>{item.name}</Text>

//             <Text style={styles.price}>₹{item.price}</Text>

//             <Button
//               title="Buy Now"
//               onPress={() => router.push("/product")}
//             />
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },

//   card: {
//     flex: 1,
//     margin: 8,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 10,
//     alignItems: "center",
//   },

//   image: {
//     width: 120,
//     height: 120,
//     marginBottom: 10,
//   },

//   name: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },

//   price: {
//     fontSize: 16,
//     color: "green",
//     marginBottom: 10,
//   },
// });