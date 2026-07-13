import { View, Text, FlatList, Image, StyleSheet, Button, Alert } from "react-native";
import { useCart } from "../../hooks/useCart";
import { router } from "expo-router";

export default function CartScreen() {

  const { cartItems,removeFromCart } = useCart();
    console.log("cartitems:",cartItems);

  return (
    <View style={styles.container}>
  <Text style={styles.heading}>My Cart</Text>

  <FlatList
    data={cartItems}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
      <View style={styles.card}>

        <Image
          source={item.image}
          style={styles.image}
        />

        <Text>{item.name}</Text>

        <Text>₹{item.price}</Text>

        <Text>{item.rating} ⭐</Text>

        {/* <Button
  title="Remove"
  onPress={() => removeFromCart(item.id)}
/> */}
<Button
  title="Remove"
  onPress={() => {
    removeFromCart(item.id);

    Alert.alert(
      "Success",
      "Product removed from cart",
      [
        // {
        //   text: "OK",
        //   onPress: () => router.push("/product"),
        // },
          {
          text: "Go to Product page",
          onPress: () => router.push("/product"),
        },
        {
          text: "Continue My cart page",
          style: "cancel",
        },
      ]
    );
  }}
/>

      </View>
    )}
  />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    resizeMode: "contain",
  },
});