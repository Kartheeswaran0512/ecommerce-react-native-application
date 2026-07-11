import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import axios from "axios";

export default function CheckoutScreen() {

  const { id } = useLocalSearchParams();
  console.log("id :",id);

  // below api only create orders

//    const handlePlaceOrder = async () => {

//     try {

//       const response = await axios.post(
//         "http://192.168.0.36:5000/api/orders",
//         {
//           user_id: 1,
//           total_amount: 2000,
//           items: [
//             {
//               product_id: id,
//               quantity: 1,
//               price: 2000
//             }
//           ]
//         }
//       );


//       Alert.alert(
//         "Success",
//         response.data.message
//       );


//       console.log("give data",response.data);
//         console.log("give data",response.data.message);


//     } catch (error) {

//       console.log(error);

//       Alert.alert(
//         "Error",
//         "Order creation failed"
//       );

//     }
    

//   };


const handlePlaceOrder = async () => {
  try {

    // Step 1: Create Order
    const response = await axios.post(
      "http://192.168.0.36:5000/api/orders",
      {
        user_id: 1,
        total_amount: 2000,
        items: [
          {
            product_id: id,
            quantity: 1,
            price: 2000,
          },
        ],
      }
      
    );
    console.log("data :",response.data);

    // Step 2: Get order_id
    const orderId = response.data.order_id;

    // Step 3: Save Payment
    await axios.post(
      "http://192.168.0.36:5000/api/payments",
      {
        order_id: orderId,
        payment_id: "pay_demo_123",
        payment_status: "Success",
      }
    );

    // Step 4: Show Success
    Alert.alert("Payment Successful");
    console.log("order id:",orderId);
    console.log("data",response.data);


  } catch (error) {
    Alert.alert("Something went wrong");
  }
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
  style={styles.button}
  onPress={()=>router.push("/login")}
>
  <Text style={styles.title}>logout</Text>
</TouchableOpacity>
      <View style={styles.card}>

      <Text style={styles.checkout}>
        Checkout
      </Text>

      <Text style={styles.id}>
        Product ID: {id}
      </Text>

      <Text style={styles.heading}>
        Order Summary
      </Text>

      <Text style={styles.price}>
        Product Price: ₹2000
      </Text>

      <Text style={styles.Amount}>
        Total Amount: ₹2000
      </Text>


      {/* <Button 
        title="Place Order"
    //     onPress={() => {
    //         handlePlaceOrder
    //       console.log("Create Order API");
    //     }}
    //   />
    onPress={handlePlaceOrder}/> */}
    <TouchableOpacity
  style={styles.button}
  onPress={handlePlaceOrder}
>
  <Text style={styles.title}>Place Order</Text>
</TouchableOpacity>

    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    justifyContent:"center",
    borderRadius:8,
    alignItems:"center"
  },
  card :{
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 5,          // Android shadow
    shadowColor: "#000",   // iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  checkout:{
    color :"black",
    fontWeight:"bold",
    fontSize : 25
  },
  id :{
    marginTop:10
  },

  title:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10,
    color:"blue"
  },

  heading:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:20
  },
  button :{
    //marginTop : 30,
      backgroundColor: "lightyellow",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop:15,
  },
  price :{
    marginTop:5
  },
  Amount :{
    marginTop: 5
  }

});