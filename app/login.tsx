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

import api from "../services/api";
import { router } from "expo-router";

import ForgotPassword from "./forgetPassword";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    const response = await api.post("http://192.168.0.36:5000/api/auth/login", {
      email,
      password,
    });

    Alert.alert("login successfully",response.data.message,[{
      text :"OK",
      //onPress:()=> router.push("/product"),
      onPress:()=> router.replace("/(tabs)"),
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
  <TouchableOpacity onPress={()=>router.push("/product")}>
    <Text> product</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>router.push("/signup")}>

 <Text style={styles.account}> I dont have account</Text>
 </TouchableOpacity>
</Text>
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      {/* <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry  // hide password
        style={styles.input}
      /> */}

      <View style={styles.passwordContainer}>
  <TextInput
    placeholder="Enter Password"
    value={password}
    onChangeText={setPassword}
    secureTextEntry={!showPassword}
    style={styles.passwordInput}
  />

  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
    <Ionicons
      name={showPassword ? "eye-off-outline" : "eye-outline"}
      size={24}
      color="gray"
    />
  </TouchableOpacity>
</View>
      
      <TouchableOpacity
  onPress={() => router.push("/forgetPassword")}
>
  <Text style={ styles.forget }>
    Forgot Password?
  </Text>
</TouchableOpacity>

{/* <TouchableOpacity onPress={()=>router.push("/signup")}>

 <Text style={styles.account}> I dont have account</Text>
 </TouchableOpacity> */}

      {/* <Button
        title="submit"
        onPress={handleLogin}
      /> */}
      <TouchableOpacity
      style={styles.loginbutton}
        onPress={handleLogin}>
          <Text  style={styles.loginpage}>login</Text>
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal:15,
    //padding: 20,
    //backgroundColor:'black'
  },
//   passwordContainer: {
//   flexDirection: "row",
//   alignItems: "center",
//   borderWidth: 1,
//   borderColor: "#ccc",
//   borderRadius: 8,
//   paddingHorizontal: 15,
// },
passwordContainer: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
  paddingHorizontal: 15,
  width: "100%",
},
passwordInput: {
  flex: 1,
  height: 50,
},
   forget:{
     alignSelf:"flex-end",
     justifyContent:"flex-end",
     color: "blue",
     marginLeft: 200,
     //marginTop: 8,
     marginBottom: 10,
   },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign:'center',
  },
  loginbutton :{
    backgroundColor:"lightblue",
    paddingVertical:12,
    paddingHorizontal:30,
    borderRadius: 5,
    marginRight: 25
  },
  loginpage :{
      fontSize : 20,
  },
  account :{
    marginLeft:200,
    color:"blue",
    textDecorationLine:"underline"
  },

  input: {
    width: "100%",
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