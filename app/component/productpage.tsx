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



// import { router } from "expo-router";
// import React,{useEffect,useState} from "react";
// import {
//   ScrollView,
//   View,
//   Text,
//   Image,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   TextInput
// } from "react-native";

// const productImage = require("../../assets/images/shoes.png");
// const watchImage = require("../../assets/images/watch.png");

// export default function ProductsScreen() {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>

//       <Text style={styles.title}>Products</Text>

//       <TextInput
//         placeholder="Search products"
//         accessibilityRole="search"
//       />

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





// below code ui and backend connect(8/7/26)

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


// chatgpt code (9/7/26)

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Button,
//   StyleSheet,
//   Switch,
// } from "react-native";
// import { router } from "expo-router";

// const productImage = require("../../assets/images/shoes.png");
// const watchImage = require("../../assets/images/watch.png");

// const products = [
//   { id: "1", name: "Nike Shoes", price: 2999, image: productImage },
//   { id: "2", name: "Watch", price: 4999, image: watchImage },
//   { id: "3", name: "Bag", price: 999, image: productImage },
//   { id: "4", name: "Shirt", price: 799, image: watchImage },
//   { id: "5", name: "Laptop", price: 45000, image: productImage },
//   { id: "6", name: "Phone", price: 20000, image: watchImage },
//   { id: "7", name: "Headset", price: 1999, image: productImage },
//   { id: "8", name: "Keyboard", price: 1499, image: watchImage },
//   { id: "9", name: "Mouse", price: 699, image: productImage },
//   { id: "10", name: "Camera", price: 29999, image: watchImage },
// ];

// export default function ProductsScreen() {
//   const [search, setSearch] = useState("");

//   //const[isEnable,setIsEnable]=useState("false");
//   const [isDark, setIsDark] = useState(false);

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Products</Text>
//       {/* <Switch
//       value={isEnable}
//       onValueChange={()=>setIsEnable(!isEnable)}
//       accessibilityRole="switch"
//       /> */}
//       {/* <View
//      style={[
//         styles.container,
//         {
//           backgroundColor: isDark ? "#222" : "#fff",
//         },
//       ]}
//     > */}
//        {/* <Text
//         style={{
//           color: isDark ? "#fff" : "#000",
//           fontSize: 20,
//           marginBottom: 20,
//         }}
//       >
//         {isDark ? "Dark Theme" : "Light Theme"}
//       </Text>
//         <Switch
//         value={isDark}
//         onValueChange={() => setIsDark(!isDark)}
//         accessibilityRole="switch"
//       /> */}
      

//       <TextInput
//         placeholder="Search products"
//         value={search}
//         onChangeText={setSearch}
//         accessibilityRole="search"
//         style={styles.searchInput}
//       />

//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         columnWrapperStyle={styles.row}
//         showsVerticalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <TouchableOpacity
//               onPress={() => router.push("/product_details")}
//             >
//               <Image source={item.image} style={styles.image} />
//             </TouchableOpacity>

//             <Text style={styles.name}>{item.name}</Text>
//             <Text style={styles.price}>₹{item.price}</Text>

//             <Button title="Buy Now" onPress={() => {}} />
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: "#fff",
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 15,
//     textAlign: "center",
//   },

//   searchInput: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     marginBottom: 20,
//   },

//   row: {
//     justifyContent: "space-between",
//   },

//   card: {
//     width: "48%",
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 15,
//     alignItems: "center",
//     elevation: 3,
//   },

//   image: {
//     width: 120,
//     height: 120,
//     resizeMode: "contain",
//     marginBottom: 10,
//   },

//   name: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },

//   price: {
//     fontSize: 15,
//     color: "green",
//     marginBottom: 10,
//   },
// });



import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

import { products } from "../../data/product";

import Stack from "expo-router";

import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

export default function ProductsScreen() {
  const [search, setSearch] = useState("");
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
  if (theme === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) // search filter based product name 
  );

  return (
    //<View style={styles.container}>
  //   <View 
  //     style={[
  //   styles.container,
  //   {
  //     backgroundColor: theme === "light" ? "yellow" : "black",
  //   },
  // ]}>
  <View
  style={{
    flex: 1,
    backgroundColor: theme === "light" ? "lighblue" : "white",
  }}
>
      <Text style={styles.title}>Products</Text>
      <TouchableOpacity
  onPress={toggleTheme}
  style={{
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  }}
>
  {/* <Text style={{ color: "white" }}>
    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
  </Text> */}
 <Text
  style={{
    color: theme === "light" ? "grey" : "white",
    fontSize: 20,
  }}
>
  {theme}
</Text>
</TouchableOpacity>
      <TextInput
        placeholder="Search Product"
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/product_details",
                  params: {
                    id: item.id,   // pass the id ok 
                  },
                })
              }
            >
              <Image source={item.image} style={styles.image} />
            </TouchableOpacity>

            <Text>{item.name}</Text>

            <Text>₹{item.price}</Text>

            <Button title="Buy Now" onPress={() => {router.push({
              pathname: "/product_details",
              params: {
                id: item.id,
              },
            })
          }}
             />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 15,
  //   //backgroundColor:'lightblue'
  //   backgroundColor: theme === "light" ? "white" : "black",
  // },
  container: {
  flex: 1,
  padding: 15,
},

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },

  card: {
    flex: 1,
    margin: 8,
    padding: 10,
    backgroundColor: "skyblue",
    alignItems: "center",
    elevation: 3,
  },

  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});