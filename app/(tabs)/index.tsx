import {  ActivityIndicator, FlatList, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Image } from "expo-image";

import { Button } from "react-native";

import { Alert } from "react-native";


import ImageViewer from "@/app-example/components/ui/ImageViewer";

import Buttons from "@/app-example/components/ui/button";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
const PlaceholderImage = require('../../assets/images/android-icon-background.png');
const anotherImage = require('../../assets/images/react-logo.png');

  

export default function Index() {
   const[selectImage,setSelectImage]=useState(PlaceholderImage);
   

   const[ isEnable,setIsEnable]=useState(false);

   //async is needed because asking for permission and opening the gallery take some time.
   const pickImage= async() =>{  
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!permission.granted){
      Alert.alert("permission denied");
      return;
    }
    //launchCameraAsync(); - open a camera
    const result= await ImagePicker.launchImageLibraryAsync(); // open a gallery

    if(!result.canceled){
      setSelectImage({
        uri :result.assets[0].uri
    });
  }
   };
  return (
    <View style={{justifyContent:'center',alignContent:'center'}}>  
    <Image
  source={selectImage}
  style={{ width: 200, height: 200  }}
/>
{/* <Button
  title="Choose Photo"
  onPress={() => {
      if (selectImage === PlaceholderImage) {
            setSelectImage(anotherImage);
            Alert.alert("image successfully")
          } else {
            setSelectImage(PlaceholderImage);
            Alert.alert("no changes image");
          }
        }}
/> */}
<Button
  title="Choose Photo"
  onPress={pickImage}

  
/>

<View>
  <Text nativeID="formLabel">Label for Input Field</Text>
  <TextInput aria-label="input" aria-labelledby="formLabel" />
</View>



<TouchableOpacity accessibilityRole="button">  
  <Text>Login</Text>
</TouchableOpacity>

<Text accessibilityRole="link">
  Visit google
</Text>

<TextInput
  placeholder="Search products"
  accessibilityRole="search"
/>

<Image
  source={require('../../assets/images/watch.png')}
  accessibilityRole="image"
/>

<Text accessibilityRole="keyboardkey">
  Enter
</Text>

{/* <Slider
  minimumValue={0}
  maximumValue={100}
  accessibilityRole="adjustable"
/> */}

<TouchableOpacity accessibilityRole="imagebutton">
  <Image source={require('../../assets/images/shoes.png')} />
</TouchableOpacity>

<Text accessibilityRole="header">
  Profile
</Text>

<Text accessibilityRole="alert">
  Invalid Password
</Text>

<TouchableOpacity accessibilityRole="checkbox">
  <Text>Accept Terms</Text>
  <Text>bond</Text>
</TouchableOpacity>

{/* <Picker accessibilityRole="combobox">
  <Picker.Item label="India" value="india" />
</Picker> */}

<View accessibilityRole="menu">
  <Text>Menu</Text>
</View>

<View accessibilityRole="menubar">
  <Text>File Edit View</Text>
</View>

<Text accessibilityRole="menuitem">
  Settings
</Text>

<ActivityIndicator
  accessibilityRole="progressbar"
/>
<TouchableOpacity accessibilityRole="radio">
  <Text>Male</Text>
</TouchableOpacity>

<View accessibilityRole="radiogroup">
  <Text>Gender</Text>
</View>

<View accessibilityRole="scrollbar" />

<TouchableOpacity accessibilityRole="spinbutton">
  <Text>Quantity</Text>
</TouchableOpacity>

{/* <Switch
  value={true}
  onChange={}
  accessibilityRole="switch"
/> */}

<Switch
  value={isEnable}
  onValueChange={() => setIsEnable(!isEnable)}
  accessibilityRole="switch"
/>
<Text accessibilityRole="tab">
  Home
</Text>

{/* <View accessibilityRole="tablist">
  <Text>Tabs</Text>
  <Text>about</Text>
</View> */}

<Text accessibilityRole="timer">
 00:45
</Text>

<View accessibilityRole="toolbar">
  <Button title="Save" />
  <Button title="Edit" />
</View>

{/* <FlatList
  accessibilityRole="grid"
  numColumns={2}
  data={data}
  renderItem={({ item }) => (
    <Text>{item.name}</Text>
  )}
/> */}


</View>
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image source={PlaceholderImage} style={styles.image} />
//       </View>
//       <View style={styles.footcontainer}>
//         {/* <Button label="choose photo"/> */}
//     <Button
//   title="Choose Photo" color='green'
//   onPress={() => Alert.alert("Insert a photo from Gallery")}
// />
        
//       </View>
//       {/* <View style={{flex : 1, backgroundColor:'lightblue'}}/> */}
//        <Text style={styles.text}>Hello welcome to react native developer!</Text>
//       {/* <View style={{flex : 1, backgroundColor:'lightgreen'}}/> */}
//       {/* <Link href="/about" style={styles.button}> go to about screen</Link>
//       <Link href="/contact" style={styles.button}> contact us</Link> */}
//       {/* <Text style={styles.text}>Hello welcome to react native developer!</Text> */}
//     </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor:'lightblue',
    alignItems: 'center',
   justifyContent:'center',
  },
  text :{
    //flex:1,
    color: 'red',
    fontSize: 19,
    justifyContent:'center',
    alignContent:'center'
  },
  button :{
    fontSize : 20,
    textDecorationLine:'underline',
    color :'blue'
  },
   imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 280,
    borderRadius: 18,
  },
  footcontainer :{
    flex :1/3,
    alignItems:'center'
  }
});
