import { useAuth } from "../../hooks/useAuth";
import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ProfileScreen() {
    const { user } = useAuth();

  console.log("Profile User:", user);
  return (
    <View style={styles.container}>

      {/* <Image
        source={require("../../assets/images/profile.png")}
        style={styles.image}
      /> */}

      <Text style={styles.title}>My Profile</Text>

      <View style={styles.card}>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user?.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user?.email}</Text>

        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.value}>9876543210</Text>

        <Text style={styles.label}>Gender</Text>
        <Text style={styles.value}>Male</Text>

      </View>

      <TouchableOpacity style={styles.button}
      onPress={()=> router.push("/editProfile")}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout}
      onPress={()=> router.push("/login")}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingTop: 40,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },

  label: {
    fontSize: 14,
    color: "gray",
    marginTop: 15,
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 5,
  },

  button: {
    marginTop: 25,
    width: "90%",
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  logout: {
    marginTop: 15,
    width: "90%",
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});