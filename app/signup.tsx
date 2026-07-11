// import { StyleSheet, Text, View } from 'react-native';

// export default function AboutScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>About screen</Text>
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

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   Alert,
//   StyleSheet,
// } from "react-native";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // const handleLogin = () => {
//   //   Alert.alert(
//   //     "Login",
//   //     `Email: ${email}\nPassword: ${password}`
//   //   );
//   // };

//   const [emailError, setEmailError] = useState("");
//   const[passwordError,setPasswordError]=useState("");
//   const handleLogin = () => {
//   if (email.trim() === "" && password.trim() === "") {
//     Alert.alert("Please enter email and password");
//   } 
//   else if (!email.endsWith("@gmail.com") ) {
//     setEmailError("Please enter email valid address");
//     Alert.alert("Please enter email valid address");
//   } 
//   else if (password.trim() === "") {
//     Alert.alert("Please enter password");
//   } 
//   else if(password.length<8){
//     setPasswordError("password atleast 8 character");
//     Alert.alert("password atleast 8 character");
//   }
//   else {
//     setEmailError("");
//     Alert.alert("Login Successful");
//     console.log("login success");
//   }
// };



//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <Text style={styles.error}>
//   {emailError}
// </Text>
//        <Text style={styles.error}>
//   {passwordError}
// </Text>
//       <TextInput
//         placeholder="Enter Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//       />

//       <TextInput
//         placeholder="Enter Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry  // hide password
//         style={styles.input}
//       />

//       <Button
//         title="submit"
//         onPress={handleLogin}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal:20
//     //padding: 20,
//     //backgroundColor:'black'
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 30,
//     textAlign:'center',
//   },

//   input: {
//     width: "90%",
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 10,
//   },
//   error: {
//   color: "red",
//   fontSize:14,
//    marginBottom: 10,
//   alignSelf:'flex-start'

// },

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

import { router } from "expo-router";

import api from "../services/api";
import { Ionicons } from "@expo/vector-icons";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleRegister = async() => {
    //navigation.navigate('contact');
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (name.trim() === "") {
      setNameError("Please enter your name");
    } 
    else if (email.trim() === "") {
      setEmailError("Please enter your email");
    } 
    else if (!email.trim().toLowerCase().endsWith("@gmail.com")) {
      setEmailError("Please enter a valid Gmail address");
    } 
    else if (password.trim() === "") {
      setPasswordError("Please enter your password");
    } 
    else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } 
    else if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Please confirm your password");
    } 
    else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } 
    // else {
    //   Alert.alert("Success", "Registration Successful");
    //   console.log("register suceessfully");
    // }

  //   const response = await api.post("/register",{
  //     name,
  //     email,
  //     password
  //   });
  //   console.log("sucess message",response.data.message);
  // };
//}
else {
  // try {
  //   const response = await api.post("/register", {
  //     name,
  //     email,
  //     password,
  //   });

  //   Alert.alert(response.data.message);
  //   //navigation.navigate("/contact");
  //   //console.log(response.data);
  //   // console.log(response.data.user.id);
  //   // console.log(response.data.user.name);
  //   // console.log(response.data.user.email);

  // } catch (error) {
  //   Alert.alert("Registration Failed");
  //   console.log(error);
  // }
  try {
  const response = await api.post("http://192.168.0.36:5000/api/auth/register", {
    name,
    email,
    password,
  });

  Alert.alert(
    "Success",
    response.data.message,
    [
      {
        text: "OK",
        onPress: () => router.push("/login"),
      },
    ]
  );

} catch (error) {
  console.log("error",error);
  Alert.alert("Registration Failed");
}
}
};

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign Up</Text>

      <Text>Name</Text>
      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Text style={styles.error}>{nameError}</Text>

      <Text>Email</Text>
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Text style={styles.error}>{emailError}</Text>

      {/* <Text>Password</Text>
      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
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
      <Text style={styles.error}>{passwordError}</Text>

      {/* <Text>Confirm Password</Text>
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      /> */}
      <View style={styles.passwordContainer}>
  <TextInput
    placeholder="Confirm Password"
    value={confirmPassword}
    onChangeText={setConfirmPassword}
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
      <Text style={styles.error}>{confirmPasswordError}</Text>

      <Button
        title="Register"
        onPress={handleRegister}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  passwordContainer: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
  paddingHorizontal: 10,
},

passwordInput: {
  flex: 1,
  height: 50,
},

  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 12,
    marginBottom: 5,
  },

  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 13,
  },
});