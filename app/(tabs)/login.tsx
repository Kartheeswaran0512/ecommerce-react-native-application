// import { StyleSheet, Text, View } from 'react-native';

// export default function ContactScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Contact screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#fff',
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import api from "../../services/api";
import { router } from "expo-router";

import ForgotPassword from "./forgetPassword";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = () => {
  //   Alert.alert(
  //     "Login",
  //     `Email: ${email}\nPassword: ${password}`
  //   );
  // };

  const [emailError, setEmailError] = useState("");
  const[passwordError,setPasswordError]=useState("");
  const handleLogin = async() => {
  if (email.trim() === "" && password.trim() === "") {
    Alert.alert("Please enter email and password");
  } 
  else if (!email.endsWith("@gmail.com") ) {
    setEmailError("Please enter email valid address");
    Alert.alert("Please enter email valid address");
  } 
  else if (password.trim() === "") {
    Alert.alert("Please enter password");
  } 
  else if(password.length<8){
    setPasswordError("password atleast 8 character");
    Alert.alert("password atleast 8 character");
  }
//   else {
//     setEmailError("");
//     Alert.alert("Login Successful");
//     console.log("login success");
//   }
//   const response=await api.post("/login",{
//     email,
//     password
//   });
//   console.log("success login",response.data.message);
// };
else {
  setEmailError("");
  setPasswordError("");

  try {
    const response = await api.post("/login", {
      email,
      password,
    });

    Alert.alert("login successfully",response.data.message,[{
      text :"OK",
      onPress:()=> router.push("/product"),
    },]);
    //console.log(response.data);

  } catch (error) {
    Alert.alert("Login Failed");
    console.log(error);
  }
}
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text style={styles.error}>
  {emailError}
</Text>
       <Text style={styles.error}>
  {passwordError}
</Text>
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry  // hide password
        style={styles.input}
      />
      
      <TouchableOpacity
  onPress={() => router.push("/forgetPassword")}
>
  <Text style={ styles.forget }>
    Forgot Password?
  </Text>
</TouchableOpacity>

      <Button
        title="submit"
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal:20
    //padding: 20,
    //backgroundColor:'black'
  },
   forget:{
     alignSelf:"flex-end",
     justifyContent:"flex-end",
     color: "blue",
     //marginTop: 8,
     marginBottom: 10,
   },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign:'center',
  },

  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  error: {
  color: "red",
  fontSize:14,
   marginBottom: 10,
  alignSelf:'flex-start'

},

})