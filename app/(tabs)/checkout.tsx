import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
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
    <View style={styles.container}>

      <Text style={styles.title}>
        Checkout
      </Text>

      <Text>
        Product ID: {id}
      </Text>

      <Text style={styles.heading}>
        Order Summary
      </Text>

      <Text>
        Product Price: ₹2000
      </Text>

      <Text>
        Total Amount: ₹2000
      </Text>


      <Button
        title="Place Order"
    //     onPress={() => {
    //         handlePlaceOrder
    //       console.log("Create Order API");
    //     }}
    //   />
    onPress={handlePlaceOrder}/>

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    justifyContent:"center"
  },

  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20
  },

  heading:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:20
  }

});