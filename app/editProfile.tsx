import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

export default function EditProfileScreen() {
//   const [name, setName] = useState("Kartheeswaran");
//   const [email] = useState("kartheeswaran@gmail.com");
     const { user,setUser } = useAuth();

     const [name, setName] = useState(user?.name || "");
     const [email] = useState(user?.email || "");
     const [phone, setPhone] = useState("9876543210");
     const [gender, setGender] = useState("Male");

     //const { user, setUser } = useAuth();

const handleUpdateProfile = async () => {
  try {
    const response = await axios.put(
      `http://192.168.0.36:5000/api/auth/profile/${user?.id}`,
      {
        name,
        phone,
        gender,
      }
    );

    console.log("update profile data:",response.data);

    // Update AuthContext
    setUser({  // update the values like setstate()
      ...user!,
      name,
      email: user!.email,
    });

    Alert.alert("Success", response.data.message, [
      {
        text: "OK",
        onPress: () => router.back(),
      },
    ]);
  } catch (error) {
    console.log(error);
    Alert.alert("Profile update failed");
  }
};

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Edit Profile</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter Name"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={[styles.input, styles.disabled]}
        value={email}
        editable={false}
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholder="Enter Phone Number"
      />

      <Text style={styles.label}>Gender</Text>

      <View style={styles.genderRow}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === "Male" && styles.selected,
          ]}
          onPress={() => setGender("Male")}
        >
          <Text>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === "Female" && styles.selected,
          ]}
          onPress={() => setGender("Female")}
        >
          <Text>Female</Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity
        style={styles.saveButton}
        onPress={() => router.back()}
      >
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
  style={styles.saveButton}
  onPress={handleUpdateProfile}
>
  <Text style={styles.saveText}>
    Save Changes
  </Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },

  disabled: {
    backgroundColor: "#EAEAEA",
  },

  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  genderButton: {
    width: "48%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 10,
    alignItems: "center",
  },

  selected: {
    backgroundColor: "#BFDFFF",
  },

  saveButton: {
    marginTop: 35,
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  saveText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});