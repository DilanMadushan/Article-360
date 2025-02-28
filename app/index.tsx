import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";




export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  return (
    <LinearGradient colors={["#1E1E1E", "#292929"]} style={styles.container}>
      <StatusBar style="light" />




      <View style={styles.loginBox}>
        <Text style={styles.title}>Welcome Back!</Text>




        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#888" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
          />
        </View>




        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#888" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>


        <TouchableOpacity style={styles.button} onPress={() => router.push("/Dashboard")} >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>


        <Text style={styles.footerText}>
          Don't have an account? <Pressable onPress={() => router.push("/SignUp")} ><Text style={styles.signupText}>Sign Up</Text></Pressable> 
        </Text>
      </View>
    </LinearGradient>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    width: "80%",
    backgroundColor: "#1E1D1D",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#CE3248",
    padding: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 15,
    fontSize: 14,
    color: "#666",
  },
  signupText: {
    color: "#CE3248",
    fontWeight: "bold",
  },
});


