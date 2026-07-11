import axios from "axios";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
export default function ForgotPassword() {
  const[email,setEmail]=useState("");
//   const handleForgotPassword = async () => {
//   try {
//     const response = await axios.post(
//      // "http://localhost:5000/api/auth/forgotpassword",
//      "/forgotpassword",
//       {
//         email: email,
//       }
//     );

//     alert(response.data.message);

//   } catch (error) {
//     alert("Something went wrong");
//   }
// };

// const handleForgotPassword = async () => {

//   if (!email) {
//     alert("Please enter email");
//     return;
//   }

//   try {
//     const response = await axios.post(
//       //"http://localhost:5000/api/auth/forgotpassword",
//       "http://192.168.0.36:5000/api/auth/forgotpassword",
//       {
//         email,
//       }
//     );


//     console.log("API response:", response.data);


//     alert(response.data.message);

//   } catch (error) {
//     alert("Something went wrong");
//   }
// };




const handleForgotPassword = async () => {
  if (!email) {
    alert("Please enter email");
    return;
  }

  try {
    const response = await axios.post(
      "http://192.168.0.36:5000/api/auth/forgotpassword",
      {
        email,
      }
    );

    Alert.alert(
      "Success",
      response.data.message,
      [
        {
          text: "OK",
          onPress: () => router.push("/resetPassword"),
        },
      ]
    );

  } catch (error) {
    alert("Something went wrong");
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <Text style={styles.subtitle}>
        Enter your email address to reset your password.
      </Text>

      {/* <TextInput
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={s
        tyles.input}
      /> */}

      <TextInput
  placeholder="Enter your email"
  keyboardType="email-address"
  autoCapitalize="none"
  style={styles.input}
  value={email}
  onChangeText={(text) => setEmail(text)}
/>

      {/* const handleForgotPassword = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/forgotpassword",
      {
        email: email,
      }
    );

    alert(response.data.message);

  } catch (error) {
    alert("Something went wrong");
  }
}; */}
      {/* <TouchableOpacity style={styles.button}>
        onPress={handl}
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
  style={styles.button}
  onPress={handleForgotPassword}
>
  <Text style={styles.buttonText}>Send Reset Link</Text>
</TouchableOpacity>


    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});